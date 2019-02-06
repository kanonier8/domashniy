import React, { Component } from 'react';
import styles from './Series.module.css';

import { connect } from 'react-redux';
import { getSeries } from '../../redux/actions/series';
import { getVideo } from '../../redux/actions/video';

import Spinner from '../Spinner/';

class Series extends Component {

  state = {
    progress: 0,
    watching: false
  };

  componentDidMount() {
    this.props.getSeriesAction('series/0.json');
  }

  handleClick = (event) => {
    event.preventDefault();
    const idSelectVideo = parseInt(event.currentTarget.dataset.id);
    this.setState({ idActiveSeason: idSelectVideo });
    this.props.getVideoAction(`project/${idSelectVideo}.json`);
  }


  renderList(data) {
      return data.map((item, index) => {
        let classImage = styles.image;
        let hasDuration = item.duration && !item.announce && !this.state.watching && !item.progress;
        let hasDate = item.date && !item.announce && !this.state.watching && !item.progress;
        let hasPlay = !item.announce && !this.state.watching;
        let imageContent = '';
        if (item.announce) {
          classImage = styles.imageNotification;
          imageContent = <div className={styles.notification}>{new Date(item.announce)}</div>
        } else if (item.progress) {
          classImage = styles.imageProgress;
          imageContent = (<div className={styles.progress}>
                             <div className={styles.progressBar}></div>
                          </div>);
        }
      return (
          <li className={styles.item} key={item.id}>
              <a href="/" className={styles.link}
                          data-id={item.id}
                          onClick={this.handleClick}>
                  <div className={classImage}>
                      <img src={item.poster} alt={item.title}/>
                      { imageContent }
                      { hasPlay && <div className={styles.play} /> }
                      { hasDuration && <div className={styles.duration}>{item.duration}</div> }
                  </div>
                  <div className={styles.info}>
                      <div className={styles.title}>
                          <div className={styles.series}>{item.series} серия</div>
                          <div className={styles.season}>{item.season} сезон</div>
                      </div>
                      { hasDate && <div className={styles.date}>{new Date(item.date)}</div> }
                  </div>
              </a>
          </li>
      )
    })
  }


  render() {
    const {isFetching, data} = this.props;
    return (
      <div className={isFetching ? styles.contentLoading : styles.content}>
          { isFetching && <Spinner/> }
        <ul className={styles.list}>
            { data.length && this.renderList(data) }
        </ul>
        <button className={styles.toggle}>Показать все</button>
      </div>
    )
  }

};

const mapStateToProps = (store) => {
    return { ...store.series }
};

const mapDispatchToProps = dispatch => {
    return {
        getSeriesAction: (seasonId) => dispatch(getSeries(seasonId)),
        getVideoAction: (videoId) => dispatch(getVideo(videoId)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Series);
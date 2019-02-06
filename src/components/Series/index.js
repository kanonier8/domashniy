import React, { Component } from 'react';
import PropTypes, { arrayOf, shape } from 'prop-types';

import Spinner from '../Spinner/';

import { connect } from 'react-redux';
import { getSeries } from '../../redux/actions/series';
import { getVideo, getVideoFromHistory } from '../../redux/actions/video';

import styles from './Series.module.css';

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
    if (this.props.videoHistory[`project/${idSelectVideo}.json`]) {
        this.props.getVideoFromHistoryAction(`project/${idSelectVideo}.json`);
    } else {
        this.props.getVideoAction(`project/${idSelectVideo}.json`);
    }
  };


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

}

Series.propTypes = {
    isFetching: PropTypes.bool,
    data: arrayOf(shape({
        announce: PropTypes.number,
        duration: PropTypes.string,
        id: PropTypes.number,
        poster: PropTypes.string,
        published: PropTypes.number,
        season: PropTypes.string,
        series: PropTypes.string,
        title: PropTypes.string
    })),
    history: PropTypes.object
};

const mapStateToProps = (store) => {
    return { ...store.series, videoHistory: store.video.history }
};

const mapDispatchToProps = dispatch => {
    return {
        getSeriesAction: (seasonId) => dispatch(getSeries(seasonId)),
        getVideoAction: (videoId) => dispatch(getVideo(videoId)),
        getVideoFromHistoryAction: (videoId) => dispatch(getVideoFromHistory(videoId)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Series);
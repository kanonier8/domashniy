import React, { Component } from 'react';
import PropTypes, {arrayOf, shape} from 'prop-types';
import Flickity from 'flickity';

import { connect } from 'react-redux';
import { getSeasons } from '../../redux/actions/seasons';
import { getSeries, getSeriesFromHistory } from '../../redux/actions/series';

import styles from './Seasons.module.css';
import './Carousel.css';

class Seasons extends Component {

  state = { };

  historySeries = [];

  componentDidMount() {

    this.props.getSeasonsAction('seasons/velvek.json');

    this.carouselConfig = {
      prevNextButtons: false,
      pageDots: false,
      cellAlign: 'left'
    };

  }

  componentDidUpdate() {
    if (this.props.data && this.props.data.length) {
      this.initCarousel();
    }
  }

  initCarousel() {
    if (window.innerWidth >= 1024) {
      this.carouselConfig.prevNextButtons = true;
    }
    this.carousel = new Flickity(this.list, this.carouselConfig);
  }

  handleClick = (event) => {
    event.preventDefault();
    const idSelectSeason = parseInt(event.currentTarget.dataset.id);
    this.setState({ idActiveSeason: idSelectSeason });
    if (this.props.seriesHistory[`series/${idSelectSeason}.json`]) {
        this.props.getSeriesFromHistoryAction(`series/${idSelectSeason}.json`);
    } else {
        this.props.getSeriesAction(`series/${idSelectSeason}.json`);
    }
  };

  renderList = (data) => {
      return data.map((item, index) => {
      return (
        <li className={styles.item} key={item.id}>
          <a className={(this.state.idActiveSeason  === item.id) ? styles.linkActive : styles.link}
              data-id={item.id}
              onClick={this.handleClick}
              href="/">
              {item.title}
          </a>
        </li>)
    });
  };

  render() {
    const data = this.props.data;

    return (
      <nav className={styles.content}>
        <h3 className={styles.title}>Сезоны</h3>
        <ul className={data.length ? styles.carousel : styles.list} ref={el => this.list = el}>
            {
              data.length &&
              this.renderList(data)
            }
        </ul>
      </nav>
    )
  }

}

Seasons.propTypes = {
    isFetching: PropTypes.bool,
    data: arrayOf(shape({
        id: PropTypes.number,
        url: PropTypes.string,
        title: PropTypes.string
    }))
};

const mapStateToProps = (store) => {
  return { ...store.seasons, seriesHistory: store.series.history }
};

const mapDispatchToProps = dispatch => {
  return {
    getSeasonsAction: (projectId) => dispatch(getSeasons(projectId)),
    getSeriesAction: (seasonId) => dispatch(getSeries(seasonId)),
    getSeriesFromHistoryAction: (seasonId) => dispatch(getSeriesFromHistory(seasonId)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Seasons);
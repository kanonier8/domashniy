import React, { Component } from 'react';
import Flickity from 'flickity';

import { connect } from 'react-redux';
import { getSeasons } from '../../redux/actions/seasons';
import { getSeries } from '../../redux/actions/series';

import styles from './Seasons.module.css';
import './Carousel.css';

class Seasons extends Component {

  state = {};

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
    this.setState({ idActiveSeason: idSelectSeason});
    this.props.getSeriesAction(`series/${idSelectSeason}.json`);
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

};


const mapStateToProps = (store) => {
  return { ...store.seasons }
};

const mapDispatchToProps = dispatch => {
  return {
    getSeasonsAction: (projectId) => dispatch(getSeasons(projectId)),
    getSeriesAction: (seasonId) => dispatch(getSeries(seasonId)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Seasons);
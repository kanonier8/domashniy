import React, { Component } from 'react';
import Flickity from 'flickity';

import { connect } from 'react-redux';
import { getSeasons } from '../../redux/actions/seasons';

import styles from './Seasons.module.css';
import './Carousel.css';

class Seasons extends Component {

  state = { };

  componentDidMount() {

    this.props.getSeasonsAction('/seasons.json');

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
    this.setState({ anchor: event.currentTarget.getAttribute('href').slice(1) });
  };

  renderList(data) {
    return data.map((item, index) => (
      <li className={styles.item} key={item.id}>
        <a className={index === 0 ? styles.linkActive : styles.link}
            onClick={this.handleClick}
            href="/">{item.title}</a>
      </li>
    ));
  }

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
    getSeasonsAction: (projectID) => dispatch(getSeasons(projectID)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Seasons);
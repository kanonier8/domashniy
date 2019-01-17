import React, { Component } from 'react';
import Flickity from 'flickity';
import styles from './Seasons.module.css';
import './Carousel.css';

class Seasons extends Component {

  state = {
    carouselInit: false
  };

  componentDidMount() {

    this.carouselConfig = {
      prevNextButtons: false,
      pageDots: false,
      cellAlign: 'left'
    };
    
    if (window.innerWidth >= 1024) {
      this.carouselConfig.prevNextButtons = true;
    }


    this.carousel = new Flickity(this.list, this.carouselConfig);
    if (this.carousel instanceof Flickity) {
      this.setState({ carouselInit: true });
    }

  }

  handleClick = (event) => {
    event.preventDefault();
    this.setState({ anchor: event.currentTarget.getAttribute('href').slice(1) });
  };

  render() {

    return (
      <nav className={styles.content}>
        <h3 className={styles.title}>Сезоны</h3>
        <ul className={this.state.carouselInit ? styles.carousel : styles.list} ref={el => this.list = el}>
            <li className={styles.item}>
              <a className={styles.linkActive} href="/">10</a>
            </li>
            <li className={styles.item}>
              <a className={styles.link} href="/">9</a>
            </li>
            <li className={styles.item}>
              <a className={styles.link} href="/">8</a>
            </li>
            <li className={styles.item}>
              <a className={styles.link} href="/">7</a>
            </li>
            <li className={styles.item}>
              <a className={styles.link} href="/">6</a>
            </li>
            <li className={styles.item}>
              <a className={styles.link} href="/">5</a>
            </li>
            <li className={styles.item}>
              <a className={styles.link} href="/">4</a>
            </li>
            <li className={styles.item}>
              <a className={styles.link} href="/">3</a>
            </li>
            <li className={styles.item}>
              <a className={styles.link} href="/">2</a>
            </li>
            <li className={styles.item}>
              <a className={styles.link} href="/">1</a>
            </li>
            <li className={styles.item}>
              <a className={styles.link} href="/">Эксклюзив</a>
            </li>
            <li className={styles.item}>
              <a className={styles.link} href="/">Промо</a>
            </li>
        </ul>
      </nav>
    )
  }

};

export default Seasons;
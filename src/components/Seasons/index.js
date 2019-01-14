import React, { Component } from 'react';
import Flickity from 'react-flickity-component';
import styles from './Seasons.module.css';

class Seasons extends Component {

  state = {
    sliderOptions: {
      prevNextButtons: false,
      pageDots: false,
      cellAlign: 'left'
    }
  };

  render() {

    return (
      <nav className={styles.content}>
        <h3 className={styles.title}>Сезоны</h3>
        <Flickity options = {this.state.sliderOptions} className={styles.list}>
            <a className={styles.linkActive} href="/">10</a>
            <a className={styles.link} href="/">9</a>
            <a className={styles.link} href="/">8</a>
            <a className={styles.link} href="/">7</a>
            <a className={styles.link} href="/">6</a>
            <a className={styles.link} href="/">5</a>
            <a className={styles.link} href="/">4</a>
            <a className={styles.link} href="/">3</a>
            <a className={styles.link} href="/">2</a>
            <a className={styles.link} href="/">1</a>
            <a className={styles.link} href="/">Эксклюзив</a>
            <a className={styles.link} href="/">Промо</a>
        </Flickity>
      </nav>
    )
  }

};

export default Seasons;
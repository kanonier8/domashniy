import React, { Component } from 'react';
import Flickity from 'flickity';
import styles from './Nav.module.css';


class Nav extends Component {

  state = {
    anchor: 'anchor1',
    carouselInit: false
  };



  componentDidMount() {

    this.carouselConfig = {
      prevNextButtons: false,
      pageDots: false,
      cellAlign: 'left'
    };

    if (window.innerWidth < 1024) {
      this.carousel = new Flickity(this.list, this.carouselConfig);
      if (this.carousel instanceof Flickity) {
        this.setState({ carouselInit: true });
      }
    } else if (this.carousel instanceof Flickity) {
      this.carousel.destroy();
    }

  }

  handleClick = (event) => {
    event.preventDefault();
    this.setState({anchor: event.currentTarget.getAttribute('href').slice(1)});
  };


  render() {
    return (
      <nav className={styles.content}>
        <ul className={this.state.carouselInit ? styles.carousel : styles.list} ref={el => this.list = el}>
          <li className={styles.item}>
            <a className={this.state.anchor === 'anchor1' ? styles.linkActive : styles.link} 
              href="#anchor1"
              onClick={this.handleClick}>
              все серии
            </a>
          </li>
          <li className={styles.item}>
            <a className={this.state.anchor === 'anchor2' ? styles.linkActive : styles.link} 
              href="#anchor2"
              onClick={this.handleClick}>
              статьи
            </a>
          </li>
          <li className={styles.item}>
            <a className={this.state.anchor === 'anchor3' ? styles.linkActive : styles.link} 
              href="#anchor3"
              onClick={this.handleClick}>
              смотри также
            </a>
          </li>
          <li className={styles.item}>
            <a className={this.state.anchor === 'anchor4' ? styles.linkActive : styles.link} 
              href="#anchor4"
              onClick={this.handleClick}>
              комментарии
            </a>
          </li>
          <li className={styles.item}>
            <a className={this.state.anchor === 'anchor5' ? styles.linkActive : styles.link} 
              href="#anchor5"
              onClick={this.handleClick}>
              герои
            </a>
          </li>
          <li className={styles.item}>
            <a className={this.state.anchor === 'anchor6' ? styles.linkActive : styles.link} 
              href="#anchor6"
              onClick={this.handleClick}>
              о сериале
            </a>
          </li>
        </ul>
      </nav>
    )
  }

};

export default Nav;
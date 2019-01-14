import React, { Component } from 'react';
import Flickity from 'react-flickity-component';
import styles from './Nav.module.css';


class Nav extends Component {



  componentDidMount() {
    // if (window.innerWidth >= 1024) {
    //   this.flkty.destroy();
    // }
  }

  handleClick = (event) => {
    event.preventDefault();
    this.setState({anchor: event.currentTarget.getAttribute('href').slice(1)});
  };

  state = {
    anchor: 'anchor1',
    sliderOptions: {
      prevNextButtons: false,
      pageDots: false,
      cellAlign: 'left'
    }
  };

  render() {
    return (
      <nav className={styles.content}>
        {/* <Flickity options={this.state.sliderOptions} className={styles.list} flickityRef={elem => this.flkty = elem}> */}
          <div className={styles.list}>
            <a className={this.state.anchor === 'anchor1' ? styles.linkActive : styles.link} 
              href="#anchor1"
              onClick={this.handleClick}>
              все серии
            </a>
            <a className={this.state.anchor === 'anchor2' ? styles.linkActive : styles.link} 
              href="#anchor2"
              onClick={this.handleClick}>
              статьи
            </a>
            <a className={this.state.anchor === 'anchor3' ? styles.linkActive : styles.link} 
              href="#anchor3"
              onClick={this.handleClick}>
              смотри также
            </a>
            <a className={this.state.anchor === 'anchor4' ? styles.linkActive : styles.link} 
              href="#anchor4"
              onClick={this.handleClick}>
              комментарии
            </a>
            <a className={this.state.anchor === 'anchor5' ? styles.linkActive : styles.link} 
              href="#anchor5"
              onClick={this.handleClick}>
              герои
            </a>
            <a className={this.state.anchor === 'anchor6' ? styles.linkActive : styles.link} 
              href="#anchor6"
              onClick={this.handleClick}>
              о сериале
            </a>
          </div>
          
        {/* </Flickity> */}
      </nav>
    )
  }

};

export default Nav;
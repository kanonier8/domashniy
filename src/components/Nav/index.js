import React, { Component } from 'react';
import Flickity from 'flickity';

import { connect } from 'react-redux';
import { getNav } from '../../redux/actions/nav';

import styles from './Nav.module.css';


class Nav extends Component {

  state = {
    anchor: ''
  };



  componentDidMount() {

    this.props.getNavAction('/nav.json');


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
    if (window.innerWidth < 768) {
      this.carousel = new Flickity(this.list, this.carouselConfig);
    } else if (this.carousel instanceof Flickity) {
      this.carousel.destroy();
    }
  }

  renderList(data) {
    return data.map(item => (
      <li className={styles.item} key={item.id}>
        <a className={this.state.anchor === item.anchor ? styles.linkActive : styles.link}
            href={`#${item.anchor}`}
            onClick={this.handleClick}>
          {item.title}
        </a>
      </li>
    ));
  }


  handleClick = (event) => {
    event.preventDefault();
    this.setState({anchor: event.currentTarget.getAttribute('href').slice(1)});
  };



  render() {
    const data = this.props.data;

    return (
      <nav className={styles.content}>
        <ul className={data.length ? styles.carousel : styles.list}
            ref={el => this.list = el}>
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
  return { ...store.nav }
};

const mapDispatchToProps = dispatch => {
  return {
    getNavAction: project => dispatch(getNav(project)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
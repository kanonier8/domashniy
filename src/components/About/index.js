import React, { Component } from 'react';
import styles from './About.module.css';

class About extends Component {

  render() {
    return (
      <article className={styles.content}>
        <h3 className={styles.title}>О сезоне</h3>
        В основу сценария легло несколько исторических романов и средневековых документов...
        <a className={styles.more} href="#anchor">Подробнее</a>
      </article>
    )
  }

};

export default About;
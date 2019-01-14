import React, { Component } from 'react';
import Share from '../Share';

import styles from './Breadcrumbs.module.css';

class Breadcrumbs extends Component {

  render() {
    return (
      <nav className={styles.nav}>
        <ul className={styles.list}>
          <li className={styles.item}><a className={styles.link} href="/">Главная</a></li>
          <li className={styles.item}><a className={styles.link} href="/">Сериалы</a></li>
          <li className={styles.item}><a className={styles.link} href="/">Великолепный век</a></li>
          <li className={styles.item}><a className={styles.link} href="/">4 сезон</a></li>
          <li className={styles.item}><span className={styles.link}>8 серия</span></li>
        </ul>
        <Share />
      </nav>
    )
  }

};

export default Breadcrumbs;
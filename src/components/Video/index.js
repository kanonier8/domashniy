import React, { Component } from 'react';
import Player from './Player/';
import Info from './Info/';

import styles from './Video.module.css';

class Video extends Component {

  render() {
    return (
      <div className={styles.content}>
        <Player />
        <Info />
      </div>
    )
  }

};

export default Video;
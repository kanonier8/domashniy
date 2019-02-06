import React, { Component } from 'react';
import styles from './Player.module.css';

class Player extends Component {


  render() {
    return (
      <div className={styles.content}>
        {
          this.props.id &&
          <iframe
            className={styles.frame}
            title={this.props.title}
            allowFullScreen={true}
            allow="autoplay; encrypted-media"
            src={`https://player.videomore.ru/?autoplay=never&partner_id=357&track_id=${this.props.id}&userToken=`} />
        }
        
        {/* <button className={styles.play}></button> */}
      </div>
    )
  }

};

export default Player;
import React, { Component } from 'react';
import Truncate from 'react-truncate';
import styles from './VideoInfo.module.css';

class Info extends Component {

  state = {
    expanded: false,
    truncated: false
  };

  componentDidMount() {
    this.lines = window.innerWidth >= 1024 ? 3 : 2;
  }

  handleTruncate = (truncated) => {
    if (this.state.truncated !== truncated) {
      this.setState({
        truncated
      });
    }
  }

  toggleLines = (event) => {
    event.preventDefault();
    this.setState({
      expanded: !this.state.expanded
    });
  }

  render() {
    const { expanded, truncated } = this.state;
    console.log(this.props);

    return (
      <div className={styles.content}>
        
        <div className={styles.top}>
          <div className={styles.image}>
            <img src={this.props.poster} alt={this.props.title}/>
            <div className={styles.age}>{this.props.age}</div>
          </div>
          <div className={styles.about}>
            <h1 className={styles.title}>{this.props.title}</h1>
            <div className={styles.timeslot}>
              <div className={styles.time}>{this.props.time}</div>
              <div className={styles.days}>{this.props.days}</div>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <div className={styles.meta}>
            <a href="/" className={styles.series}>{this.props.series} серия</a>
            <a href="/" className={styles.season}>{this.props.season} сезон</a>
            {/* <div className={styles.lastViews}>Было в эфире {this.props.seen && new Date(this.props.seen * 1000)}</div> */}
          </div>
          <div className={styles.article}>
            <Truncate 
              lines={!expanded && this.lines}
              onTruncate={this.handleTruncate}
              ellipsis='...'>
              {this.props.description}
            </Truncate>
              <button className={styles.more} onClick={this.toggleLines}>
                {
                  !truncated && expanded ? 'Скрыть текст' : 'Читать полностью'
                }
              </button>
          </div>
        </div>
      </div>
    )
  }

};

export default Info;
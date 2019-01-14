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

    return (
      <div className={styles.content}>
        
        <div className={styles.top}>
          <div className={styles.image}>
            <img src="https://placeimg.com/60/85/any" alt="По делам несовершеннолетних"/>
            <div className={styles.age}>16+</div>
          </div>
          <div className={styles.about}>
            <h1 className={styles.title}>По делам несовершеннолетних</h1>
            <div className={styles.timeslot}>
              <div className={styles.time}>18:00</div>
              <div className={styles.days}>понедельник- четверг</div>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <div className={styles.meta}>
            <a href="/" className={styles.series}>8 серия</a>
            <a href="/" className={styles.season}>4 сезон</a>
            <div className={styles.lastViews}>Было в эфире 21 мая 2018</div>
          </div>
          <div className={styles.article}>
            <Truncate 
              lines={!expanded && this.lines}
              onTruncate={this.handleTruncate}
              ellipsis='...'>
              В 8-й серии сериала «Великолепный век»: султан Сулейман (Халит Эргенч) по традиции один раз месяц выходит в Ватикане готовят покушение на падишаха, которое сумел предотвратить вернувшийся в Стамбул Малкочоглу Бали-бей (Бурак Озчивит). Он спас султану жизнь. Вслед за этим происшествием падишах отправился в очередной военный поход. С собой он взял сыновей Хюррем (Мерьем Узерли) - Мехмета
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
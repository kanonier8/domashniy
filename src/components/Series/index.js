import React, { Component } from 'react';
import styles from './Series.module.css';

import { connect } from 'react-redux';
import { getSeries } from '../../redux/actions/series';

class Series extends Component {


  componentDidMount() {
    this.props.getSeriesAction('/series.json');
  }


  renderList(data) {
      return data.map((item, index) => (
          <li className={styles.item} key={item.id}>
              <a href="/" className={styles.link}>
                  <div className={styles.imageNotification}>
                      <img src={item.poster} alt={item.title}/>
                      <div className={styles.notification}>{new Date(item.a)}</div>
                  </div>

                  <div className={styles.info}>
                      <div className={styles.title}>
                          <div className={styles.series}>{item.series} серия</div>
                          <div className={styles.season}>{item.seaosn} сезон</div>
                      </div>
                      {/* <div className={styles.date}>21 мая 2018</div> */}
                  </div>
              </a>
          </li>
      ))
  }


  render() {
    return (
      <div className={styles.content}>
        <ul className={styles.list}>

          <li className={styles.item}>
            <a href="/" className={styles.link}>
              <div className={styles.imageNotification}>
                <img src="https://placeimg.com/225/133/people" alt="Название видео"/>
                <div className={styles.notification}>1 июня 2018</div>
              </div>

              <div className={styles.info}>
                <div className={styles.title}>
                  <div className={styles.series}>999 серия</div>
                  <div className={styles.season}>99 сезон</div>
                </div>
                {/* <div className={styles.date}>21 мая 2018</div> */}
              </div>
            </a>
          </li>

          <li className={styles.item}>
            <a href="/" className={styles.link}>
              <div className={styles.imageWatching}>
                <img src="https://placeimg.com/225/133/people" alt="Название видео"/>
              </div>

              <div className={styles.info}>
                <div className={styles.title}>
                  <div className={styles.series}>999 серия</div>
                  <div className={styles.season}>99 сезон</div>
                </div>
                {/* <div className={styles.date}>21 мая 2018</div> */}
              </div>
            </a>
          </li>

          <li className={styles.item}>
            <a href="/" className={styles.link}>
              <div className={styles.imageProgress}>
                <img src="https://placeimg.com/225/133/people" alt="Название видео"/>
                <div className={styles.progress}>
                  <div className={styles.progressBar}></div>
                </div>
                <div className={styles.play}></div>
              </div>

              <div className={styles.info}>
                <div className={styles.title}>
                  <div className={styles.series}>999 серия</div>
                  <div className={styles.season}>99 сезон</div>
                </div>
                {/* <div className={styles.date}>21 мая 2018</div> */}
              </div>
            </a>
          </li>

          <li className={styles.item}>
            <a href="/" className={styles.link}>
              <div className={styles.image}>
                <img src="https://placeimg.com/225/133/people" alt="Название видео"/>
                <div className={styles.play}></div>
                <div className={styles.duration}>01:42:00</div>
              </div>

              <div className={styles.info}>
                <div className={styles.title}>
                  <div className={styles.series}>999 серия</div>
                  <div className={styles.season}>99 сезон</div>
                </div>
                {/* <div className={styles.date}>21 мая 2018</div> */}
              </div>
            </a>
          </li>

          <li className={styles.item}>
            <a href="/" className={styles.link}>
              <div className={styles.image}>
                <img src="https://placeimg.com/225/133/people" alt="Название видео"/>
                <div className={styles.play}></div>
              </div>

              <div className={styles.info}>
                <div className={styles.title}>
                  <div className={styles.series}>999 серия</div>
                  <div className={styles.season}>99 сезон</div>
                </div>
                <div className={styles.date}>21 мая 2018</div>
              </div>
            </a>
          </li>

          <li className={styles.item}>
            <a href="/" className={styles.link}>
              <div className={styles.image}>
                <img src="https://placeimg.com/225/133/people" alt="Название видео"/>
                <div className={styles.play}></div>
              </div>

              <div className={styles.info}>
                <div className={styles.title}>
                  <div className={styles.series}>999 серия</div>
                  <div className={styles.season}>99 сезон</div>
                </div>
                <div className={styles.date}>21 мая 2018</div>
              </div>
            </a>
          </li>

          <li className={styles.item}>
            <a href="/" className={styles.link}>
              <div className={styles.image}>
                <img src="https://placeimg.com/225/133/people" alt="Название видео"/>
                <div className={styles.play}></div>
                <div className={styles.duration}>42:00</div>
              </div>

              <div className={styles.info}>
                <div className={styles.title}>
                  <div className={styles.series}>999 серия</div>
                  <div className={styles.season}>99 сезон</div>
                </div>
                <div className={styles.date}>21 мая 2018</div>
              </div>
            </a>
          </li>

          <li className={styles.item}>
            <a href="/" className={styles.link}>
              <div className={styles.image}>
                <img src="https://placeimg.com/225/133/people" alt="Название видео"/>
                <div className={styles.play}></div>
              </div>

              <div className={styles.info}>
                <div className={styles.title}>
                  <div className={styles.series}>999 серия</div>
                  <div className={styles.season}>99 сезон</div>
                </div>
                <div className={styles.date}>21 мая 2018</div>
              </div>
            </a>
          </li>

          <li className={styles.item}>
            <a href="/" className={styles.link}>
              <div className={styles.image}>
                <img src="https://placeimg.com/225/133/people" alt="Название видео"/>
                <div className={styles.play}></div>
              </div>

              <div className={styles.info}>
                <div className={styles.title}>
                  <div className={styles.series}>999 серия</div>
                  <div className={styles.season}>99 сезон</div>
                </div>
                <div className={styles.date}>21 мая 2018</div>
              </div>
            </a>
          </li>

          <li className={styles.item}>
            <a href="/" className={styles.link}>
              <div className={styles.image}>
                <img src="https://placeimg.com/225/133/people" alt="Название видео"/>
                <div className={styles.play}></div>
              </div>

              <div className={styles.info}>
                <div className={styles.title}>
                  <div className={styles.series}>999 серия</div>
                  <div className={styles.season}>99 сезон</div>
                </div>
                <div className={styles.date}>21 мая 2018</div>
              </div>
            </a>
          </li>

          <li className={styles.item}>
            <a href="/" className={styles.link}>
              <div className={styles.image}>
                <img src="https://placeimg.com/225/133/people" alt="Название видео"/>
                <div className={styles.play}></div>
              </div>

              <div className={styles.info}>
                <div className={styles.title}>
                  <div className={styles.series}>999 серия</div>
                  <div className={styles.season}>99 сезон</div>
                </div>
                <div className={styles.date}>21 мая 2018</div>
              </div>
            </a>
          </li>

          <li className={styles.item}>
            <a href="/" className={styles.link}>
              <div className={styles.image}>
                <img src="https://placeimg.com/225/133/people" alt="Название видео"/>
                <div className={styles.play}></div>
              </div>

              <div className={styles.info}>
                <div className={styles.title}>
                  <div className={styles.series}>999 серия</div>
                  <div className={styles.season}>99 сезон</div>
                </div>
                <div className={styles.date}>21 мая 2018</div>
              </div>
            </a>
          </li>

          <li className={styles.item}>
            <a href="/" className={styles.link}>
              <div className={styles.image}>
                <img src="https://placeimg.com/225/133/people" alt="Название видео"/>
                <div className={styles.play}></div>
              </div>

              <div className={styles.info}>
                <div className={styles.title}>
                  <div className={styles.series}>999 серия</div>
                  <div className={styles.season}>99 сезон</div>
                </div>
                <div className={styles.date}>21 мая 2018</div>
              </div>
            </a>
          </li>

          <li className={styles.item}>
            <a href="/" className={styles.link}>
              <div className={styles.image}>
                <img src="https://placeimg.com/225/133/people" alt="Название видео"/>
                <div className={styles.play}></div>
              </div>

              <div className={styles.info}>
                <div className={styles.title}>
                  <div className={styles.series}>999 серия</div>
                  <div className={styles.season}>99 сезон</div>
                </div>
                <div className={styles.date}>21 мая 2018</div>
              </div>
            </a>
          </li>

          <li className={styles.item}>
            <a href="/" className={styles.link}>
              <div className={styles.image}>
                <img src="https://placeimg.com/225/133/people" alt="Название видео"/>
                <div className={styles.play}></div>
              </div>

              <div className={styles.info}>
                <div className={styles.title}>
                  <div className={styles.series}>999 серия</div>
                  <div className={styles.season}>99 сезон</div>
                </div>
                <div className={styles.date}>21 мая 2018</div>
              </div>
            </a>
          </li>

          <li className={styles.item}>
            <a href="/" className={styles.link}>
              <div className={styles.image}>
                <img src="https://placeimg.com/225/133/people" alt="Название видео"/>
                <div className={styles.play}></div>
              </div>

              <div className={styles.info}>
                <div className={styles.title}>
                  <div className={styles.series}>999 серия</div>
                  <div className={styles.season}>99 сезон</div>
                </div>
                <div className={styles.date}>21 мая 2018</div>
              </div>
            </a>
          </li>

        </ul>
        <button className={styles.toggle}>Показать все</button>
      </div>
    )
  }

};

const mapStateToProps = (store) => {
    return { ...store.series }
};

const mapDispatchToProps = dispatch => {
    return {
        getSeriesAction: (seasonID) => dispatch(getSeries(seasonID)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Series);
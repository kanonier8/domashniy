import React, { Component } from 'react';
import PropTypes, { shape } from 'prop-types';

import Player from './Player/';
import Info from './Info/';
import Spinner from '../Spinner/';

import { connect } from 'react-redux';
import { getVideo } from '../../redux/actions/video';

import styles from './Video.module.css';

class Video extends Component {

  componentDidMount() {
    this.props.getVideoAction('project/0.json');
  }

  render() {
    const { data, isFetching } = this.props;
    return (
      <div className={ isFetching ? styles.contentLoading : styles.content}>
        { isFetching &&  <Spinner /> }
        <Player id={data.trackId} title={data.title} />
        <Info {...data}/>
      </div>
    )
  }

}

Video.propTypes = {
    isFetching: PropTypes.bool,
    data: shape({
        age: PropTypes.string,
        days: PropTypes.string,
        description: PropTypes.string,
        id: PropTypes.number,
        poster: PropTypes.string,
        season: PropTypes.string,
        seen:  PropTypes.number,
        series: PropTypes.string,
        time: PropTypes.string,
        title: PropTypes.string,
        trackId:  PropTypes.number,
    })
};


const mapStateToProps = (store) => {
  return { ...store.video }
};

const mapDispatchToProps = dispatch => {
  return {
    getVideoAction: videoId => dispatch(getVideo(videoId)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Video);
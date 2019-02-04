import React, { Component } from 'react';
import Player from './Player/';
import Info from './Info/';
import Spinner from '../Spinner/';

import { connect } from 'react-redux';
import { getVideo } from '../../redux/actions/video';

import styles from './Video.module.css';

class Video extends Component {

  componentDidMount() {
    this.props.getVideoAction('project/0.json');
    console.log(this.props);
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

};


const mapStateToProps = (store) => {
  return { ...store.video }
};

const mapDispatchToProps = dispatch => {
  return {
    getVideoAction: videoId => dispatch(getVideo(videoId)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Video);
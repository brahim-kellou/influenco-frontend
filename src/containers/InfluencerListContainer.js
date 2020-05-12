import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import InfluencerList from '../components/InfluencerList';

import { getInfluencers } from '../actions/influencers';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  sidebar: {
    position: 'fixed',
    height: '100vh',
    width: 280,
    backgroundColor: '#fff'
  },
  mainOuter: {
    paddingLeft: 280
  },
  mainInner: {
    padding: 32
  }
}))

const InfluencerListContainer = (props) => {
  useEffect(() => {
    props.getInfluencers();
  }, []);

  const classes = useStyles();

  return (
    <div>
      <div className={classes.sidebar}>

      </div>
      <div className={classes.mainOuter}>
        <div className={classes.mainInner}>
          <InfluencerList influencers={props.influencers} />
        </div>

      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  influencers: state.influencers.influencers
})

export default connect(mapStateToProps, { getInfluencers })(InfluencerListContainer);

import React, { useState, useEffect } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

import InstagramAnalytics from '../components/InstagramAnalytics';
import AnalyticsView from '../components/AnalyticsView';

import { connect } from 'react-redux';
import { getProfileDetails } from '../actions/influencerDetails';

const AnalyticsContainer = (props) => {

  const [isLoading, setIsLoading] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  function onSubmit(data) {
    props.getProfileDetails(data);
    setIsLoading(true);
    setTimeout(function () {
      setIsLoaded(true)
      setIsLoading(false)
    }, 5000)
  };

  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      {!isLoaded && <InstagramAnalytics submit={onSubmit} />}
      {isLoading && !isLoaded && <CircularProgress className="mt-5" />}
      {isLoaded != 0 && <AnalyticsView profile={props.profileDetails} />}
    </div>
  )
}

const mapStateToProps = state => ({
  profileDetails: state.profileDetails.profileDetails
})

export default connect(mapStateToProps, { getProfileDetails })(AnalyticsContainer);

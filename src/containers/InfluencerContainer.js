import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import Influencer from '../components/Influencer';

import { getInfluencerDetails } from '../actions/influencerDetails';

function InfluencerContainer(props) {

  useEffect(() => {
    props.getInfluencerDetails(props.location.query)
  }, []);

  return (
    <Influencer influencer={props.influencerDetails} />
  )
}

const mapStateToProps = state => ({
  influencerDetails: state.influencerDetails.influencerDetails
})

export default connect(mapStateToProps, { getInfluencerDetails })(InfluencerContainer);


import React from 'react';

import Grid from '@material-ui/core/Grid';

import InfluencerCard from './InfluencerCard';

const InfluencerList = (props) => {
  return (
    <Grid container spacing={2}>
      {props.influencers.map(influencer => (
        <Grid item xs={12} sm={6} md={4} key={influencer.id}>
          <InfluencerCard
            influencer={influencer}
          />
        </Grid>
      ))}
    </Grid>
  );
}

export default InfluencerList;

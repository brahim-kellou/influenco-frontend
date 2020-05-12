import React from 'react';

import Container from '@material-ui/core/Container';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import Grid from '@material-ui/core/Grid';


import { makeStyles } from '@material-ui/core/styles';

import InsightCard from './InsightCard';

const useStyles = makeStyles(theme => ({
  section: {
    padding: theme.spacing(8, 0)
  },
  subSection: {
    padding: theme.spacing(4, 0)
  },
  headerContainer: {
    display: 'flex',
    flexDirection: 'row'
  },
  pictureContainer: {
    margin: theme.spacing(0, 4)
  },
  avatar: {
    width: theme.spacing(15.5),
    height: theme.spacing(15.5),
  },
  aboutContainer: {

  },
  metricsContainer: {
    display: 'flex',
    flexDirection: 'row',
    margin: theme.spacing(2, 0)
  },
  metric: {
    margin: theme.spacing(0, 2, 0, 0),
  },
  metricTitle: {
    display: 'inline-block',
    marginRight: 4
  },
  chips: {
    marginTop: theme.spacing(1)
  },
  chip: {
    marginRight: theme.spacing(0.5),
  },
  titleSection: {
    padding: theme.spacing(0, 0, 2, 0)
  }

}));

const AnalyticsView = (props) => {

  function FollowersFormat(labelValue) {
    return Math.abs(Number(labelValue)) >= 1.0e+6
      ? (Math.abs(Number(labelValue)) / 1.0e+6).toFixed(1) + "m"
      // Three Zeroes for Thousands
      : Math.abs(Number(labelValue)) >= 1.0e+3

        ? (Math.abs(Number(labelValue)) / 1.0e+3).toFixed(1) + "k"

        : Math.abs(Number(labelValue));
  }

  const classes = useStyles();
  const profile = props.profile
  console.log(profile)

  return (
    <React.Fragment>
      <div className={classes.section} style={{ backgroundColor: '#fff' }}>
        <Container maxWidth='md'>
          <div className={classes.headerContainer}>
            <div className={classes.pictureContainer}>
              <Avatar alt="#" src={profile.profile_pic_url} className={classes.avatar} />
            </div>
            <div className={classes.aboutContainer}>
              <Typography variant="subtitle2">
                {profile.fullname}
              </Typography>
              <Typography variant="caption">
                {profile.username}
              </Typography>
              <div className={classes.metricsContainer}>
                <div className={classes.metric}>
                  <Typography variant="h6" className={classes.metricTitle}>
                    {profile.posts}
                  </Typography>
                  <Typography variant="caption">
                    posts
                  </Typography>
                </div>
                <div className={classes.metric}>
                  <Typography variant="h6" className={classes.metricTitle}>
                    {FollowersFormat(profile.followers)}
                  </Typography>
                  <Typography variant="caption">
                    followers
                  </Typography>
                </div>
                <div className={classes.metric}>
                  <Typography variant="h6" className={classes.metricTitle}>
                    361
                  </Typography>
                  <Typography variant="caption">
                    {FollowersFormat(profile.following)}
                  </Typography>
                </div>
              </div>
              <Typography variant="caption">
                {profile.bio}
              </Typography>
              <div className={classes.chips}>
                <Chip className={classes.chip} label="Technology" size="small" />
                <Chip className={classes.chip} label="Business" size="small" />
              </div>
            </div>
          </div>
        </Container>
      </div>
      <div className={classes.subSection}>
        <Container maxWidth='md'>
          <Typography variant="h5" className={classes.titleSection} style={{ fontWeight: '600' }}>Insights</Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={4}>
              <InsightCard name="instagram" title="Average engagement rate" value="7.5%" />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <InsightCard name="favorite" title="Average likes per post" value="152k" />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <InsightCard name="comment" title="Average comments per post" value="62k" />
            </Grid>
          </Grid>
        </Container>
      </div>
      <div className={classes.subSection}>
        <Container maxWidth='md'>
          <Typography variant="h5" className={classes.titleSection} style={{ fontWeight: '600' }}>Engagement rate over time</Typography>
        </Container>
      </div>
      <div className={classes.subSection}>
        <Container maxWidth='md'>
          <Typography variant="h5" className={classes.titleSection} style={{ fontWeight: '600' }}>Followers growth</Typography>
        </Container>
      </div>
    </React.Fragment>
  )
}

export default AnalyticsView;

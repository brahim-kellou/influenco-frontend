import React from 'react';
import { Line } from 'react-chartjs-2';

import Container from '@material-ui/core/Container';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

import InsightCard from './InsightCard';

// Engagement rate data
const engagement_values = [3.5, 3.42, 3.40, 3.5, 3.75, 3.72, 3.60];
const engagement_dates = [
  new Date("2020-04-09T02:07:41.173+00:00"),
  new Date("2020-04-17T02:07:41.173+00:00"),
  new Date("2020-04-24T00:59:02.228+00:00"),
  new Date("2020-05-02T01:33:35.395+00:00"),
  new Date("2020-05-10T22:18:29.465+00:00"),
  new Date("2020-05-20T11:16:35.247+00:00"),
  new Date("2020-05-27T11:16:35.247+00:00"),
];

const engagement_data = {
  labels: engagement_dates,
  datasets: [
    {
      label: 'Engagement',
      data: engagement_values,
      fill: false,
      borderColor: ['#0d0de6', '#0d0de6', '#0d0de6', '#0d0de6', '#00b430', '#00b430', '#00b430'],
      backgroundColor: ['#0d0de6', '#0d0de6', '#0d0de6', '#0d0de6', '#00b430', '#00b430', '#00b430'],
      pointBorderWidth: 0,
      borderWidth: 2
    },
  ]
};

const engagement_options = {
  legend: {
    display: false
  },
  scales: {
    yAxes: [{
      ticks: {
        beginAtZero: true,
        callback: function (value) {
          return value + '%'
        },
      },
    }],
    xAxes: [{
      type: 'time',
      time: {
        unit: 'week'
      }
    }]
  }
}

// Followers growth data
const followers_values = [2890005, 2892798, 2898992, 2940120, 2993231, 3016393, 3035401];
const followers_dates = [
  new Date("2020-04-09T02:07:41.173+00:00"),
  new Date("2020-04-17T02:07:41.173+00:00"),
  new Date("2020-04-24T00:59:02.228+00:00"),
  new Date("2020-05-02T01:33:35.395+00:00"),
  new Date("2020-05-10T22:18:29.465+00:00"),
  new Date("2020-05-20T11:16:35.247+00:00"),
  new Date("2020-05-27T11:16:35.247+00:00"),
];

const followers_data = {
  labels: followers_dates,
  datasets: [{
    label: 'Followers',
    data: followers_values,
    fill: false,
    borderColor: ['#0d0de6', '#0d0de6', '#0d0de6', '#0d0de6', '#00b430', '#00b430', '#00b430'],
    backgroundColor: ['#0d0de6', '#0d0de6', '#0d0de6', '#0d0de6', '#00b430', '#00b430', '#00b430'],
  }]
};

const followers_options = {
  legend: {
    display: false
  },
  scales: {
    yAxes: [{
      ticks: {
        callback: function (value) {
          return value
        },
      },
    }],
    xAxes: [{
      type: 'time',
      time: {
        unit: 'week'
      }
    }]
  }
}


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
  },
  headerLine: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  circleContainer: {
    display: 'flex',
  },
  circleReal: {
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: "#0d0de6",
    marginRight: 10
  },
  circlePredicted: {
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: "#00b430",
    marginRight: 10
  }

}));

export default function Influencer(props) {

  function FollowersFormat(labelValue) {
    return Math.abs(Number(labelValue)) >= 1.0e+6
      ? (Math.abs(Number(labelValue)) / 1.0e+6).toFixed(1) + "m"
      // Three Zeroes for Thousands
      : Math.abs(Number(labelValue)) >= 1.0e+3

        ? (Math.abs(Number(labelValue)) / 1.0e+3).toFixed(1) + "k"

        : Math.abs(Number(labelValue));
  }

  const classes = useStyles();
  const influencer = props.influencer
  console.log(influencer)

  return (
    <React.Fragment>
      <div className={classes.section} style={{ backgroundColor: '#ffffff' }}>
        <Container maxWidth='md'>
          <div className={classes.headerContainer}>
            <div className={classes.pictureContainer}>
              <Avatar alt="#" src={influencer.url_profile_picture} className={classes.avatar} />
            </div>
            <div className={classes.aboutContainer}>
              <Typography variant="subtitle2">
                {influencer.name}
              </Typography>
              <Typography variant="caption">
                {influencer.username}
              </Typography>
              <div className={classes.metricsContainer}>
                <div className={classes.metric}>
                  <Typography variant="h6" className={classes.metricTitle}>
                    {influencer.posts}
                  </Typography>
                  <Typography variant="caption">
                    posts
                  </Typography>
                </div>
                <div className={classes.metric}>
                  <Typography variant="h6" className={classes.metricTitle}>
                    {FollowersFormat(influencer.followers)}
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
                    following
                  </Typography>
                </div>
              </div>
              <Typography variant="caption">
                {influencer.bio}
              </Typography>
              <div className={classes.chips}>
                <Chip className={classes.chip} label={influencer.category} size="small" />
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
              <InsightCard name="instagram" title="Average engagement rate" value="3.5%" level="High average engagement"/>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <InsightCard name="favorite" title="Average likes per post" value="172k" level="High average likes"/>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <InsightCard name="comment" title="Average comments per post" value="1.3k" level="High average comments"/>
            </Grid>
          </Grid>
        </Container>
      </div>
      <div className={classes.subSection}>
        <Container maxWidth='md'>
          <div className={classes.headerLine}>
            <Typography variant="h5" className={classes.titleSection} style={{ fontWeight: '600' }}>Engagement rate over time</Typography>
            <div>
              <div className={classes.circleContainer}>
                <div className={classes.circleReal}></div>
                <Typography variant="caption">real values</Typography>
              </div>
              <div className={classes.circleContainer}>
                <div className={classes.circlePredicted}></div>
                <Typography variant="caption">predicted values</Typography>
              </div>
            </div>
          </div>
          <Line data={engagement_data} options={engagement_options} />
        </Container>
      </div>
      <div className={classes.subSection}>
        <Container maxWidth='md'>
          <div className={classes.headerLine}>
          <Typography variant="h5" className={classes.titleSection} style={{ fontWeight: '600' }}>Followers growth</Typography>            <div>
              <div className={classes.circleContainer}>
                <div className={classes.circleReal}></div>
                <Typography variant="caption">real values</Typography>
              </div>
              <div className={classes.circleContainer}>
                <div className={classes.circlePredicted}></div>
                <Typography variant="caption">predicted values</Typography>
              </div>
            </div>
          </div>
          <Line data={followers_data} options={followers_options} />
        </Container>
      </div>
    </React.Fragment>
  )
}

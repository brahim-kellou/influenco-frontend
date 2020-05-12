import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';

import Link from '@material-ui/core/Link';
import Card from '@material-ui/core/Card';
import Avatar from '@material-ui/core/Avatar';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';

const useStyles = makeStyles(theme => ({
  socialmediaContainer: {
    height: 32,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginBottom: theme.spacing(1),
  },
  iconContainer: {
    height: 32,
    width: 32,
    borderRadius: 16,
    backgroundColor: '#F6E6F1',
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex'
  },
  headerContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 12
  },
  pictureContainer: {
    paddingRight: 12,
    paddingLeft: 12
  },
  avatar: {
    width: theme.spacing(9.5),
    height: theme.spacing(9.5),
  },
  nameContainer: {
    flex: 1
  },
  chips: {
    marginTop: theme.spacing(1)
  },
  chip: {
    marginRight: theme.spacing(0.5),
  },
  contentContainer: {

  },
  content: {
    height: 96,
    justifyContent: 'center',
    alignItems: 'center'
  },
  metricsContainer: {
    display: 'flex',
    flexDirection: 'row'
  },
  metric: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  metricTitle: {
    fontWeight: 700
  }
}));

let link = "https://scontent-mrs2-1.cdninstagram.com/v/t51.2885-19/s150x150/93869778_1811150589021976_4327043675134623744_n.jpg?_nc_ht=scontent-mrs2-1.cdninstagram.com&_nc_ohc=gjoFnvCwdVcAX8D3NOc&oh=1f37a624edd4100a3b54c60c17461448&oe=5EC564B1"


const InfluencerCard = (props) => {

  function FollowersFormat(labelValue) {
    return Math.abs(Number(labelValue)) >= 1.0e+6
      ? (Math.abs(Number(labelValue)) / 1.0e+6).toFixed(1) + "m"
      // Three Zeroes for Thousands
      : Math.abs(Number(labelValue)) >= 1.0e+3

        ? (Math.abs(Number(labelValue)) / 1.0e+3).toFixed(1) + "k"

        : Math.abs(Number(labelValue));
  }

  const classes = useStyles();

  return (
    <Card>
      <CardContent>
        <div className={classes.socialmediaContainer}>
          <div className={classes.iconContainer}>
            <InstagramIcon style={{ color: "#A91077" }} />
          </div>
        </div>
        <div className={classes.headerContainer}>
          <div className={classes.pictureContainer}>
            <Link underline="always" color="textPrimary" variant="caption"
              component={RouterLink}
              to={{ pathname: `/influencers/${props.influencer.username}`, query: props.influencer.id }}
            >
              <Avatar alt="Remy Sharp" src={props.influencer.url_profile_picture} className={classes.avatar} />
            </Link>
          </div>
          <div className={classes.nameContainer}>
            <Typography variant="subtitle2">
              {props.influencer.name}
            </Typography>
            <Typography variant="caption">
              {props.influencer.username}
            </Typography>
            <div className={classes.chips}>
              <Chip className={classes.chip} label="Technology" size="small" />
              <Chip className={classes.chip} label="Business" size="small" />
            </div>
          </div>
        </div>
        <div className={classes.contentContainer}>
          <div className={classes.content}>
            <Typography variant="caption">
              {props.influencer.bio}
            </Typography>
          </div>
          <div className={classes.metricsContainer}>
            <div className={classes.metric}>
              <Typography variant="h6" className={classes.metricTitle}>
                {FollowersFormat(props.influencer.followers)}
              </Typography>
              <Typography variant="caption">
                followers
              </Typography>
            </div>
            <div className={classes.metric}>
              <Typography variant="h6" className={classes.metricTitle}>
                {props.influencer.posts}
              </Typography>
              <Typography variant="caption">
                posts
              </Typography>
            </div>
            <div className={classes.metric}>
              <Typography variant="h6" className={classes.metricTitle} style={{ color: "#00B430" }}>
                {props.influencer.engagement.toFixed(1) + "%"}
              </Typography>
              <Typography variant="caption">
                Engagement
              </Typography>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default InfluencerCard;

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
  const insights = props.influencer
  let {
    id,
    username,
    fullname,
    bio,
    has_channel,
    is_business_account,
    business_category_name,
    is_verified,
    profile_pic_url,
    user_status
  } = props.influencer

  let user_status_json = JSON.parse(user_status)

  let {
    followers,
    posts,
    engagement
  } = user_status_json[user_status_json.length - 1]

  engagement = parseFloat(engagement).toFixed(2)

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
              to={{ pathname: `/influencers/${username}`, query: id }}
            >
              <Avatar alt="Remy Sharp" src={profile_pic_url} className={classes.avatar} />
            </Link>
          </div>
          <div className={classes.nameContainer}>
            <Typography variant="subtitle2">
              {fullname}
            </Typography>
            <Typography variant="caption">
              {username}
            </Typography>
            <div className={classes.chips}>
              <Chip className={classes.chip} label="category" size="small" />
            </div>
          </div>
        </div>
        <div className={classes.contentContainer}>
          <div className={classes.content}>
            <Typography variant="caption">
              {bio}
            </Typography>
          </div>
          <div className={classes.metricsContainer}>
            <div className={classes.metric}>
              <Typography variant="h6" className={classes.metricTitle}>
                {FollowersFormat(followers)}
              </Typography>
              <Typography variant="caption">
                followers
              </Typography>
            </div>
            <div className={classes.metric}>
              <Typography variant="h6" className={classes.metricTitle}>
                {posts}
              </Typography>
              <Typography variant="caption">
                posts
              </Typography>
            </div>
            <div className={classes.metric}>
              <Typography variant="h6" className={classes.metricTitle} style={{ color: "#00B430" }}>
                {engagement + "%"}
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

import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import { CardContent } from '@material-ui/core';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import FavoriteIcon from '@material-ui/icons/Favorite';
import CommentIcon from '@material-ui/icons/Comment';

const useStyles = makeStyles(theme => ({
  topCard: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  iconContainer: {
    height: 40,
    width: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    marginLeft: 'auto'
  },
  mainContent: {
    display: 'flex',
    alignItems: 'center',
    margin: theme.spacing(2, 0)
  },
  bottomCard: {
    display: 'flex',
    alignItems: 'center'
  }
}));


export default function InsightCard(props) {

  const classes = useStyles();

  const instagram = (
    <div className={classes.iconContainer} style={{ backgroundColor: '#F6E6F1' }}>
      <InstagramIcon style={{ color: "#A91077" }} />
    </div>
  );

  const twitter = (
    <div className={classes.iconContainer} style={{ backgroundColor: '#E2F0F9' }}>
      <TwitterIcon style={{ color: "#1DA1F2" }} />
    </div>
  );

  const favorite = (
    <div className={classes.iconContainer} style={{ backgroundColor: '#FFE5E5' }}>
      <FavoriteIcon style={{ color: "#FF0008" }} />
    </div>
  );

  const comment = (
    <div className={classes.iconContainer} style={{ backgroundColor: '#FFF1E5' }}>
      <CommentIcon style={{ color: "#FF7700" }} />
    </div>
  );

  function renderIcon() {
    switch (props.name) {
      case "instagram":
        return instagram
      case "twitter":
        return twitter
      case "favorite":
        return favorite
      case "comment":
        return comment
    }

  }

  return (
    <Card>
      <CardContent>
        <div className={classes.topCard}>
          <Typography variant="caption">
            {props.title}
          </Typography>
          {renderIcon()}
        </div>
        <div className={classes.mainContent}>
          <Typography variant="h6">
            {props.value}
          </Typography>
        </div>
        <div className={classes.bottomCard}>
          <Typography variant="caption" style={{ fontWeight: '600', color: "#00B430" }}>
            High engagement
          </Typography>
        </div>
      </CardContent>
    </Card>
  )
}

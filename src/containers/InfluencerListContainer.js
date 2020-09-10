import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import Card from '@material-ui/core/Card';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Pagination from '@material-ui/lab/Pagination';

import InfluencerList from '../components/InfluencerList';
import Footer from '../components/Footer';


import { getInfluencers } from '../actions/influencers';
import { makeStyles, CardContent } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  sidebar: {
    position: 'fixed',
    height: '100vh',
    width: 280,
    backgroundColor: '#fff'
  },
  filterContainer: {
    margin: 32,
    backgroundColor: "#fff",
    width: "100%",
    minHeight: 648
  },
  card: {
    minHeight: 648,
    display: 'flex',
    flexDirection: "column",
  },
  mainInner: {
    padding: 32
  },
  sort: {
    marginLeft: 'auto',
    marginRight: 32,
    marginTop: 32,
    width: 296
  }
}))

const categories = [
  {
    value: 'all',
    label: 'All',
  },
  {
    value: 'beauty',
    label: 'Beauty',
  },
  {
    value: 'fashion',
    label: 'Fashion',
  },
  {
    value: 'fitness',
    label: 'Fitness',
  },
  {
    value: 'sport',
    label: 'Sport',
  },
  {
    value: 'travel',
    label: 'Travel',
  },
  {
    value: 'health',
    label: 'Health',
  },
  {
    value: 'technology',
    label: 'Technology',
  },
];

const classInfluence = [
  {
    value: '',
    label: 'All'
  },
  {
    value: 'influencer',
    label: 'Influencer'
  },
  {
    value: 'micro-influencer',
    label: 'Micro-influencer'
  }
]

const sorts = [
  {
    value: 'followers',
    label: 'Followers',
  },
  {
    value: 'engagement',
    label: 'Engagement',
  },
];

function labelformat(value) {
  return Math.abs(Number(value)) >= 1.0e+6
      ? (Math.abs(Number(value)) / 1.0e+6).toFixed(0) + "m"
      // Three Zeroes for Thousands
      : Math.abs(Number(value)) >= 1.0e+3

        ? (Math.abs(Number(value)) / 1.0e+3).toFixed(0) + "k"

        : Math.abs(Number(value));
}

const InfluencerListContainer = (props) => {
  const classes = useStyles();

  useEffect(() => {
    props.getInfluencers(classOfInfluencer, valueFollowers[0], valueFollowers[1], posts[0], posts[1], sort, (page-1)*15);
  }, []);

  // Sort
  const [sort, setSort] = React.useState('followers');
  const handleSort = (event) => {
    setSort(event.target.value);
  };
  useEffect(() => {
    props.getInfluencers(classOfInfluencer, valueFollowers[0], valueFollowers[1], posts[0], posts[1], sort, (page-1)*15);
  }, [sort]);

  // Page
  const [page, setPage] = React.useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };
  useEffect(() => {
    props.getInfluencers(classOfInfluencer, valueFollowers[0], valueFollowers[1], posts[0], posts[1], sort, (page-1)*15);
  }, [page]);

  // Plateform
  const [plateform, setPlateform] = React.useState(() => ['instagram']);
  const handlePlateform = (event, newPlateform) => {
    setPlateform(newPlateform);
  };

  // Class
  const [classOfInfluencer, setClassOfInfluencer] = React.useState('');
  const handleClassOfInfluencer = (event) => {
    setClassOfInfluencer(event.target.value);
  }

  // Category
  const [category, setCategory] = React.useState('');
  const handleCategory = (event) => {
    setCategory(event.target.value);
  };

  const [valueFollowers, setValueFollowers] = React.useState([50000, 500000]);
  const handleChangeFollowers = (event, newValue) => {
    setValueFollowers(newValue)
  };

  const [posts, setPosts] = React.useState([20, 100]);
  const handleChangePosts = (event, newValue) => {
    setPosts(newValue);
  };

  const [valueLikes, setValueLikes] = React.useState([1000, 100000]);
  const handleChangeLikes = (event, newValue) => {
    setValueLikes(newValue);
  };

  useEffect(() => {
    props.getInfluencers(classOfInfluencer, valueFollowers[0], valueFollowers[1], posts[0], posts[1], sort, (page-1)*15);
  }, [valueFollowers, posts, classOfInfluencer]);

  return (
    <React.Fragment>
      <div className="container-fluid">
        <div className="d-flex">
          <TextField
            className={classes.sort}
            id="outlined-select-sort" 
            select
            label="Sort" 
            value={sort}
            onChange={handleSort}
            SelectProps={{
              native: true,
            }}
            size="small"
            variant="outlined" 
          >
            {sorts.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </TextField>
        </div>
        <div className="row"> 
          <div className="col-md-3">
            <Card className={classes.filterContainer}>
              <CardContent className={classes.card}>
                <div className="mb-4">
                  <Typography variant="subtitle2" gutterBottom>
                    Plateform
                  </Typography>
                  <ToggleButtonGroup value={plateform} onChange={handlePlateform} aria-label="plateform">
                    <ToggleButton value="instagram" aria-label="instagram">
                      <InstagramIcon style={{color: "rgb(169, 16, 119)"}}/>
                    </ToggleButton>
                    <ToggleButton value="twitter" aria-label="twitter">
                      <TwitterIcon style={{color: "rgb(29, 161, 242)"}} />
                    </ToggleButton>
                  </ToggleButtonGroup>
                </div>
                <div className="mb-4">
                  <Typography variant="subtitle2" gutterBottom>
                    Class of infuencers
                  </Typography>
                  <TextField
                    className="w-100"
                    id="outlined-select-category" 
                    select 
                    value={classOfInfluencer}
                    onChange={handleClassOfInfluencer}
                    SelectProps={{
                      native: true,
                    }}
                    size="small" 
                    variant="outlined" 
                  >
                    {classInfluence.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </TextField>
                </div>
                <div className="mb-4">
                  <Typography variant="subtitle2" gutterBottom>
                    Categrory of influencers
                  </Typography>
                  <TextField
                    className="w-100"
                    id="outlined-select-category" 
                    select
                    value={category}
                    onChange={handleCategory}
                    SelectProps={{
                      native: true,
                    }}
                    size="small" 
                    variant="outlined" 
                  >
                    {categories.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </TextField>
                </div>
                <div className="mb-4">
                  <Typography variant="subtitle2" gutterBottom>
                    Followers
                  </Typography>
                  <Slider
                    value={valueFollowers}
                    onChange={handleChangeFollowers}
                    valueLabelDisplay="auto"
                    aria-labelledby="range-slider"
                    valueLabelFormat={labelformat}
                    max={5000000}
                    min={0}
                    step={1000}
                  />
                </div>
                <div className="mb-4">
                  <Typography variant="subtitle2" gutterBottom>
                    Posts
                  </Typography>
                  <Slider
                    value={posts}
                    onChange={handleChangePosts}
                    valueLabelDisplay="auto"
                    aria-labelledby="range-slider"
                    valueLabelFormat={labelformat}
                    max={10000}
                    min={0}
                    step={10}
                  />
                </div>
                <div className="mb-4">
                  <Typography variant="subtitle2" gutterBottom>
                    Likes per post
                  </Typography>
                  <Slider
                    value={valueLikes}
                    onChange={handleChangeLikes}
                    valueLabelDisplay="auto"
                    aria-labelledby="range-slider"
                    valueLabelFormat={labelformat}
                    max={500000}
                    min={0}
                    step={1000}
                  />
                </div>
                {/* <div className="mb-4 mt-auto">
                <Button 
                  className="w-100" 
                  variant="contained" 
                  color="primary" 
                  disableElevation
                  onClick={handleClickButton}
                  >
                  Apply
                </Button>
                </div> */}
              </CardContent>
            </Card>
          </div>
          <div className="col-md-9">
            <div className={classes.mainInner}>
              <InfluencerList influencers={props.influencers} />
              <Pagination count={10} onChange={handleChange} className="mt-5 mb-5"/>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  )
}

const mapStateToProps = state => ({
  influencers: state.influencers.influencers
})

export default connect(mapStateToProps, { getInfluencers })(InfluencerListContainer);

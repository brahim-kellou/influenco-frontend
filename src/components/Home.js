import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import TimelineIcon from '@material-ui/icons/Timeline';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import AssessmentOutlinedIcon from '@material-ui/icons/AssessmentOutlined';

import Button from '@material-ui/core/Button';


const image_01 = "https://scontent-mrs2-1.cdninstagram.com/v/t51.2885-15/e35/s1080x1080/73387425_2713937478659060_2101150979727655998_n.jpg?_nc_ht=scontent-mrs2-1.cdninstagram.com&_nc_cat=108&_nc_ohc=eLyltoRe1ssAX-YQhn6&oh=c222dafa18f3ca166074180c52343a10&oe=5F4AFC7B"
const image_02 = "https://scontent-mrs2-1.cdninstagram.com/v/t51.2885-15/e35/100673756_173523197461451_7639813280549112782_n.jpg?_nc_ht=scontent-mrs2-1.cdninstagram.com&_nc_cat=111&_nc_ohc=JZ_kiiZRXoEAX_trTKI&oh=cff6dfc1a5f37df1c5680ac7e8f80802&oe=5F4ADDAA"
const image_03 = "https://scontent-mrs2-1.cdninstagram.com/v/t51.2885-15/e35/p1080x1080/81200385_540429583222828_5628705126805171287_n.jpg?_nc_ht=scontent-mrs2-1.cdninstagram.com&_nc_cat=104&_nc_ohc=6a3dhxeqUW8AX9ewj3R&oh=7efed6e436cb88a0c3d19227761e40ad&oe=5F492F22"
const image_04 = "https://scontent-mrs2-1.cdninstagram.com/v/t51.2885-15/e35/s1080x1080/83937261_192969022012356_6024893076814046251_n.jpg?_nc_ht=scontent-mrs2-1.cdninstagram.com&_nc_cat=100&_nc_ohc=TGGOeaadCP0AX_dJ4nE&oh=28131ee127ae0b921e73421eb8f800e1&oe=5F497E01"
const image_05 = "https://scontent-mrs2-1.cdninstagram.com/v/t51.2885-15/e35/s1080x1080/115978201_312618193214520_6871375436308699717_n.jpg?_nc_ht=scontent-mrs2-1.cdninstagram.com&_nc_cat=100&_nc_ohc=nVCmyfk7H90AX_nYpcZ&oh=4bee084036e6a99c24eb627044f4776d&oe=5F4C0BE5"

const Home = () => {
  return (
    <div className="">
      <header className="bg-cover">
        <div className="overlay">
          <div className="intro text-center">
            <h1>
              The smartest influencer marketing platform
          </h1>
            <p>Make your work easier with digital influencers. Identify, engage and get incredible results.</p>
            <Button
              color="primary"
              variant="contained"
              disableElevation
              size="large"
              component={RouterLink}
              to={'/influencers'}
            >
              Explore
          </Button>
          </div>
        </div>
      </header>
      <section className="container">
        <h2 className="title-section text-center">
          Solutions for every need
        </h2>
        <div className="row">
          <div className="col-md-4 text-center">
            <div> <PeopleOutlineIcon style={{ fontSize: 40, marginBottom: 24 }} color="primary" /> </div>
            <h3>Influencers</h3>
            <p>
              Discover the Best Influencers for Your Audience Instantly. 
              Skip tedious manual search and find the most effective influencers in seconds. 
              AI will find the best influencers for you instantly.
            </p>
          </div>
          <div className="col-md-4 text-center">
            <div><AssessmentOutlinedIcon style={{ fontSize: 40, marginBottom: 24 }} color="primary" /></div>
            <h3>Analytics</h3>
            <p>
            Access Influencer Insights to Understand Their Audiences.
            The platform is built for full transparency. 
            With a click you can explore an influencer's insights. 
            </p>
          </div>
          <div className="col-md-4 text-center">
            <div><TimelineIcon style={{ fontSize: 40, marginBottom: 24 }} color="primary" /></div>
            <h3>Predictions</h3>
            <p>
              Keep Track of All Influencers in One Platform.
              Easily track all the crucial influencer metrics in one platform. 
              Evaluating influencers is now simple and measuring campaign effectiveness is effortless.
            </p>
          </div>
        </div>
      </section>
      <section className="how-it-works" style={{ padding: 0 }}>
        <div className="overlay">
          <div className="container">
            <h2 className="title-section text-center">
              How it works
            </h2>
            <div className="row">
              <div className="col-md-4 text-center">
                <h3>1</h3>
                <h3>Define your category</h3>
                <p>
                  Find influencers by catergory.
                </p>
              </div>
              <div className="col-md-4 text-center">
                <h3>2</h3>
                <h3>Choose an influencer</h3>
                <p>
                  Choose any influencer to explore its insights.
                </p>
              </div>
              <div className="col-md-4 text-center">
                <h3>2</h3>
                <h3>Get in touch</h3>
                <p>
                  Contact the right influencer for your business.
              </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="container">
        <h2 className="title-section text-center">
          +100 Influencers
        </h2>
        <div className="row">
          <div className="col-md-6">
            <div className="image-wrapper">
              <img className="image"
                src={image_01}
              ></img>
            </div>
          </div>
          <div className="col-md-6">
            <div className="row image-list">
              <div className="col-md-6 sub-image-wrapper">
                <img className="image"
                  src={image_04}>
                </img>
              </div>
              <div className="col-md-6 sub-image-wrapper">
                <img className="image"
                  src={image_02}>
                </img>
              </div>
              <div className="col-md-6 sub-image-wrapper">
                <img className="image"
                  src={image_03}>
                </img>
              </div>
              <div className="col-md-6 sub-image-wrapper">
                <img className="image"
                  src={image_05}>
                </img>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div >
  )
}

export default Home;

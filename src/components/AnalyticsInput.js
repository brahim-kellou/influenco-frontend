import React, { useState } from 'react';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';

const AnalyticsInput = (props) => {

  const [username, setUsername] = useState("");
  const [socialMedia, setSocialMedia] = useState(props.socialMedia)

  function handleSubmit(e) {
    e.preventDefault();
    const data = { username };
    props.submit(data)
  }

  const twitterIcon = (
    <div className="twitter-container d-flex justify-content-center align-items-center">
      <TwitterIcon style={{ color: "#1DA1F2", fontSize: 32 }} />
    </div>
  )

  const instagramIcon = (
    <div className="instagram-container d-flex justify-content-center align-items-center">
      <InstagramIcon style={{ color: "#A91077", fontSize: 32 }} />
    </div>
  )

  const textFieldLabel = props.socialMedia == "instagram" ? "Instagram Account" : "Twitter Account"

  return (
    <div className="d-flex flex-column justify-content-center align-items-center mt-5">
      {props.socialMedia == "instagram" ? instagramIcon : twitterIcon}
      <form 
        onSubmit={handleSubmit}
        style={{display: 'flex', flexDirection: 'column'}}
      >
        <TextField
          className="mt-4"
          label={textFieldLabel}
          variant="outlined"
          style={{ width: 400, marginBottom: 32 }}
          onChange={e => setUsername(e.target.value)}
          value={username}
        />
        <Button className="w-100" variant="contained" color="primary" disableElevation>
          Get insights
        </Button>
      </form>
    </div>
  )
}

export default AnalyticsInput;

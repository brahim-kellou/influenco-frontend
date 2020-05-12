import React, { useState } from 'react';

import TextField from '@material-ui/core/TextField';
import InstagramIcon from '@material-ui/icons/Instagram';

const InstagramAnalytics = (props) => {

  const [username, setUsername] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const data = { username };
    props.submit(data)
  }

  return (
    <div className="d-flex flex-column justify-content-center align-items-center mt-5">
      <div className="instagram-container d-flex justify-content-center align-items-center">
        <InstagramIcon style={{ color: "#A91077", fontSize: 32 }} />
      </div>
      <form onSubmit={handleSubmit}>
        <TextField
          className="mt-4"
          label="Instagram Account"
          variant="outlined"
          style={{ width: 400 }}
          onChange={e => setUsername(e.target.value)}
          value={username}
        />
      </form>
    </div>
  )
}

export default InstagramAnalytics;

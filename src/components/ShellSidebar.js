import React, { Component } from 'react';

const profileImageUrl = require('./../assets/images/profile.jpg');

class Sidebar extends Component {
  render() {
    return (
      <div className="shell__sidebar">
        <div className="avatar">
          <img className="img-responsive" src={profileImageUrl} />
        </div>
        <h1 className="title text-center">
          Aman Pandey
          <small>Frontend Engineer</small>
        </h1>
      </div>
    );
  }
}

export default Sidebar;

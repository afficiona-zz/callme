import React, { Component } from 'react';

const profileImageUrl = 'https://media-exp2.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAASNAAAAJDVhOWRjMTE3LWJmYTEtNGY0NC1hMTAwLWM0YjRkNjU4OTg4Zg.jpg';

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

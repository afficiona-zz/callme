import React, { Component } from 'react';

class Popup extends Component {
  render() {
    return (
      <div className="modal modal-agreement">
        <div className="wrapper">
          <div className="header">
            <span className="title">Licensing Terms</span>
            <i className="mdi mdi-close icon" onClick={this.props.onCancel} />
          </div>
          <div className="body">
            <p>
              By uploading your image onto the Pye Network, you agree that -
            </p>
            <ul>
              <li>You are the creator and owner of the image</li>
              <li>
                You grant any potential buyer or licensor a license to your
                image with the following terms:
                <ul>
                  <li>Worldwide, non-exclusive, royalty-free.</li>
                  <li>Unlimited digital use. Unlimited print use.</li>
                  <li>No limitations on duration or location of use.</li>
                </ul>
              </li>
              <li>
                The Pye Network will facilitate the licensing of your images and
                credit all earnings to your account.
              </li>
            </ul>
          </div>

          <div className="footer">
            <button
              className="btn btn-success btn-block btn-no-radius"
              onClick={this.props.onAccept}
            >
              <span className="content">
                <span>I Agree</span>
                <i className="icon icon-right mdi mdi-chevron-right" />
              </span>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Popup;

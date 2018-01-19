import React, { Component } from 'react';
import { Provider, connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import actions from './../actions';

class App extends Component {

  componentWillMount() {
    this.props.actions.fetchContacts('and', 13);
  }

  handlePagination = (url) => {
    this.props.actions.fetchContacts(null, url);
  };

  onChange = (e) => {
    const q = e.target.value;
    this.props.actions.fetchContacts(q, 12);
  };

  render() {
    const contacts = this.props.Contacts.getIn(['data', 'list']);
    const pages = this.props.Contacts.getIn(['data', 'links']);

    return (
      <div className="app">
        <div className="app__container">
          <div className="shell">
            <div className="shell__header"></div>
            <div className="shell__toolbox">
              <input type="text" className="form-control" placeholder="Search" onChange={this.onChange}/>
            </div>
            <div className="shell__body">
              <div className="contacts__list">
                {contacts && contacts.map(contact => {
                  return (
                    <div className="contacts__list__each">
                      <img src={contact.get('avatar')} width="50" />
                      {contact.get('first_name')}
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="shell__footer">
              {pages && pages.map(page => {
                return (
                  <div onClick={() => this.handlePagination(page.get('link'))}>{page.get('rel')}</div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ Contacts }) {
  return {
    Contacts
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

import React, { Component } from 'react';
import { Provider, connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import actions from './../actions';

class App extends Component {
  state = {
    sortBy: 'id',
    orderBy: 'asc',
    searchVal: 'Jame'
  };

  componentWillMount() {
    this.props.actions.fetchContacts(this.state.searchVal);
  }

  handlePagination = (url) => {
    this.props.actions.fetchContacts(null, url);
  };

  onChange = (e) => {
    this.setState({
      searchVal: e.target.value
    });
  };

  onSearchSubmit = (e) => {
    e.preventDefault();
    this.props.actions.fetchContacts(this.state.searchVal, null, this.state.sortBy, this.state.orderBy);
  };

  handleSortAction = (sortBy, orderBy) => {
    this.setState({
      sortBy,
      orderBy
    });
    this.props.actions.fetchContacts(this.state.searchVal, null, sortBy, orderBy);
  };

  render() {
    const contacts = this.props.Contacts.getIn(['data', 'list']);
    const pages = this.props.Contacts.getIn(['data', 'links']);

    return (
      <div className="app">
        <div className="app__container">
          <div className="shell">
            
            <div className="shell__sidebar">
              <h1 className="title text-center">Aman Pandey</h1>
            </div>
            
            <div className="shell__content">
              <div className="shell__header">
                <form className="search-form" onSubmit={this.onSearchSubmit}>
                  <input type="text" className="form-control" placeholder="Search" onChange={this.onChange}/>
                </form>
                <div className="filter">
                  <i className="mdi mdi-filter" />
                </div>
              </div>

              <div className="shell__body">
                <div className="contacts__list">
                  <div className="contacts__list__header">
                    <div className="contacts__list__header__each">
                      #ID
                      <i className="action mdi mdi-chevron-up" onClick={() => {this.handleSortAction('id', 'asc')}} />
                      <i className="action mdi mdi-chevron-down" onClick={() => {this.handleSortAction('id', 'desc')}} />
                    </div>
                    <div className="contacts__list__header__each">
                      First Name
                      <i className="action mdi mdi-chevron-up" onClick={() => {this.handleSortAction('first_name', 'asc')}} />
                      <i className="action mdi mdi-chevron-down" onClick={() => {this.handleSortAction('first_name', 'desc')}} />
                    </div>
                    <div className="contacts__list__header__each">
                      Last Name
                      <i className="action mdi mdi-chevron-up" onClick={() => {this.handleSortAction('last_name', 'asc')}} />
                      <i className="action mdi mdi-chevron-down" onClick={() => {this.handleSortAction('last_name', 'desc')}} />
                    </div>
                    <div className="contacts__list__header__each">Email</div>
                  </div>
                  
                  <div className="contacts__list__body">
                    {contacts && contacts.map(contact => {
                      return (
                        <div className="list__row">
                          {(
                            <div className="list__row--item">
                              {contact.get('id')}
                            </div>
                          )}
                          {(
                            <div className="list__row--item">
                              <b>{contact.get('first_name')}</b>
                            </div>
                          )}
                          {(
                            <div className="list__row--item">
                              {contact.get('last_name')}
                            </div>
                          )}
                          {(
                            <div className="list__row--item">
                              {contact.get('email')}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              <div className="shell__footer">
                <div className="pagination">
                  {pages && pages.map(page => {
                    return (
                      <div
                        className="pagination__link"
                        onClick={() => this.handlePagination(page.get('link'))}
                      >
                        <i className={page.get('relIcon')} />
                      </div>
                    )
                  })}
                </div>
              </div>

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

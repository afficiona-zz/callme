import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ShellHeader from './../components/ShellHeader';
import ShellSidebar from './../components/ShellSidebar';
import ContactsList from './../components/ContactsList';
import Pagination from './../components/Pagination';

import actions from './../actions';

class App extends Component {
  constructor(props) {
    super(props);
    // Setting the defaults for the form and list header
    this.state = {
      sortBy: 'id',
      orderBy: 'asc',
      searchVal: ''
    };

    this.handlePagination = url => {
      this.props.actions.fetchContacts(null, url);
    };

    this.onChange = e => {
      this.setState({
        searchVal: e.target.value
      });
    };

    this.onSearchSubmit = e => {
      e.preventDefault();
      this.props.actions.fetchContacts(
        this.state.searchVal,
        null,
        this.state.sortBy,
        this.state.orderBy
      );
    };

    this.handleSortAction = (sortBy, orderBy) => {
      this.setState({
        sortBy,
        orderBy
      });
      this.props.actions.fetchContacts(
        this.state.searchVal,
        null,
        sortBy,
        orderBy
      );
    };
  }

  componentWillMount() {
    // Fetching contacts with the default state value on app load
    this.props.actions.fetchContacts(this.state.searchVal);
  }

  render() {
    const pages = this.props.Contacts.getIn(['data', 'links']);

    return (
      <div className="app">
        <div className="app__container">
          <div className="shell">
            <ShellSidebar />

            <div className="shell__content">
              <ShellHeader
                onSearchSubmit={this.onSearchSubmit}
                value={this.state.searchVal}
                onChange={this.onChange}
              />

              <div className="shell__body">
                <ContactsList
                  handleSortAction={this.handleSortAction}
                  Contacts={this.props.Contacts}
                />
              </div>

              <div className="shell__footer">
                <Pagination
                  pages={pages}
                  handlePagination={this.handlePagination}
                />
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

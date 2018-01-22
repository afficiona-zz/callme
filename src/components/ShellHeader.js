import React, { Component } from 'react';

/**
 * Header component having search form
 */
class ShellHeader extends Component {
  componentDidMount() {
    // Set focus on app load
    this.searchInput.focus();
  }

  render() {
    return (
      <div className="shell__header">
        <form className="search-form" onSubmit={this.props.onSearchSubmit}>
          <input
            type="text"
            ref={input => {
              this.searchInput = input;
            }}
            className="form-control"
            value={this.props.value}
            placeholder="Search"
            onChange={this.props.onChange}
          />
        </form>
      </div>
    );
  }
}

export default ShellHeader;

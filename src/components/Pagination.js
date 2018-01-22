import React, { Component } from 'react';

/**
 * Component to set the provision to navigate through the contact pages
 */
class Pagination extends Component {
  render() {
    return (
      <div className="pagination">
        {this.props.pages &&
          this.props.pages.map(page => (
            <div
              className="pagination__link"
              key={page.get('relIcon')}
              onClick={() => this.props.handlePagination(page.get('link'))}
            >
              <i className={page.get('relIcon')} />
            </div>
          ))}
      </div>
    );
  }
}

export default Pagination;

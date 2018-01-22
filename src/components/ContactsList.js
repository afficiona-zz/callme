import React, { Component } from 'react';
import classNames from 'classnames';

/**
 * Component to display the list of contacts along with the tool for sorting the list
 */
class ContactsList extends Component {
  render() {
    const contacts = this.props.Contacts.getIn(['data', 'list']);
    const totalCount = this.props.Contacts.getIn(['data', 'totalCount']);
    const isFetching = this.props.Contacts.get('isFetching');
    const isFetchingError = this.props.Contacts.get('isFetchingError');
    const listBodyClasses = classNames('contacts__list__body', {
      'loading loading-circle': isFetching
    });
    return (
      <div className="contacts__list">
        <div className="contacts__list__total">
          {!isFetching && !isFetchingError && `Total: ${totalCount}`}
        </div>

        <div className="contacts__list__header">
          <div className="contacts__list__header__each contacts__list__header__each--id">
            #ID
            <i
              className="action mdi mdi-chevron-up"
              onClick={() => {
                this.props.handleSortAction('id', 'asc');
              }}
            />
            <i
              className="action mdi mdi-chevron-down"
              onClick={() => {
                this.props.handleSortAction('id', 'desc');
              }}
            />
          </div>
          <div className="contacts__list__header__each" id="contactsFirstName">
            First Name
            <i
              className="action mdi mdi-chevron-up"
              onClick={() => {
                this.props.handleSortAction('first_name', 'asc');
              }}
            />
            <i
              className="action mdi mdi-chevron-down"
              onClick={() => {
                this.props.handleSortAction('first_name', 'desc');
              }}
            />
          </div>
          <div className="contacts__list__header__each" id="contactsLastName">
            Last Name
            <i
              className="action mdi mdi-chevron-up"
              onClick={() => {
                this.props.handleSortAction('last_name', 'asc');
              }}
            />
            <i
              className="action mdi mdi-chevron-down"
              onClick={() => {
                this.props.handleSortAction('last_name', 'desc');
              }}
            />
          </div>
          <div className="contacts__list__header__each">Email</div>
        </div>

        <div className={listBodyClasses}>
          {(() => {
            // Error on fetching...
            if (!isFetching && isFetchingError) {
              return (
                <div className="contacts__list__body--error">
                  <div className="icon mdi mdi-emoticon-sad" />
                  Something went wrong... Please try again.
                </div>
              );
            } else if (!isFetching && !contacts.size) {
              // Contacts fetched but with no contact found
              return (
                <div className="contacts__list__body--empty">
                  <div className="icon mdi mdi-emoticon-sad" />
                  Contact not found. Try searching with a different name.
                </div>
              );
            } else if (!isFetching && contacts.size) {
              // Contacts fetched with contacts found
              return contacts.map(contact => (
                <div className="list__row" key={contact.get('id')}>
                  {<div className="list__row--item">{contact.get('id')}</div>}
                  {
                    <div className="list__row--item">
                      <b>{contact.get('first_name')}</b>
                    </div>
                  }
                  {
                    <div className="list__row--item">
                      {contact.get('last_name')}
                    </div>
                  }
                  {
                    <div className="list__row--item">
                      {contact.get('email')}
                    </div>
                  }
                </div>
              ));
            }

            return null;
          })()}
        </div>
      </div>
    );
  }
}

export default ContactsList;

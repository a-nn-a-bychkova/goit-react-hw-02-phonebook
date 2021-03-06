import React, { Component } from 'react';
import ContactForm from './ContactForm';
import initialContacts from '../initialContacts.json';
import ContactList from './ContactList';
import Filter from './Filter';
import shortid from 'shortid';
import PropTypes from 'prop-types';

class App extends Component {
  state = {
    // contacts: initialContacts,
    contacts: [],
    filter: '',
  };

  addContact = ({ name, number }) => {
    const isNameInContact = this.state.contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase(),
    );

    if (isNameInContact) {
      alert(`${name} is already in contact`);
    } else {
      const newContact = {
        id: shortid.generate(),
        name,
        number,
      };
      this.setState(prevState => ({
        contacts: [newContact, ...prevState.contacts],
      }));
    }
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const { name, number, filter, contacts } = this.state;
    const visibleContacts = this.getVisibleContacts();
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContact} />
        <h2>Contacts</h2>
        {contacts.length > 0 ? (
          <Filter value={filter} onChange={this.changeFilter} />
        ) : (
          <p>Your phonebook is empty</p>
        )}

        <ContactList
          contacts={visibleContacts}
          onDeleteContact={this.deleteContact}
        />
      </div>
    );
  }
}

export default App;

App.propTypes = {
  contacts: PropTypes.array.isRequired,
  filter: PropTypes.string.isRequired,
};

import React, { Component } from 'react';
import ContactForm from './ContactForm';
import initialContacts from '../initialContacts.json';
import ContactList from './ContactList';
import Filter from './Filter';
import shortid from 'shortid';

class App extends Component {
  state = {
    contacts: initialContacts,
    name: '',
    filter: '',
    number: '',
  };

  addContact = ({ name, number }) => {
    const newContact = {
      id: shortid.generate(),
      name,
      number,
    };

    console.log(newContact);
    this.setState(prevState => ({
      contacts: [newContact, ...prevState.contacts],
    }));
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

  render() {
    const { name, number, filter, contacts } = this.state;
    const visibleContacts = this.getVisibleContacts();
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContact} />
        <h2>Contacts</h2>
        <Filter value={filter} onChange={this.changeFilter} />
        <ContactList contacts={visibleContacts} />
      </div>
    );
  }
}

export default App;

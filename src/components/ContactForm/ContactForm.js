import React, { Component } from 'react';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = e => {
    const { name, value } = e.currentTarget;

    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="nameInput">
          Name
          <input
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange}
            id="nameInput"
          />
        </label>
        <label htmlFor="numberInput">
          Number
          <input
            type="text"
            name="number"
            value={number}
            onChange={this.handleChange}
            id="numberInput"
          />
        </label>
        <button type="submit">Add contact</button>
      </form>
    );
  }
}

export default ContactForm;

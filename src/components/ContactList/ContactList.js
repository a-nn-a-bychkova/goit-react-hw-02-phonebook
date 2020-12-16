import React from 'react';

const ContactList = ({ contacts }) => (
  <ul className="List">
    {contacts.map(({ id, name, number }) => (
      <li key={id} className="Item">
        {name} {number}
      </li>
    ))}
  </ul>
);

export default ContactList;

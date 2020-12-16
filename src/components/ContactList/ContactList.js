import React from 'react';

const ContactList = ({ contacts, onDeleteContact }) => (
  <ul className="List">
    {contacts.map(({ id, name, number }) => (
      <li key={id} className="Item">
        <p>
          {name} {number}
        </p>
        <button
          onClick={() => {
            onDeleteContact(id);
          }}
        >
          Delete
        </button>
      </li>
    ))}
  </ul>
);

export default ContactList;

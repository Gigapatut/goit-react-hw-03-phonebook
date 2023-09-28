import React from "react";
// import css from './ContactList.css'
import { nanoid } from 'nanoid';

const ContactList = ({ contacts, onDeleteContact }) => (
  
  <ul >
    
    {contacts.map(({ id, name, number }) => (
      <li key={nanoid()} >        
        {name}: {number}
        <button onClick={() => onDeleteContact(id)}>Delite</button>
      </li>
    ))}
  </ul>
);

export default ContactList;
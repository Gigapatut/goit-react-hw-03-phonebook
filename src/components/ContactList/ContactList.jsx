import React from "react";
import css from './ContactList.module.css'
import { nanoid } from 'nanoid';

const ContactList = ({ contacts, onDeleteContact }) => (
  
  <ul >
    
    {contacts.map(({ id, name, number }) => (
      <li className={css.contact} key={nanoid()} >        
        {name}: {number}
        <button className={css.delete} onClick={() => onDeleteContact(id)}>Delite</button>
      </li>
    ))}
  </ul>
);

export default ContactList;
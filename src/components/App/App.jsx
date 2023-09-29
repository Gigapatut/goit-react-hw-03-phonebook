import React from 'react';
import css from './App.module.css';
import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import Filter from '../Filter/Filter'
import { nanoid } from 'nanoid';

class App extends React.Component {
  state = {
    contacts: [],
    filter: '',
  };

  formSubmitHandler = data => {
    let contact = { id: nanoid(), name: data.name, number: data.number };
    let checkArray = this.state.contacts;

    const contactName = [];
    for (const contact of checkArray) {
      contactName.push(contact.name);
    }
       
    if (contactName.includes(data.name)) {
      
      alert(`${data.name} is alredy in contacts`)
      
    } else {
         this.setState(prevState => {
           return {
             contacts: prevState.contacts.concat(contact),
           };
         });
    };   

  };

  changeFilter = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  getFilteredContacts = () => {
    const normalizedFilter = this.state.filter.toLowerCase();
    return this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  deleteContact = (contactId) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }))
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts'); //------------------
    const parsedContacts = JSON.parse(contacts);

    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  };
  
  componentDidUpdate(prevProps, prevState) {
    
    if (this.state.contacts !== prevState.contacts) {      
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }    
  };

  render() {
    const { filter } = this.state;
    
    const filteredContacts = this.getFilteredContacts();   

    return (
      <div className={css.app}>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.formSubmitHandler} />
        <h2>Contacts</h2>
        <Filter value={filter} onChange={this.changeFilter} />
        <ContactList contacts={filteredContacts} onDeleteContact={this.deleteContact } />
      </div>
    );
  }
}

export default App;

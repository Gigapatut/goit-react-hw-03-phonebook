import React from 'react';
import css from './ContactForm.module.css'

class ContactForm extends React.Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  };

  handleChange = event => {
    const { name, value } = event.currentTarget;
  
    this.setState({ [name]: value });
  };
  handleSubmit = event => {
    event.preventDefault();

    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({
      name: '',
      number: '',
    });
  };
  
  render() {
    return (
      <form className={css.form} onSubmit={this.handleSubmit}>
        <label className={css.form} htmlFor={this.nameInputId}>
          Name
          <input
            type="text"
            name="name"
            required
            value={this.state.name}
            onChange={this.handleChange}
          />
        </label>
        <label className={css.form} htmlFor={this.numberInputId}>
          Number
          <input
            type="tel"
            name="number"
            required
            value={this.state.number}
            onChange={this.handleChange}
          />
        </label>
        <button type="submit">Add contact</button>
      </form>
    );
  }
}

export default ContactForm;
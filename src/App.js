import React, { Component } from "react";
import ContactForm from "./components/ContactForm/ContactForm";
import Filter from "./components/Filter/Filter";
import ContactList from "./components/ContactList/ContactList";

class App extends Component {
  state = {
    contacts: [
      ["Rosie Simpson", "459-12-56", "id-1"],
      ["Hermione Kline", "443-89-12", "id-2"],
      ["Eden Clements", "645-17-79", "id-3"],
      ["Annie Copeland", "227-91-26", "id-4"],
    ],
    filter: "",
  };

  filterContacts = (evt) => {
    this.setState({ filter: evt.target.value });
  };

  updateStateSubmit = (name, number, id) => {
    this.setState((previousState) => ({
      contacts: [...previousState.contacts, [name, number, id]],
    }));
  };

  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(([name]) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  };

  deleteContacts = (contactId) => {
    this.setState((previousState) => ({
      contacts: previousState.contacts.filter(([, , id]) => id !== contactId),
    }));
  };

  render() {
    const contactsList = this.getVisibleContacts();
    const { contacts, filter } = this.state;
    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm contacts={contacts} updateState={this.updateStateSubmit} />
        <h2>Contacts</h2>
        <Filter filter={filter} filterContacts={this.filterContacts} />
        <ContactList contacts={contactsList} onDelete={this.deleteContacts} />
      </>
    );
  }
}

export default App;

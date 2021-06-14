import React, { Component } from "react";
import ContactForm from "./components/ContactForm/ContactForm";
import Filter from "./components/Filter/Filter";
import ContactList from "./components/ContactList/ContactList";

class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };

  filterContacts = (evt) => {
    this.setState({ filter: evt.target.value });
  };

  updateStateSubmit = (id, name, number) => {
    this.setState((previousState) => ({
      contacts: [...previousState.contacts, { id, name, number }],
    }));
  };

  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  };

  deleteContacts = (contactId) => {
    this.setState((previousState) => ({
      contacts: previousState.contacts.filter(({ id }) => id !== contactId),
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

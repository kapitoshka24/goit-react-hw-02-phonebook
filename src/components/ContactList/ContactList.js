import React from "react";
import shortid from "shortid";
import PropTypes from "prop-types";
import "./ContactList.css";

const ContactList = ({ contacts, onDelete }) => (
  <ol>
    {contacts.map(([name, number, id]) => (
      <li key={shortid.generate()}>
        {name}: {number}
        <button onClick={onDelete.bind(this, id)}>Delete</button>
      </li>
    ))}
  </ol>
);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ContactList;
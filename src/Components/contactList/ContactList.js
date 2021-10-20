import React from "react";
import styles from "./ContactList.module.css";
import { useSelector, useDispatch } from "react-redux";
import { deleteContact } from "../../redux/phonebook/phoneboock-operations";
import {
  // getContacts,
  // getFilter,
  getFilteredContacts,
} from "../../redux/phonebook/phoneboock-selectors";

export default function ContactList() {
  // const contacts = useSelector(getContacts);
  // const filter = useSelector(getFilter);
  const filteredContacts = useSelector(getFilteredContacts);
  const dispatch = useDispatch();

  // const filteredContacts = contacts.filter(({ name }) =>
  //   name.toLowerCase().includes(filter.toLowerCase())
  // );

  return (
    <ul className={styles.contactList}>
      {filteredContacts.map(({ id, name, number }) => (
        <li key={id} className={styles.contactListItem}>
          <p className={styles.contactsName}>
            {name}: {number}
          </p>

          <button
            className={styles.contactsBtn}
            type="button"
            onClick={() => dispatch(deleteContact(id))}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

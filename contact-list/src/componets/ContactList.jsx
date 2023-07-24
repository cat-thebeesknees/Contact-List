import  { useState, useEffect } from "react";
import ContactRow from "./ContactRow";
import PropTypes from "prop-types";
import dummyContacts from "./dummyContacts";




export default function ContactList({ setSelectedContactId }) {
  const [contacts, setContacts] = useState(dummyContacts);

  useEffect(() => {
    async function fetchContacts() {
      try {
        const response = await fetch(
          "https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users"
        );
        const result = await response.json();
        setContacts(result);
      } catch (error) {
        console.error(error);
      }
    }
    fetchContacts();
  }, []);

  useEffect(() => {
    console.log("Contacts: ", contacts);
  }, [contacts]);

  return (
    <table>
      <thead>
        <tr>
          <th colSpan="3">Contact List</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Name</td>
          <td>Email</td>
          <td>Phone</td>
        </tr>

        {contacts.map((contact) => {
          return (
            <ContactRow
              key={contact.id}
              contact={contact}
              setSelectedContactId={setSelectedContactId}
            />
          );
        })}
      </tbody>
    </table>
  );
}

ContactList.propTypes = {
    setSelectedContactId: PropTypes.func.isRequired,
  };



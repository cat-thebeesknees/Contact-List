//create a selected contact file and add it to the componets file

import { useEffect, useState } from "react";
import PropTypes from "prop-types";

//create a state variable with a value of null

export default function SelectedContact({
  selectedContactId,
  setSelectedContactId,
}) {
  const [contact, setContact] = useState(null);

  //create an async function that fetches the info of a single contact
  useEffect(() => {
    const fetchContact = async () => {
      try {
        const response = await fetch(
          `https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`
        );
        const data = await response.json();
        setContact(data);
        console.log("Contact:", data);
      } catch (error) {
        console.log("Error", error);
      }
    };
    fetchContact();
  }, [selectedContactId]);

  return (
    <>
      <div className="contactInfo">
        <h2>Contact Details</h2>
        <p>Contact Id: {selectedContactId}</p>
        {contact && (
          <>
            <p>Name: {contact.name}</p>
            <p>Phone: {contact.phone}</p>
            <p>Email: {contact.email}</p>
            <p>
              Company: {contact.company.bs}, {contact.company.name}
            </p>
            <p>
              Address: {contact.address.street}, {contact.address.suite},{" "}
              {contact.address.city}, {contact.address.zipcode}
            </p>
            <p>Website: {contact.website}</p>
            <p>User Name: {contact.username}</p>
          </>
        )}

        <button
          className="goBack"
          onClick={() => setSelectedContactId(null)}
        >
          Back to List
        </button>
      </div>
    </>
  );
}

SelectedContact.propTypes = {
    selectedContactId: PropTypes.number.isRequired,
    setSelectedContactId: PropTypes.func.isRequired,
  };
export { PropTypes };

import { useState } from "react";
import "./App.css";
import ContactList from "./componets/ContactList";
import SelectedContact from "./componets/SelectedContact";
import PropTypes from "prop-types";
export default function App() {
  const [selectedContactId, setSelectedContactId] = useState(null);

  return (
    <>
      <div>
        {selectedContactId ? (
          <SelectedContact
            selectedContactId={selectedContactId}
            setSelectedContactId={setSelectedContactId}
          />
        ) : (
          <ContactList setSelectedContactId={setSelectedContactId} />
        )}
      </div>
    </>
  );
}

export { PropTypes };
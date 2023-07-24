import React from "react";
import PropTypes from "prop-types";

export default function ContactRow({ setSelectedContactId, contact }) {
  return (
    <tr
      onClick={() => {
        setSelectedContactId(contact.id);
      }}
    >
      <td className="getMoreInfo">{contact.name}</td>
      <td>{contact.email}</td>
      <td>{contact.phone}</td>
    </tr>
  );
}
export { PropTypes };
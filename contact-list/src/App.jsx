import { useState } from 'react'
import './App.css'
import ContactList from './componets/ContactList';
import log from 'eslint-plugin-react/lib/util/log';
import { dummyContacts } from './componets/ContactList';

 export default function App() {
  
  // const [contacts, setContacts] = useState(dummyContacts);

  // console.log("Contacts: ", contacts);
  return (
    <>
      <ContactList />
    </>
  )
}



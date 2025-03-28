// import React, { useState, useEffect } from "react";
// import { v4 as uuidv4 } from "uuid";
// import Header from "./Header";
// import AddContact from "./AddContact";
// import ContactList from "./ContactList";

// const Home = () => {
//   const LOCAL_STORAGE_KEY = "contacts";
//   const [contacts, setContacts] = useState(
//     JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) ?? []
//   );

//   const addContactHandler = (contact) => {
//     setContacts([...contacts, { id: uuidv4(), ...contact }]);
//   };

//   const removeContactHandler = (id) => {
//     const newContactList = contacts.filter((contact) => contact.id !== id);
//     setContacts(newContactList);
//   };

//   useEffect(() => {
//     localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
//   }, [contacts]);

//   return (
//     <div>
//       <Header />
//       <AddContact addContactHandler={addContactHandler} />
      
//       {/* Check if contacts exist before rendering ContactList */}
//       {contacts.length > 0 ? (
//         <ContactList contacts={contacts} getContactId={removeContactHandler} />
//       ) : (
//         <h3 style={{ textAlign: "center" }}>No Contacts Available</h3>
//       )}
//     </div>
//   );
// };

// export default Home;


import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";

const Home = () => {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) ?? []
  );
  const [showForm, setShowForm] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const addContactHandler = (contact) => {
    setContacts([...contacts, { id: uuidv4(), ...contact }]);
    setShowForm(false); // Hide form after adding contact
  };

  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => contact.id !== id);
    setContacts(newContactList);
  };

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    contact.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container">
      <Header />

      {/* Add Contact Button */}
      <button 
        className="ui button blue"
        onClick={() => setShowForm(!showForm)}
        style={{ margin: "20px 0" }}
      >
        {showForm ? "Close Form" : "Add Contact"}
      </button>

      {/* Add Contact Form (Hidden by Default) */}
      {showForm && <AddContact addContactHandler={addContactHandler} />}

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search contacts..."
        className="ui input"
        style={{ width: "100%", margin: "10px 0", padding: "10px" }}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {/* Contact List */}
      {filteredContacts.length > 0 ? (
        <ContactList contacts={filteredContacts} getContactId={removeContactHandler} />
      ) : (
        <h3 style={{ textAlign: "center" }}>No Contacts Found</h3>
      )}
    </div>
  );
};

export default Home;

// import React, { useState, useEffect } from "react"; 
// import { Routes, Route } from "react-router-dom";
 
// import Home from "./components/Home";
// import Login from "./components/Login";
// import AddContact from "./components/AddContact";
// import ContactList from "./components/ContactList";
// import { v4 as uuidv4 } from "uuid";

// function App() {
//   const LOCAL_STORAGE_KEY = "contacts";
//   const [contacts, setContacts] = useState(
//     JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) ?? []
//   );

//   const addContactHandler = (contact) => {
//     // console.log(contact);
//     //setContacts([...contacts, { id: uuid(), ...contact }]);
    
//      setContacts([...contacts, { id: uuidv4(), ...contact }]);
//   };

//   // const removeContactHandler = (id) => {
//   //   const newContactList = contacts.filter((contact) => {
//   //     return contact.id !== id;
//   //   });
//   const removeContactHandler = (id) => {
//     const newContactList = contacts.filter((contact) => contact.id !== id);
//     setContacts(newContactList);
//   };
//   //   setContacts(newContactList);
//   // };

   
//   useEffect(() => {
//     localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
//   }, [contacts]);
//   return (
//     {/* ✅ Wrap everything inside Router */}
//       <Routes>
//         <Route path="/" element={<Login />} />
//         <Route path="/home" element={<Home />} />
//         <Route path="/add-contact" element={<AddContact addContactHandler={addContactHandler} />} />
//         <Route path="/contact-list" element={<ContactList contacts={contacts} getContactId={removeContactHandler} />} />  
//       </Routes>
    
//   );
// }

// export default App;


// import React, { useState, useEffect } from "react"; 
// import { Routes, Route } from "react-router-dom"; 
// import { v4 as uuidv4 } from "uuid";

// import Home from "./components/Header";
// import Login from "./components/Login";
// import AddContact from "./components/AddContact";
// import ContactList from "./components/ContactList";

// function App() {
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
//     <Routes>
//       <Route
//   path="/home"
//   element={<Home contacts={contacts} addContactHandler={addContactHandler} removeContactHandler={removeContactHandler} />}
// />

//       <Route path="/" element={<Login />} />
//       <Route path="/home" element={<Home />} />
//       <Route path="/add-contact" element={<AddContact addContactHandler={addContactHandler} />} />
//       <Route path="/contact-list" element={<ContactList contacts={contacts} getContactId={removeContactHandler} />} />  
//     </Routes>
//   );
// }

// export default App;


import React from "react"; 
import { Routes, Route } from "react-router-dom"; 
import Home from "./components/Home";
import Login from "./components/Login";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
}

export default App;


// import React, { useState, useEffect } from "react";

// const Home = () => {
//   const [username, setUsername] = useState("");  // Store logged-in username
//   const [searchTerm, setSearchTerm] = useState("");  // Store search input
//   const [contacts, setContacts] = useState([]);  // Store contact list
//   const [recentSearches, setRecentSearches] = useState([]);  // Store recent searches
//   const [filteredContacts, setFilteredContacts] = useState([]); // Filtered search results

//   useEffect(() => {
//     // Fetch logged-in user from localStorage
//     const storedUser = localStorage.getItem("username");
//     if (storedUser) {
//       setUsername(storedUser);
//     }

//     // Load recent searches from localStorage
//     const storedSearches = JSON.parse(localStorage.getItem("recentSearches")) || [];
//     setRecentSearches(storedSearches);

//     // Fetch contacts (mock data - replace with API call)
//     setContacts([
//       { id: 1, name: "Alice Johnson", email: "alice@example.com" },
//       { id: 2, name: "Bob Smith", email: "bob@example.com" },
//       { id: 3, name: "Charlie Brown", email: "charlie@example.com" }
//     ]);
//   }, []);

//   // Handle search input change
//   const handleSearch = (e) => {
//     const query = e.target.value;
//     setSearchTerm(query);

//     if (query.trim() === "") {
//       setFilteredContacts([]);
//       return;
//     }

//     // Filter contacts based on search term
//     const results = contacts.filter(contact =>
//       contact.name.toLowerCase().includes(query.toLowerCase()) ||
//       contact.email.toLowerCase().includes(query.toLowerCase())
//     );
//     setFilteredContacts(results);
//   };

//   // Handle search selection
//   const handleSearchSelect = (query) => {
//     setSearchTerm(query);

//     // Save to recent searches
//     const updatedSearches = [query, ...recentSearches.slice(0, 4)]; // Keep only last 5
//     setRecentSearches(updatedSearches);
//     localStorage.setItem("recentSearches", JSON.stringify(updatedSearches));
//   };

//   return (
//     <div className="container mt-4">
//       {/* Navbar with Username Display */}
//       <div className="d-flex justify-content-between align-items-center mb-4">
//         <h2>Home</h2>
//         <span className="badge bg-primary p-2">{username}</span>
//       </div>

//       {/* Search Bar */}
//       <div className="mb-3">
//         <input
//           type="text"
//           className="form-control"
//           placeholder="Search contacts..."
//           value={searchTerm}
//           onChange={handleSearch}
//         />
//       </div>

//       {/* Display Recent Searches */}
//       {recentSearches.length > 0 && (
//         <div className="mb-3">
//           <h5>Recent Searches</h5>
//           <ul className="list-group">
//             {recentSearches.map((search, index) => (
//               <li key={index} className="list-group-item" onClick={() => handleSearchSelect(search)}>
//                 {search}
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}

//       {/* Display Search Results */}
//       {filteredContacts.length > 0 && (
//         <div>
//           <h5>Search Results</h5>
//           <ul className="list-group">
//             {filteredContacts.map(contact => (
//               <li key={contact.id} className="list-group-item">
//                 <strong>{contact.name}</strong> - {contact.email}
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Home;


// import React, { useState, useEffect } from "react";
// import ContactList from "./ContactList";
// import AddContact from "./AddContact";
// import userIcon from "../images/user.png"; // Placeholder user icon
// import "./Home.css"; // Import CSS for animations & styling

// const Home = ({ contacts, addContactHandler, removeContactHandler }) => {
//   const [username, setUsername] = useState(""); // Store logged-in username
//   const [searchTerm, setSearchTerm] = useState(""); // Store search input
//   const [recentSearches, setRecentSearches] = useState([]); // Store recent searches
//   const [filteredContacts, setFilteredContacts] = useState([]); // Filtered search results

//   useEffect(() => {
//     const storedUser = localStorage.getItem("username");
//     if (storedUser) {
//       setUsername(storedUser);
//     }

//     const storedSearches = JSON.parse(localStorage.getItem("recentSearches")) || [];
//     setRecentSearches(storedSearches);
//   }, []);

//   const handleSearch = (e) => {
//     const query = e.target.value;
//     setSearchTerm(query);

//     if (query.trim() === "") {
//       setFilteredContacts([]);
//       return;
//     }

//     const results = contacts.filter(contact =>
//       contact.name.toLowerCase().includes(query.toLowerCase()) ||
//       contact.email.toLowerCase().includes(query.toLowerCase())
//     );
//     setFilteredContacts(results);
//   };

//   const handleSearchSelect = (query) => {
//     setSearchTerm(query);
//     const updatedSearches = [query, ...recentSearches.slice(0, 4)];
//     setRecentSearches(updatedSearches);
//     localStorage.setItem("recentSearches", JSON.stringify(updatedSearches));
//   };

//   return (
//     <div className="container mt-4 home-container">
//       {/* Navbar with Username */}
//       <div className="header-bar d-flex justify-content-between align-items-center mb-4 p-3 shadow">
//         <h2 className="title">Contact Manager</h2>
//         <div className="user-info">
//           <img src={userIcon} alt="User" className="user-icon" />
//           <span className="username">{username}</span>
//         </div>
//       </div>

//       {/* Search Bar */}
//       <div className="search-bar mb-3">
//         <input
//           type="text"
//           className="form-control search-input"
//           placeholder="Search contacts..."
//           value={searchTerm}
//           onChange={handleSearch}
//         />
//       </div>

//       {/* Recent Searches */}
//       {recentSearches.length > 0 && (
//         <div className="recent-searches mb-3">
//           <h5>Recent Searches</h5>
//           <ul className="list-group">
//             {recentSearches.map((search, index) => (
//               <li key={index} className="list-group-item search-item" onClick={() => handleSearchSelect(search)}>
//                 {search}
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}

//       {/* Search Results */}
//       {filteredContacts.length > 0 && (
//         <div className="search-results mb-3">
//           <h5>Search Results</h5>
//           <ul className="list-group">
//             {filteredContacts.map(contact => (
//               <li key={contact.id} className="list-group-item contact-item">
//                 <img src={userIcon} alt="User" className="contact-icon" />
//                 <div>
//                   <strong>{contact.name}</strong> - {contact.email}
//                 </div>
//                 <i className="trash alternate outline icon delete-icon" onClick={() => removeContactHandler(contact.id)}></i>
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}

//       {/* Add Contact Section */}
//       <div className="card p-4 shadow mt-4 add-contact-form">
//         <h3>Add a New Contact</h3>
//         <AddContact addContactHandler={addContactHandler} />
//       </div>

//       {/* Contact List Section */}
//       <div className="card p-4 shadow mt-4 contact-list-section">
//         <h3 className="mb-3">Your Contacts</h3>
//         {contacts.length === 0 ? (
//           <p className="text-muted">No contacts found. Add new contacts above.</p>
//         ) : (
//           <ContactList contacts={contacts} getContactId={removeContactHandler} />
//         )}
//       </div>
//     </div>
//   );
// };

// export default Home;


import React from "react";

const Header = () => {
  return (
    <div className="ui fixed menu">
      <div className="ui container center">
        <h2>Contact Manager</h2>
      </div>
    </div>
  );
};

export default Header;

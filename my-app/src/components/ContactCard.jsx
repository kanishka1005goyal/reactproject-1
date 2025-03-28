// import React from "react";
// import user from "../images/user.png";

// const ContactCard = (props) => {
//   const { id, name, email } = props.contact;
//   return (
//     <div className="item">
//       <img className="ui avatar image" src={user} alt="user" />
//       <div className="content">
//         <div className="header">{name}</div>
//         <div>{email}</div>
//       </div>
//       <i
//         className="trash alternate outline icon"
//         style={{ color: "red", marginTop: "7px" }}
//         onClick={() => props.clickHander(id)}
//       ></i>
//     </div>
//   );
// };

// export default ContactCard;


import React from "react";
import user from "../images/user.png";

const ContactCard = (props) => {
  const { id, name, email } = props.contact;
  return (
    <div className="item" style={{ display: "flex", alignItems: "center", padding: "10px 0" }}>
      {/* Smaller Profile Icon */}
      <img 
        className="ui avatar image" 
        src={user} 
        alt="user" 
        style={{ width: "40px", height: "40px", marginRight: "10px" }}
      />

      {/* Contact Details (Aligned Next to Icon) */}
      <div className="content" style={{ flexGrow: 1 }}>
        <div className="header" style={{ fontSize: "16px" }}>{name}</div>
        <div style={{ fontSize: "14px", color: "gray" }}>{email}</div>
      </div>

      {/* Delete Icon */}
      <i
        className="trash alternate outline icon"
        style={{ color: "red", cursor: "pointer" }}
        onClick={() => props.clickHander(id)}
      ></i>
    </div>
  );
};

export default ContactCard;

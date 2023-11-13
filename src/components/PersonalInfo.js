// Import React library
import React from "react";
import "./personalInfo.css";

// Define the PersonalInfo component that receives personal information as props
const PersonalInfo = ({ personalInfoData }) => {
  // Destructure personalInfoData object
  const { name, title, email, phone, imageSrc } = personalInfoData;

  return (
    // Create a container div with a CSS class for styling
    <div className="personal-info">
      {/* Display the user's image */}
      <img src={imageSrc} alt={name} className="profile-image" />
      <div className="user-details">
        {/* Display the user's name */}
        <h2>{name}</h2>
        {/* Display the user's job title or role */}
        <h3>{title}</h3>
        {/* Display the user's email address */}
        <p>{email}</p>
        {/* Display the user's phone number */}
        <p>{phone}</p>
      </div>
    </div>
  );
};

// Export the PersonalInfo component as the default export of this module
export default PersonalInfo;

// Import React library
import React from "react";
import "./education.css";

// Define the Education component that receives education data as props
const Education = ({ educationData }) => {
  // Extract the "school" array from the educationData prop
  const { school } = educationData;

  return (
    // Create a container div with a CSS class for styling
    <div className="education">
      {/* Display the "Education" section heading */}
      <h2>Education</h2>
      <ul>
        {/* Map through each school in the school array and display details */}
        {school.map((schoolItem, index) => (
          <li key={index}>
            {/* Display the name of the educational institution */}
            <h3>{schoolItem.institution}</h3>
            {/* Display the degree or qualification obtained */}
            <p>{schoolItem.degree}</p>
            {/* Display the major or field of study */}
            <p>{schoolItem.major}</p>
            {/* Display the graduation date */}
            <p>{schoolItem.graduationDate}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

// Export the Education component as the default export of this module
export default Education;

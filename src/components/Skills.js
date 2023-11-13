// Import React library
import React from "react";
import "./skills.css";

// Define the Skills component that receives skills data as props
const Skills = ({ skillsData }) => {
  // Extract the "skills" array from the skillsData prop
  const { skills } = skillsData;

  return (
    // Create a container div with a CSS class for styling
    <div className="skills">
      {/* Display the "Skills" section heading */}
      <h2>Skills</h2>
      <div className="skills-list">
        {/* Display a subheading for the skills list */}
        <ul>
          {/* Map through each skill in the skills array and display as list items */}
          {skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

// Export the Skills component as the default export of this module
export default Skills;

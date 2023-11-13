// Import React library
import React from "react";
import "./workExperience.css";

// Define the WorkExperience component that receives work experience data as props
const WorkExperience = ({ workExperienceData }) => {
  // Extract the "jobs" array from the workExperienceData prop
  const { jobs } = workExperienceData;

  return (
    // Create a container div with a CSS class for styling
    <div className="work-experience">
      {/* Display the "Work Experience" section heading */}
      <h2>Work Experience</h2>
      <ul>
        {/* Map through each job in the jobs array and display details */}
        {jobs.map((job, index) => (
          <li key={index}>
            {/* Display the job position or title */}
            <h3>{job.position}</h3>
            {/* Display the name of the company */}
            <p>{job.company}</p>
            {/* Display the start and end dates of the job */}
            <p>
              {job.startDate} - {job.endDate}
            </p>
            <ul>
              {/* Map through each job highlight and display as list items */}
              {job.highlights.map((highlight, highlightIndex) => (
                <li key={highlightIndex}>{highlight}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

// Export the WorkExperience component as the default export of this module
export default WorkExperience;

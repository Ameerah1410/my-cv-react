// Import React and individual sections of the CV
import React from "react";
import PersonalInfo from "./PersonalInfo";
import Education from "./Education";
import WorkExperience from "./WorkExperience";
import Skills from "./Skills";

// Define the CV component that receives data as props
const CV = ({
  personalInfoData,
  educationData,
  workExperienceData,
  skillsData,
}) => {
  return (
    // Create a container div with a CSS class for styling
    <div className="cv-container">
      {/* Render the PersonalInfo component, passing in personal information data as props */}
      <PersonalInfo personalInfoData={personalInfoData} />
      {/* Render the Education component, passing in education data as props */}
      <Education educationData={educationData} />
      {/* Render the WorkExperience component, passing in work experience data as props */}
      <WorkExperience workExperienceData={workExperienceData} />
      {/* Render the Skills component, passing in skills data as props */}
      <Skills skillsData={skillsData} />
    </div>
  );
};

// Export the CV component as the default export of this module
export default CV;

// Import React and the CV component from the specified file
import React from "react";
import CV from "./components/CV";
import "./App.css";

// Define the main App component
function App() {
  // Define personal information data
  const personalInfoData = {
    name: "Ameerah Moos",
    title: "Full Stack Web Development Student",
    email: "ameerah14moos3@gmail.com",
    phone: "+27 63 627 9185",
    imageSrc: require("./ProfilePic.jpg"),
  };

  // Define education data
  const educationData = {
    school: [
      {
        institution: "University of Stellenbosch",
        degree: "Bachelor of Science in Sport Science",
        major: "Physiology and Coaching",
        graduationDate: "Dec 2019",
      },
    ],
  };

  // Define work experience data
  const workExperienceData = {
    jobs: [
      {
        position: "Data Services Associate",
        company: "Boldr (Peerspace)",
        startDate: "Oct 2021",
        endDate: "Aug 2023",
        highlights: [
          "Conducted thorough reviews of client submissions.",
          "Utilized CRM tools and various applications proficiently to execute tasks effectively and with optimal efficiency.",
          "Fostered collaboration with internal and external teams to successfully deliver projects.",
          "Reported and addressed process deficiencies to ensure accurate task execution.",
          "Facilitated training and conducted refresher sessions within my area of expertise when necessary.",
        ],
      },
      {
        position: "COVID-19 Vaccination Administrator",
        company: "Parow Family Pharmacy",
        startDate: "May 2021",
        endDate: "Oct 2021",
        highlights: [
          "Handled vaccine rollout program.",
          "Data capturing and analysis.",
          "Monitoring and managing off-site vaccinations.",
        ],
      },
      {
        position: "Sport Scientist Intern",
        company: "BioDynamics Institute",
        startDate: "Jan 2020",
        endDate: "May 2020",
        highlights: [
          "Administration and data capturing.",
          "Executing exercise programs with clients.",
          "Monitoring and managing off-site vaccinations.",
          "Drawing up reports based on data captured.",
          "Manufacturing customized orthotics.",
        ],
      },
    ],
  };

  // Define skills data
  const skillsData = {
    skills: [
      "JavaScript",
      "React",
      "Node.js",
      "HTML/CSS",
      "Github",
      "Webpack",
      "Bootstrap",
    ],
  };

  // Render the App component, passing in the defined data as props to the CV component
  return (
    <div className="App">
      <CV
        personalInfoData={personalInfoData}
        educationData={educationData}
        workExperienceData={workExperienceData}
        skillsData={skillsData}
      />
    </div>
  );
}

// Export the App component as the default export of this module
export default App;

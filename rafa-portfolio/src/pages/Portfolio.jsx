import ProjectCard from './Projects'

import weather from '../assets/images/weather.png'

export default function Portfolio() {
  return (
    <main>
      <ProjectCard
        projects={[

          {
            id: 1,
            projectName: "Weather",
            projectDescription: "Check weather in any location",
            projectImg: weather
          },
          {
            id: 2,
            projectName: "Password Generator",
            projectDescription: "Create a password based on required criteria",
            projectImg: weather
          },
          {
            id: 3,
            projectName: "Password Generator",
            projectDescription: "Create a password based on required criteria",
            projectImg: weather
          },
          {
            id: 4,
            projectName: "Password Generator",
            projectDescription: "Create a password based on required criteria",
            projectImg: weather
          },
          {
            id: 5,
            projectName: "Password Generator",
            projectDescription: "Create a password based on required criteria",
            projectImg: weather
          },
          {
            id: 6,
            projectName: "Password Generator",
            projectDescription: "Create a password based on required criteria",
            projectImg: weather
          }

        ]}  
      />
    </main>

  );
}


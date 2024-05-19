import ProjectCard from './Projects'

import weather from '../assets/images/weather.png'
import ecom from '../assets/images/ecom-backend.png'
import quiz from '../assets/images/quiz.png'
import sociaNetwork from '../assets/images/social-network-backend.png'
import pwa from '../assets/images/pwa-text-editor.png'
import taskTracker from '../assets/images/task-tracker.png'


export default function Portfolio() {
  return (
    <main>
      <ProjectCard
        projects={[

          {
            id: 1,
            projectName: "Weather",
            projectDescription: "Weather application with third party API",
            projectImg: weather,
            github:'https://github.com/rafarizvi/rafa-weather-dashboard',
            deployedLink: 'https://rafarizvi.github.io/rafa-weather-dashboard/'
          },
          {
            id: 2,
            projectName: "Ecom backend",
            projectDescription: "An ecom back-end built using MySQL",
            projectImg: ecom,
            github:'https://github.com/rafarizvi/rafa-ecom-back-end',
            deployedLink: 'https://drive.google.com/file/d/1Ff0Tk79rUUbNQ9ms7dB5aqcssO4Z2qgE/view'
          },
          {
            id: 3,
            projectName: "Quiz",
            projectDescription: "Science trivia challenge made with JS",
            projectImg: quiz,
            github:'https://github.com/rafarizvi/science-trivia-challenge',
            deployedLink: 'https://rafarizvi.github.io/science-trivia-challenge/'
          },
          {
            id: 4,
            projectName: "Social network backend",
            projectDescription: "Social network back-end utilizing MongoDB",
            projectImg: sociaNetwork,
            github:'https://github.com/rafarizvi/rafa-social-network-api',
            deployedLink: 'https://drive.google.com/file/d/1RW7TODrVKrR_-sdv5iF-Z3_yosoerh5u/view'

          },
          {
            id: 5,
            projectName: "Text editor",
            projectDescription: "Progressive web application (PWA)",
            projectImg: pwa,
            github:'https://github.com/rafarizvi/rafa-progressive-web-application-text-editor',
            deployedLink: 'https://rocky-coast-30742-8885e526340f.herokuapp.com'
          },
          {
            id: 6,
            projectName: "Task tracker",
            projectDescription: "Fullstack application",
            projectImg: taskTracker,
            github:'https://github.com/rafarizvi/task-trek',
            deployedLink: 'https://secret-lowlands-81881-280288356e80.herokuapp.com/login'
          }

        ]}  
      />
    </main>

  );
}


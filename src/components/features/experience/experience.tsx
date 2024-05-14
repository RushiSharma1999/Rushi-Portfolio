import React from 'react';
import { Headings } from '../../core/headings/headings';
import './style.css';

const Experience = React.forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div ref={ref} className="about-section" style={{ marginTop: '50px' }}>
      {/* 🎯 Display the section title and subtitle */}
      <Headings title="Experience" subtitle="My Journey So Far" />{' '}
      {/* 📝 Edit the biography below to reflect your own experience */}
      <div className="about-experience-item" style={{ marginTop: '30px', color: 'white' }}>
        <div className="about-experience-date">July 2023 - Present</div>
        <div>
        <h2 className="about-experience-title" style={{ marginTop: '10px', color: 'white' }}>
            <span style={{  marginTop: '10px',display: 'flex', alignItems: 'center', gap: '5px' }}>
              <span>Life Stages </span>
              <a href="https://lifestages.us/" target="_blank" className="about-experience-link">
                {/* Your SVG icon here */}
              </a>
            </span>
            <span style={{marginTop:'10px'}}> Software Engineer - Project Lead</span>
          </h2>
          <p className="about-experience-description" style={{marginTop:'10px'}} >
          At LifeSages, I am leading the development of a pioneering mobile app from inception to implementation. I am overseeing team members, organized into frontend and backend teams, delegating tasks, and guiding the SDLC. To enhance user engagement, we are crafting dynamic React Native UI components wireframed using Figma. Developing an express server using NodeJS for seamless database interaction. Firebase Authentication and Cloud Firestore are facilitating streamlined user management and efficient data storage. I am implementing Async Storage for state management, reducing UI rendering time. Jest is being used for unit and integration tests, ensuring comprehensive coverage. Error tracking with Sentry.io and project management with Jira are streamlining the development processes. GitHub is facilitating seamless collaboration among team members.           </p>
          {/* <ul>
    <li>Spearheading the development of a pioneering mobile app for the startup overseeing the project from inception to implementation.</li>
    <li>Leading 9+ members, organized into frontend and backend teams by delegating tasks and guiding the SDLC.</li>
    <li>Enhancing user engagement through 25+ dynamic React Native UI components, wireframed using Figma.</li>
    <li>Developing an express server using NodeJS, facilitating seamless interaction with the database through 10+ RESTful APIs.</li>
    <li>Leveraging Firebase Authentication for streamlined user management and Cloud Firestore for efficient data storage into 15+ data models.</li>
    <li>Implementing Redux for effective state management by crafting reducers and slices, resulting in a 10% reduction in UI rendering time.</li>
    <li>Using Jest for conducting unit tests and integration tests, achieving a 95% test coverage rate for the application.</li>
    <li>Managed error tracking with Sentry.io and utilized Jira for project management, resulting in a 25% reduction in bug resolution time and increased task completion efficiency.</li>
    <li>Utilizing GitHub for version control, ensuring seamless collaboration among team members.</li>
  </ul> */}
          <div className="about-experience-technologies" style={{marginTop:'10px'}}>
            <b>React Native, NodeJS, Firebase, Cloud Firestore, Redux, Jest, Sentry.io, Jira, GitHub</b>
          {/* React, TypeScript, Chakra-UI, GitHub */}
          </div>
        </div>
      </div>

      {/* Add more experience items following the same pattern */}

    </div>
  );
});

Experience.displayName = 'Experience';

export { Experience };



// import React from 'react'
// import { Headings } from '../../core/headings/headings'
// import './style.css'

// const Experience = React.forwardRef<HTMLDivElement>((props, ref) => {
//   return (
//     <div ref={ref} className="experience-section">
//       {/* 🎯 Display the section title and subtitle */}
//       <Headings title="Experience" subtitle="Hi, I'm Rushi." />{' '}
//       {/* 📝 Edit the biography below to reflect your own journey and interests */}
//       <p className="about-text">
      
        
//         I&apos;m a Lead Software Engineer Intern at Life Stages, a startup that aims to 
//         provide personalized wellness-aimed tools for users across different life stages. 
//         I have also completed a Master of Science in Software Engineering at 
//         San Jose State University, where I acquired advanced skills in multiple programming 
//         languages and software development processes. My passion for software engineering stems 
//         from my curiosity and creativity in solving real-world problems with innovative solutions.
        
//         In addition to coding, I enjoy building side projects, writing blog posts, and reading books.
//         When I&apos;m not doing anything coding-related, I enjoy spending time
//         with my family and working out.
//         {/* 🔗 Update the href attribute with your Instagram link */}
//         Follow my
//         <a className="about-link" href="https://www.linkedin.com/in/rushisharma/" target="_blank" rel="noreferrer">
//           Linkedin
//           {/* 🔄 Change 'Instagram' to your preferred social media or remove if not applicable */}
//         </a>{' '}
//         to see my journey!
//       </p>
//     </div>
//   )
// })

// Experience.displayName = 'Experience'

// export { Experience }

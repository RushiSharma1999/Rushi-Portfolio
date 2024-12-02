import React from 'react'
import { Headings } from '../../core/headings/headings'
import './style.css'

const Experience = React.forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div ref={ref} className="about-section" style={{ marginTop: '50px' }}>
      {/* 🎯 Display the section title and subtitle */}
      <Headings title="Experience" subtitle="My Journey So Far" />{' '}
      {/* 📝 Edit the biography below to reflect your own experience */}
      <div
        className="about-experience-item"
        style={{ marginTop: '60px', color: 'white' }}
      >
        <div className="about-experience-date">August 2023 - Present</div>
        <div>
          <h2
            className="about-experience-title"
            style={{ marginTop: '10px', color: 'white' }}
          >
            <span
              style={{
                marginTop: '10px',
                marginBottom: '10px',
                display: 'flex',
                alignItems: 'center',
                gap: '5px',
                color: '#819bf7',
              }}
            >
              <a
                //href="https://lifestages.us/"
                //target="_blank"
                className="about-experience-link"
              >
                <span>CloudData Technologies </span>
                {/* Your SVG icon here */}
              </a>
            </span>
          </h2>
          <h2>
            <span style={{ marginTop: '100px' }}>
              {' '}
              Software Engineer (Contract)
            </span>
          </h2>
          {/* <p className="about-experience-description" style={{marginTop:'10px', color:'#adadad'}} > */}
          <p className="about-text">
            At CloudData Technologies, I focus on developing and optimizing
            backend features for a fieldwork tracking system. Using Node.js and
            Express, I integrated MongoDB to log over 1,000+ entries monthly,
            ensuring efficient data storage. I implemented secure authentication
            workflows with Firebase Authentication, enabling role-based access
            for 150+ users and achieving a 99.9% login success rate.
            Additionally, I designed and refined 20+ RESTful API endpoints to
            enable seamless data flow between the React.js frontend and backend
            systems.{' '}
          </p>
          <div
            className="about-experience-technologies"
            style={{ marginTop: '10px', color: '#819bf7' }}
          >
            <b>
              Node.js, Express, MongoDB, Firebase Authentication, RESTful APIs,
              React.js
            </b>
            {/* React, TypeScript, Chakra-UI, GitHub */}
          </div>
        </div>
      </div>
      <div
        className="about-experience-item"
        style={{ marginTop: '60px', color: 'white' }}
      >
        <div className="about-experience-date">July 2023 - August 2024</div>
        <div>
          <h2
            className="about-experience-title"
            style={{ marginTop: '10px', color: 'white' }}
          >
            <span
              style={{
                marginTop: '10px',
                marginBottom: '10px',
                display: 'flex',
                alignItems: 'center',
                gap: '5px',
                color: '#819bf7',
              }}
            >
              <a
                //href="https://lifestages.us/"
                //target="_blank"
                className="about-experience-link"
              >
                <span>Life Stages </span>
                {/* Your SVG icon here */}
              </a>
            </span>
          </h2>
          <h2>
            <span style={{ marginTop: '100px' }}>
              {' '}
              Software Engineer - Project Lead
            </span>
          </h2>
          {/* <p className="about-experience-description" style={{marginTop:'10px', color:'#adadad'}} > */}
          <p className="about-text">
            At LifeSages, I am leading the development of a pioneering mobile
            app from inception to implementation. I am overseeing team members,
            organized into frontend and backend teams, delegating tasks, and
            guiding the SDLC. To enhance user engagement, we are crafting
            dynamic React Native UI components wireframed using Figma.
            Developing an express server using NodeJS for seamless database
            interaction. Firebase Authentication and Cloud Firestore are
            facilitating streamlined user management and efficient data storage.
            I am implementing Async Storage for state management, reducing UI
            rendering time. Jest is being used for unit and integration tests,
            ensuring comprehensive coverage. Error tracking with Sentry.io and
            project management with Jira are streamlining the development
            processes. GitHub is facilitating seamless collaboration among team
            members.{' '}
          </p>
          <div
            className="about-experience-technologies"
            style={{ marginTop: '10px', color: '#819bf7' }}
          >
            <b>
              React Native, NodeJS, Firebase, Cloud Firestore, Redux, Jest,
              Sentry.io, Jira, GitHub
            </b>
            {/* React, TypeScript, Chakra-UI, GitHub */}
          </div>
        </div>
      </div>
      <div
        className="about-experience-item"
        style={{ marginTop: '60px', color: 'white' }}
      >
        <div className="about-experience-date">May 2021 - August 2022</div>
        <div>
          <h2
            className="about-experience-title"
            style={{ marginTop: '10px', color: 'white' }}
          >
            <span
              style={{
                marginTop: '10px',
                marginBottom: '10px',
                display: 'flex',
                alignItems: 'center',
                gap: '5px',
                color: '#819bf7',
              }}
            >
              <a
                //href="https://lifestages.us/"
                //target="_blank"
                className="about-experience-link"
              >
                <span>Tripcon Engineering </span>
                {/* Your SVG icon here */}
              </a>
            </span>
          </h2>
          <h2>
            <span style={{ marginTop: '100px' }}> Software Engineer</span>
          </h2>
          {/* <p className="about-experience-description" style={{marginTop:'10px', color:'#adadad'}} > */}
          <p className="about-text">
            Dring my tenure at Tripcon Engineering, I developed and maintained
            backend services for the corporate website and e-commerce
            operations, enhancing online presence and improving customer
            accessibility. I designed and implemented 10+ RESTful APIs using
            Java and Spring Boot, incorporating JPA for data persistence.
            Utilizing the Spring MVC framework, I ensured efficient request
            handling and data processing. I collaborated with three frontend
            developers to integrate APIs with a React-based UI, ensuring a
            cohesive and responsive interface. I leveraged PostgreSQL for data
            storage, designing and optimizing 20+ database schemas for efficient
            querying and retrieval. In an Agile environment, I participated in
            sprint planning, daily stand-ups, and retrospectives to deliver
            solutions on time. I used IntelliJ IDEA for coding, debugging, and
            testing backend functionalities, and GitHub for version control. I
            conducted 15+ code reviews, performed unit testing with JUnit, and
            maintained documentation for backend services, APIs, and database
            schemas.{' '}
          </p>
          <div
            className="about-experience-technologies"
            style={{ marginTop: '10px', color: '#819bf7' }}
          >
            <b>
              Java, Spring Boot, JPA, Spring MVC, React, PostgreSQL, JDBC,
              IntelliJ IDEA, GitHub, XML, JUnit
            </b>
          </div>
        </div>
      </div>
      {/* <div
        className="about-experience-item"
        style={{ marginTop: '60px', color: 'white' }}
      >
        <div className="about-experience-date">August 2020 - February 2021</div>
        <div>
          <h2
            className="about-experience-title"
            style={{ marginTop: '10px', color: 'white' }}
          >
            <span
              style={{
                marginTop: '10px',
                marginBottom: '10px',
                display: 'flex',
                alignItems: 'center',
                gap: '5px',
                color: '#819bf7',
              }}
            >
              <a
                //href="https://lifestages.us/"
                //target="_blank"
                className="about-experience-link"
              >
                <span>Infinity Valves and Fittings </span>
              </a>
            </span>
          </h2>
          <h2>
            <span style={{ marginTop: '100px' }}> Web Developer</span>
          </h2>
          <p className="about-text">
            At Infinity Valves and Fittings, I developed the company’s website
            using Java and Spring Boot for robust back-end services. I created
            dynamic, responsive front-end interfaces with React, enhancing user
            interaction for 50 daily users. I designed and implemented a
            relational database with PostgreSQL, managing seven schemas. I
            developed and maintained eight REST APIs for seamless front-end and
            back-end communication, using Java Persistence API for efficient
            database access. I integrated Google Maps API for location services
            and Web3Forms API for form submissions. I performed black box
            testing and deployed the web app on Heroku, ensuring 99.9% uptime. I
            managed version control with GitHub, handling 100+ commits, and
            created 15 pages of technical documentation for development support.{' '}
          </p>
          <div
            className="about-experience-technologies"
            style={{ marginTop: '10px', color: '#819bf7' }}
          >
            <b>
              Java, Spring Boot, React, PostgreSQL, JDBC, Google Maps API,
              Web3Forms API, Heroku, GitHub
            </b>
          </div>
        </div>
      </div> */}
      {/* Add more experience items following the same pattern */}
    </div>
  )
})

Experience.displayName = 'Experience'

export { Experience }

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

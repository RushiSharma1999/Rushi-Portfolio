import React from 'react'
import { Headings } from '../../core/headings/headings'
import './style.css'

const About = React.forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div ref={ref} className="about-section">
      {/* 🎯 Display the section title and subtitle */}
      <Headings title="About" subtitle="Hi, I'm Rushi." />{' '}
      {/* 📝 Edit the biography below to reflect your own journey and interests */}
      <p className="about-text">
        I&apos;m a Software Engineer and the Project Lead at Life Stages, a
        startup that aims to provide personalized wellness-aimed tools for users
        across different life stages. I have also completed a Master of Science
        in Software Engineering at San Jose State University, where I acquired
        advanced skills in multiple programming languages and software
        development processes. My passion for software engineering stems from my
        curiosity and creativity in solving real-world problems with innovative
        solutions, something we do at Life Stages. In addition to coding, I
        enjoy building side projects, learning about advancements in the
        industry, and reading wide range of books from fiction to philosophical
        works. When I&apos;m not doing anything intellect-related, I enjoy
        spending time with my friends, enjoying soccer, biking and working out.
        Follow my
        <a
          className="about-link"
          href="https://www.linkedin.com/in/rushisharma/"
          target="_blank"
          rel="noreferrer"
        >
          Linkedin
          {/* 🔄 Change 'Instagram' to your preferred social media or remove if not applicable */}
        </a>{' '}
        to see my journey!
      </p>
    </div>
  )
})

About.displayName = 'About'

export { About }

import React from 'react'
import { Headings } from '../../core/headings/headings'
import './style.css'

const Experience = React.forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div ref={ref} className="experience-section">
      {/* 🎯 Display the section title and subtitle */}
      <Headings title="Experience" subtitle="Hi, I'm Rushi." />{' '}
      {/* 📝 Edit the biography below to reflect your own journey and interests */}
      <p className="about-text">
      
        
        I&apos;m a Lead Software Engineer Intern at Life Stages, a startup that aims to 
        provide personalized wellness-aimed tools for users across different life stages. 
        I have also completed a Master of Science in Software Engineering at 
        San Jose State University, where I acquired advanced skills in multiple programming 
        languages and software development processes. My passion for software engineering stems 
        from my curiosity and creativity in solving real-world problems with innovative solutions.
        
        In addition to coding, I enjoy building side projects, writing blog posts, and reading books.
        When I&apos;m not doing anything coding-related, I enjoy spending time
        with my family and working out.
        {/* 🔗 Update the href attribute with your Instagram link */}
        Follow my
        <a className="about-link" href="https://www.linkedin.com/in/rushisharma/" target="_blank" rel="noreferrer">
          Linkedin
          {/* 🔄 Change 'Instagram' to your preferred social media or remove if not applicable */}
        </a>{' '}
        to see my journey!
      </p>
    </div>
  )
})

Experience.displayName = 'Experience'

export { Experience }

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
        I am a results-driven Software Engineer with experience spanning diverse
        companies, including an early-stage startup, where I specialized in
        leading projects from concept to completion. With a Master of Science in
        Software Engineering from San Jose State University, I have honed my
        expertise in programming languages, software development processes, and
        end-to-end project ownership. Most recently, I served as the Software
        Project Lead at Life Stages, where I led the development of the
        <a
          className="about-link"
          href="https://apps.apple.com/us/app/align-by-life-stages/id6502299277"
          target="_blank"
          rel="noreferrer"
        >
          Align
          {/* 🔄 Change 'Instagram' to your preferred social media or remove if not applicable */}
        </a>{' '}
        app, a personalized wellness tool designed for users across various life
        stages. My passion for software engineering is fueled by curiosity and
        creativity in solving real-world problems through innovative solutions.
        Beyond coding, I enjoy building side projects, staying updated on
        industry advancements, and exploring books that span fiction to
        philosophy. When I&apos;m not working, you&apos;ll often find me
        spending time with friends, playing soccer, biking, or working out.
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
        to stay updated on my journey!
      </p>
    </div>
  )
})

About.displayName = 'About'

export { About }

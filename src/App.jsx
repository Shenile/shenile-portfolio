// App.js
import React from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Experience from './components/Experience';
import experienceData from './experienceData';
import projectData from './projectData';
import Project from './components/Projects';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';

const App = () => {

  const resumeLink = 'https://drive.google.com/file/d/1UkHZk24DX73nj-lk6cLhR4GbDjIhLAN-/view?usp=sharing'
  return (
    <div className='bg-custom-blue md:flex'>
      {/* Navigation */}
      <div className="w-full md:w-1/2 md:h-screen md:sticky md:top-0 bg-custom-blue">
        <Nav />
      </div>
      
      {/* Main Content */}
      <div className="w-full md:w-1/2 bg-custom-blue p-4 md:p-8 md:overflow-y-auto">

        <section id='about' className='pt-12 pb-4'>
           <About />
        </section>

        <section id='experience' className='py-8'>
         {experienceData.map((exp, index) => (
           <Experience
            key={index}
            timePeriod={exp.timePeriod}
            role={exp.role}
            company={exp.company}
            description={exp.description}
            techStacks={exp.techStacks}
            links={exp.links}
           />
          ))}
        </section>
        
        <div className='py-2'>
         <a href={resumeLink} target="_blank" rel="noopener noreferrer" download>
         <button className='mx-2 text-base text-custom-text-1 hover:text-custom-text-3'> <FontAwesomeIcon icon={faLink} /> View Resume</button>
         </a>
        </div>

        <section id='projects' className='py-8'>
         {projectData.map((prj, index) => (
           <Project
            key={index}
            timePeriod={prj.timePeriod}
            title={prj.title}
            description={prj.description}
            techStacks={prj.techStacks}
            links={prj.links}
           />
         ))}
        </section>
        
        <section id="contact" className="py-8">
          <div className='p-4'>
          <h2 className="text-lg font-semibold text-custom-text-3 mb-4">Contact Information</h2>
          <p className="text-base text-custom-text-2 leading-relaxed">
          Feel free to reach out via <br />
          Email: <a href="mailto:sshenile07@gmail.com" className="text-custom-text-3 hover:underline">sshenile07@gmail.com</a> <br /> Mobile: <a href="tel:+919626813831" className="text-custom-text-3 hover:underline">+91 9626813831</a> <br />
          Connect with me on <a href="https://www.linkedin.com/in/shenile-a-86252b268/" target="_blank" rel="noopener noreferrer" className="text-custom-text-3 hover:underline">LinkedIn</a>.
          </p>
          </div>
         
        </section>



      </div>
      
    </div>
  );
};

export default App;

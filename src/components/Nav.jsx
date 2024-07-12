import React, { useState, useEffect } from 'react';
import SocialLinks from './SocialLinks';

export default function Nav() {
  const navItems = [
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
  ];

  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 4; // Adjusted to 25% from top

      // Check each section's position relative to scroll position
      navItems.forEach((item) => {
        const section = document.getElementById(item.id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= scrollPosition && rect.bottom >= scrollPosition) {
            setActiveSection(item.id);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleItemClick = (id) => {
    setActiveSection(id);
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className='p-4 h-full md:h-screen md:p-8 bg-custom-blue'>
      <div className='mt-6 md:mt-16 pl-0 md:pl-24 '>
      <h1 className='text-3xl sm:text-4xl font-bold text-custom-text-1 px-4 py-2'>Shenile A</h1>
      <p className='text-lg sm:text-xl text-custom-text-1 px-4 py-2'>Software Developer</p>
      <p className='text-custom-text-2 text-base sm:max-w-lg p-4 pr-0 md:p-4'>
        I develop user-friendly websites and software using React, Node.js, Express, PostgreSQL, and Django for robust backend solutions.
      </p>
      <div className='pt-4 pl-2 md:pl-0 sm:pt-8'>
        <ul className='flex flex-col md:block hidden'>
          {navItems.map((item) => (
            <li key={item.id} className='relative mb-2'>
              <a
                href={`#${item.id}`}
                className={`text-base block p-2 md:p-4 transition-colors duration-300 ${
                  activeSection === item.id ? 'text-custom-text-3 font-bold text-lg delay-100' : 'text-custom-text-2'
                }`}
                onClick={() => handleItemClick(item.id)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <SocialLinks />
      </div>

    </div>
  );
}

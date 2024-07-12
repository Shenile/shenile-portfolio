import React, { useState } from 'react';

const Experience = ({ timePeriod, role, company, description, techStacks, links }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div className={`rounded-lg shadow p-4 my-4 sm:my-8 text-custom-text-2 ${hovered ? 'bg-gray-500 bg-opacity-15' : ''} transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-md`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="flex flex-wrap items-center justify-between">
        <h3 className='text-base sm:text-xl font-semibold text-custom-text-3'>{role}, {company}</h3>
        <p className='text-sm sm:text-base'>{timePeriod}</p>
      </div>

      <p className='text-sm sm:text-base my-2'>{description}</p>
      <ul className='flex flex-wrap gap-2 sm:gap-3'>
        {techStacks.map((tech, index) => (
          <li key={index} className='text-custom-text-3 text-sm sm:text-base bg-custom-text-3 bg-opacity-10 rounded-full px-3 py-1 my-1 sm:my-2'>{tech}</li>
        ))}
      </ul>
      {links && (
        <ul className='mt-1 sm:mt-2'>
          {links.map((link, index) => (
            <li key={index}><a href={link.url} target="_blank" rel="noopener noreferrer" className='text-blue-500 hover:underline'>{link.label}</a></li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Experience;

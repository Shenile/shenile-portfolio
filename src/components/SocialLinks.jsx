import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';


export default function SocialLinks() {
  const socialLinks = {
    'github': 'https://github.com/Shenile',
    'linkedin': 'https://www.linkedin.com/in/shenile-a-86252b268/',
    'mail': 'mailto:sshenile07@gmail.com'
  };

  const icons = {
    github: faGithub,
    linkedin: faLinkedin,
    mail: faEnvelope,
  };

  return (
    <div className=" my-8 flex space-x-4">
      {Object.keys(socialLinks).map((key) => (
        <a
          key={key}
          href={socialLinks[key]}
          target="_blank"
          rel="noopener noreferrer"
          className="text-custom-text-2 hover:text-custom-text-3 transition duration-300 ease-in-out transform hover:-translate-y-1"
        >
        <FontAwesomeIcon icon={icons[key]} size="2x" />
        </a>
      ))}
    </div>
  )
}

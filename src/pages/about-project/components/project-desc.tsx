import { faLongArrowDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Projects } from '../projects';

interface ProjectDescProps {
  id: string;
}

const ProjectDesc: React.FC<ProjectDescProps> = ({ id }) => {
  const images = Projects.find((p) => p.id === id)?.images || [];
  const description = Projects.find((p) => p.id === id)?.description;

  return (
    <section className='flex flex-col container'>
      <h1 className='text-primary font-primary text-4xl text-center py-[30px]'>
        Sobre <FontAwesomeIcon className='text-2xl' icon={faLongArrowDown} />
      </h1>
      {description && <p className='text-2xl'>{description}</p>}
      <div className='py-[50px] grid gap-4 w-full'>
        {images.map((image, index) => (
          <img
            className='w-full h-full mx-auto rounded-xl'
            data-aos='fade-up'
            key={index}
            src={image}
            alt={`Image ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectDesc;

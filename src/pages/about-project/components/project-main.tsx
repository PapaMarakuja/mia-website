import { faLongArrowDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Projects } from '../projects';

interface ProjectMainProps {
  id: string;
}

const ProjectMain: React.FC<ProjectMainProps> = ({ id }) => {
  const [isVisible, setIsVisible] = useState(true);
  const project = Projects.find((p) => p.id === id);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY < 100);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div className='bg-dot-thick w-full flex justify-center h-full sm:mt-[75px]'>
        <section className='flex flex-col container pb-[100px]'>
          <h1 className='text-primary font-primary text-8xl text-center py-[50px]'>
            {project?.title}
          </h1>

          <img
            className='w-full h-full mx-auto max-w-[450px] md:max-w-[750px] lg:max-w-[1250px] rounded-2xl'
            src={`${project?.thumbImage}`}
            alt='project'
          />
        </section>
      </div>
      <div
        className={`hidden fixed bottom-8 right-8 md:flex items-center space-x-3 text-primary transition-all duration-500 ${isVisible
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-4 pointer-events-none'
          }`}
      >
        <span className='text-lg font-medium text-primary'>
          Desça para ver mais{' '}
          <FontAwesomeIcon className='text-2xl text-primary' icon={faLongArrowDown} />
        </span>
      </div>
    </>
  );
};

export default ProjectMain;

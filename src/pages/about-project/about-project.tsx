import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import ProjectMain from './components/project-main';
import ProjectDesc from './components/project-desc';
import './about-project.scss';
import { Projects } from './projects';

const AboutProject: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    const timer = setTimeout(() => {
      window.scroll({ top: 0, left: 0, behavior: 'smooth' });
    }, 10);

    return () => clearTimeout(timer);
  }, []);

  const project = Projects.find((p) => p.id === id);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <>
      <Header />
      <ProjectMain id={id || ''} />
      <ProjectDesc id={id || ''} />
      <Footer />
    </>
  );
};

export default AboutProject;

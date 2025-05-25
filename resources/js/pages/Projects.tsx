import React, { FC } from 'react';
import { MainLayout } from '../components/templates/MainLayout';
import { ProjectCard } from '../components/molecules/ProjectCard';

const dummyProjects = [
  {
    title: 'Project One',
    description: 'Descrizione del progetto uno.',
    imageUrl: 'https://picsum.photos/400/240',
    link: '#',
  },
  {
    title: 'Project Two',
    description: 'Descrizione del progetto due.',
    imageUrl: 'https://picsum.photos/400/240',
    link: '#',
  },
  {
    title: 'Project Three',
    description: 'Descrizione del progetto tre.',
    imageUrl: 'https://picsum.photos/400/240',
    link: '#',
  },
];

const Projects: FC = () => (
  <MainLayout>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {dummyProjects.map((proj, idx) => (
        <ProjectCard key={idx} {...proj} />
      ))}
    </div>
  </MainLayout>
);

export default Projects;

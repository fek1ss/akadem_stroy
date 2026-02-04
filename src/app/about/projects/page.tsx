'use client'

import { useState } from 'react';
import { ProjectCard } from '@/components/ui/projectCard/ProjectCard';
import { Filter } from '@/components/ui/filter/Filter';
import styles from './styles.module.scss';
import { projects } from '@/data';

export default function Page() {
  const categories = [
    'Жилые комплексы',
    'Бизнес центры',
    'Торговые сети',
    'Промышленные базы',
    'Госучреждения'
  ];

  const [filteredProjects, setFilteredProjects] = useState(projects);

  return (
    <div className={styles.projectsPage}>
      <Filter
        data={projects}
        categories={categories}
        onFilter={setFilteredProjects}
        getCategory={item => item.category}
      />

      <div className={styles.projectsList}>
        {filteredProjects.map((prj, i) => (
          <ProjectCard
            key={i}
            title={prj.title}
            description={prj.description}
            year={prj.year}
            image={prj.img}
          />
        ))}
      </div>
    </div>
  );
}

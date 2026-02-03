'use client';

import { useState } from 'react';
import { projects } from '@/data/projects';
import { ProjectCard } from '@/components/ui/projectCard/ProjectCard';
import { Title } from '@/components/ui/title/Title';
import { TransitionBtn } from '@/components/ui/transitionBtn/TransitionBtn';
import { DotsPagination } from '@/components/ui/dotsPagination/DotsPagination';
import styles from './styles.module.scss';

export function Projects() {
  const itemsPerPage = 3;
  const [currentPage, setCurrentPage] = useState(0);

  const totalPages = Math.ceil(projects.length / itemsPerPage);

  const start = currentPage * itemsPerPage;
  const end = start + itemsPerPage;
  const visibleProjects = projects.slice(start, end);

  return (
    <div className={styles.projects}>
      <div className={styles.projects__header}>
        <Title text="реализованные проекты" color='#000' />
        <TransitionBtn text="ВСЕ ПРОЕКТЫ" color="#595959" btn={false} />
      </div>

      <div className={styles.projects__list}>
        {visibleProjects.map((prj, index) => (
          <ProjectCard
            key={prj.img + index}
            title={prj.title}
            description={prj.description}
            year={prj.year}
            image={prj.img}
          />
        ))}
      </div>

      <DotsPagination
        currentIndex={currentPage}
        total={totalPages}
        onChange={setCurrentPage}
      />
    </div>
  );
}

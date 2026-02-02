'use client';

import { DotsPagination } from '@/components/ui/dotsPagination/DotsPagination';
import { projects } from '@/data/projects';
import styles from './styles.module.scss';
import { ProjectCard } from '@/components/ui/projectCard/ProjectCard';
import { useState } from 'react';
import { Line } from './../../ui/line/Line';
import { TransitionBtn } from './../../ui/transitionBtn/TransitionBtn';
import { Title } from './../../ui/title/Title';

export function Projects() {
  const itemsPerPage = 3;
  const totalPages = Math.ceil(projects.length / itemsPerPage);

  const [currentPage, setCurrentPage] = useState(0); // индекс страницы с 0

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const displayedProjects = projects.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage,
  );

  return (
    <div className={styles.projects}>
      <div className={styles.projects__header}>
        <div className={styles.projects__head}>
          <Title text='реализованные проекты' />
        </div>
        <TransitionBtn text='ВСЕ ПРОЕКТЫ' color='#595959' btn={false} />
      </div>

      <div className={styles.projects__list}>
        {displayedProjects.map(prj => (
          <ProjectCard
            key={prj.img}
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
        onChange={handlePageChange}
      />
    </div>
  );
}

'use client';

import { useState, useRef, useEffect } from 'react';
import { projects } from '@/data/projects';
import { ProjectCard } from '@/components/ui/projectCard/ProjectCard';
import { Title } from '@/components/ui/title/Title';
import { TransitionBtn } from '@/components/ui/transitionBtn/TransitionBtn';
import { DotsPagination } from '@/components/ui/dotsPagination/DotsPagination';
import styles from './styles.module.scss';

export function Projects() {
  const [currentPage, setCurrentPage] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const itemsPerPage = 1; // для мобильных
  const totalPages = Math.ceil(projects.length / itemsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    if (containerRef.current) {
      const scrollAmount = containerRef.current.clientWidth * page;
      containerRef.current.scrollTo({
        left: scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className={styles.projects}>
      <div className={styles.projects__header}>
        <div className={styles.projects__head}>
          <Title text="реализованные проекты" />
        </div>
        <TransitionBtn text="ВСЕ ПРОЕКТЫ" color="#595959" btn={false} />
      </div>

      <div className={styles.projects__listWrapper}>
        <div className={styles.projects__list} ref={containerRef}>
          {projects.map((prj, index) => (
            <ProjectCard
              key={prj.img + index}
              title={prj.title}
              description={prj.description}
              year={prj.year}
              image={prj.img}
            />
          ))}
        </div>
      </div>

      <DotsPagination
        currentIndex={currentPage}
        total={totalPages}
        onChange={handlePageChange}
      />
    </div>
  );
}

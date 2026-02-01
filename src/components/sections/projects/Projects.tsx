'use client';
import { useState, useRef, useEffect } from 'react';
import styles from './styles.module.scss';
import { Line } from './../../ui/line/Line';
import { TransitionBtn } from './../../ui/transitionBtn/TransitionBtn';
import { projects } from '@/data/projects';
import { ProjectCard } from '@/components/ui/projectCard/ProjectCard';
import { Pagination } from '@/components/ui/pagination/Pagination';

interface ProjectsProps {
  paginated?: boolean; // если true, показываем по 3 проекта + пагинацию
}

export function Projects({ paginated = false }: ProjectsProps) {
  const itemsPerPage = 3;
  const totalPages = Math.ceil(projects.length / itemsPerPage);

  const [currentPage, setCurrentPage] = useState(1);
  const listRef = useRef<HTMLDivElement>(null);

  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  useEffect(() => {
    if (paginated && listRef.current) {
      const scrollWidth = listRef.current.clientWidth;
      listRef.current.scrollTo({
        left: scrollWidth * (currentPage - 1),
        behavior: 'smooth',
      });
    }
  }, [currentPage, paginated]);

  // Определяем, какие проекты рендерить
  const displayedProjects = paginated
    ? projects.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
    : projects;

  return (
    <div className={styles.projects}>
      <div className={styles.projects__header}>
        <div className={styles.projects__name}>
          <h1 className={styles.projects__title}>Реализованные проекты</h1>
          <Line />
        </div>
        <TransitionBtn text='ВСЕ ПРОЕКТЫ' btn={false} color='#000' />
      </div>

      <div className={styles.projects__listWrapper} ref={listRef}>
        <div className={styles.projects__list}>
          {displayedProjects.map((prj, index) => (
            <ProjectCard
              key={prj.img}
              title={prj.title}
              description={prj.description}
              year={prj.year}
              image={prj.img}
              isWide={index % 3 === 0}
            />
          ))}
        </div>
      </div>

      {/* Подключаем пагинацию только если paginated */}
      {paginated && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      )}
    </div>
  );
}

'use client';

import { useEffect, useRef, useState } from 'react';
import { projects } from '@/data/projects';
import { ProjectCard } from '@/components/ui/projectCard/ProjectCard';
import { Title } from '@/components/ui/title/Title';
import { TransitionBtn } from '@/components/ui/transitionBtn/TransitionBtn';
import { DotsPagination } from '@/components/ui/dotsPagination/DotsPagination';
import styles from './styles.module.scss';

export function Projects() {
  const listRef = useRef<HTMLDivElement | null>(null);

  const [isMobile, setIsMobile] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);

  /* ---------------- detect mobile ---------------- */
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  /* ---------------- pagination logic ---------------- */
  const itemsPerPage = isMobile ? 1 : 3;
  const totalPages = Math.ceil(projects.length / itemsPerPage);

  const start = currentPage * itemsPerPage;
  const end = start + itemsPerPage;
  const visibleProjects = isMobile
    ? projects
    : projects.slice(start, end);

  /* ---------------- sync scroll -> pagination (mobile) ---------------- */
  useEffect(() => {
    if (!isMobile || !listRef.current) return;

    const container = listRef.current;

    const onScroll = () => {
      const index = Math.round(
        container.scrollLeft / container.clientWidth
      );
      setCurrentPage(index);
    };

    container.addEventListener('scroll', onScroll, { passive: true });
    return () => container.removeEventListener('scroll', onScroll);
  }, [isMobile]);

  /* ---------------- pagination click -> scroll (mobile) ---------------- */
  const handlePageChange = (index: number) => {
    setCurrentPage(index);

    if (isMobile && listRef.current) {
      listRef.current.scrollTo({
        left: index * listRef.current.clientWidth,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className={styles.projects}>
      <div className={styles.projects__header}>
        <Title text="реализованные проекты" color="#000" />
        <TransitionBtn text="ВСЕ ПРОЕКТЫ" color="#595959" btn={false} />
      </div>

      <div
        ref={listRef}
        className={styles.projects__list}
      >
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
        onChange={handlePageChange}
      />
    </div>
  );
}

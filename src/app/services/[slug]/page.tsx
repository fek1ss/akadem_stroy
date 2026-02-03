'use client';
import { useParams } from 'next/navigation';
import HeroBase from './../../../components/ui/heroBase/HeroBase';
import { servicesData } from '@/data';
import { ContentBlock } from '@/components/ui/contentBlock/ContentBlock';
import styles from './styles.module.scss';
import { DiscussSection } from './../../../components/sections/discussSection/DiscussSection';
import { Advantages } from '@/components/sections/advantages/Advantages';
import { CertificatesSection } from './../../../components/sections/certificates/CertificatesSection';
import { Projects } from './../../../components/sections/projects/Projects';
import { PartnersSection } from './../../../components/sections/partnersSection/PartnersSection';

export default function ServicesPage() {
  const params = useParams();
  const slug = params.slug as string;

  const service = servicesData.find(s => s.slug === slug);

  if (!service) return <p>Услуга не найдена</p>;

  return (
    <main className={styles.page}>
      <HeroBase
        title={service.title}
        description={service.description}
        img={service.img}
        video={false}
      />
      <section className={styles.page__about}>
        <ContentBlock
          title={service.title}
          description={service.subDesc}
          image={service.subImg}
          additionalText=''
        />
      </section>
      <DiscussSection />
      <Advantages />
      <Projects />
      <CertificatesSection />
      <PartnersSection />
    </main>
  );
}

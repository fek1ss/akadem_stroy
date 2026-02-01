import styles from './styles.module.scss';
import { ContentBlock } from './../../ui/contentBlock/ContentBlock';
import { aboutUs } from '@/data';

export function AboutUs() {
  return (
    <section className={styles.aboutUs}>
      <ContentBlock
        title={aboutUs.title}
        description={aboutUs.description}
        image={aboutUs.image}
        additionalText={aboutUs.additionalText}
      />
    </section>
  );
}

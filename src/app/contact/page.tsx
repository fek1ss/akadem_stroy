'use client';

import styles from './styles.module.scss';
import HeroBase from '@/components/ui/heroBase/HeroBase';
import { MapBlock } from '@/components/sections/contacts/MapBlock';
import { ContactCard } from '@/components/sections/contacts/ContactCard';
import { contacts } from '@/data';
import { DiscussSection } from '../../components/sections/discussSection/DiscussSection';

export default function Page() {
  return (
    <div className={styles.page}>
      <HeroBase
        title='Контакты'
        description='Информация для связи'
        img='/images/contentBlock/form.png'
        video={false}
      />

      <section className={styles.contacts}>
        {contacts.map((item, index) => {
          // Определяем четность для шахматного порядка на десктопе
          const isEven = index % 2 === 0;

          return (
            <div key={item.id} className={styles.row}>
              {isEven ? (
                <>
                  <MapBlock src={item.mapSrc} />
                  <ContactCard {...item} />
                </>
              ) : (
                <>
                  <ContactCard {...item} />
                  <MapBlock src={item.mapSrc} />
                </>
              )}
            </div>
          );
        })}
      </section>
      <DiscussSection />
    </div>
  );
}

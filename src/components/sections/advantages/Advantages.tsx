'use client';
import styles from './styles.module.scss';
import { advantages } from '@/data/advantages';
import { AdvantageCard } from '@/components/ui/advantageCard/AdvantageCard';
import { Title } from './../../ui/title/Title';

export function Advantages() {
  return (
    <div className={styles.advantages}>
      <Title text='НАШИ ПРЕИМУЩЕСТВА' color='#000' />
      <div className={styles.advantages__list}>
        {advantages.map(adv => (
          <AdvantageCard
            key={adv.img}
            title={adv.title}
            description={adv.description}
            img={adv.img}
          />
        ))}
      </div>
    </div>
  );
}

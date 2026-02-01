'use client';
import styles from './styles.module.scss';
import { Line } from './../../ui/line/Line';
import { advantages } from '@/data/advantages';
import { AdvantageCard } from '@/components/ui/advantageCard/AdvantageCard';

export function Advantages() {
  return (
    <div className={styles.advantages}>
      <h1 className={styles.advantages__title}>Наши преимущества</h1>
      <Line />
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

'use client'

import { DiscussForm } from '@/components/ui/discussForm/DiscussForm';
import styles from './styles.module.scss';
import { Title } from './../../ui/title/Title';
import { motion } from 'framer-motion';

export function DiscussSection() {
  return (
    <section className={styles.wrapper} id='discuss'>
      <div className={styles.overlay} />

      <div className={styles.container}>
        <motion.div
          className={styles.left}
          initial={{ x: -150, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <Title text='ОБСУДИТЬ ПРОЕКТ' color='#fff' />
          <p className={styles.text}>
            Создание качественного проекта
            <br />
            начинается с заполнения формы.
          </p>
        </motion.div>

        <DiscussForm />
      </div>
    </section>
  );
}

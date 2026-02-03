import { DiscussForm } from '@/components/ui/discussForm/DiscussForm';
import styles from './styles.module.scss';
import { Title } from './../../ui/title/Title';

export function DiscussSection() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.overlay} />

      <div className={styles.container}>
        <div className={styles.left}>
          <Title text='ОБСУДИТЬ ПРОЕКТ' color='#fff' />
          <p className={styles.text}>
            Создание качественного проекта
            <br />
            начинается с заполнения формы.
          </p>
        </div>

        <DiscussForm />
      </div>
    </section>
  );
}

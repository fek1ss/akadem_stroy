import styles from './styles.module.scss';
import HeroBase from './../../components/ui/heroBase/HeroBase';

export default function Page() {
  return (
    <div className={styles.page}>
      <HeroBase
        title='Контакты'
        description='Информация для связи'
        img='/images/contentBlock/form.png'
        video={false}
      />
    </div>
  );
}

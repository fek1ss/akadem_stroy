import styles from './MapBlock.module.scss';

type Props = {
  src: string;
};

export function MapBlock({ src }: Props) {
  return (
    <div className={styles.map}>
      <iframe
        src={src}
        width="100%"
        height="100%"
        frameBorder="0"
        allowFullScreen
      />
    </div>
  );
}

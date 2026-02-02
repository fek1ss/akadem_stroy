import { TitleProps } from "@/types/title";
import styles from './styles.module.scss';
import { Line } from './../line/Line';

export function Title({text}:TitleProps) {
  return (
    <div className={styles.titleContainer}>
      <h1 className={styles.title}>
        {text}
      </h1>
      <Line />
    </div>
  )
}
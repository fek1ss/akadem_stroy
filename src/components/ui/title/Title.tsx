import { TitleProps } from "@/types/title";
import styles from './styles.module.scss';
import { Line } from './../line/Line';

export function Title({text, color}:TitleProps) {
  return (
    <div className={styles.titleContainer}>
      <h1 className={styles.title} style={{color: color}}>
        {text}
      </h1>
      <Line />
    </div>
  )
}
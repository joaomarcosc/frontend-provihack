import css from './styles.module.scss';
import { ReactNode } from 'react';
import { ReactComponent as ArrowSvg } from 'assets/icons/arrow.svg';
interface IProps {
  icon: ReactNode | undefined;
  title: string;
  description: string;
}

export function Card({ icon, title, description }: IProps) {
  return (
    <section className={css.cardRecycleWrapper}>
      <div className={css.icon}>{icon}</div>
      <div className={css.infosCard}>
        <h3>{title}</h3>
        <div className={css.descriptionWithLogo}>
          <p>{description}</p>
          <ArrowSvg />
        </div>
      </div>
    </section>
  );
}

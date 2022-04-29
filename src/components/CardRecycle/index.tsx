import css from './styles.module.scss';
import { InputHTMLAttributes, ReactNode } from 'react';
import { ReactComponent as ArrowSvg } from 'assets/icons/arrow.svg';
interface IProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export function CardRecycle({ icon, title, description }: IProps) {
  return (
    <section className={css.cardRecycleWrapper}>
      <div>{icon}</div>
      <div>
        <h3>{title}</h3>
        <div className={css.descriptionWithLogo}>
          <p>{description}</p>
          <ArrowSvg />
        </div>
      </div>
    </section>
  );
}

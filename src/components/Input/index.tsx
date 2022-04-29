import { InputHTMLAttributes, ReactNode } from 'react';
import cln from 'classnames';
import css from './styles.module.scss';

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: ReactNode;
}

export function Input(props: IProps) {
  const { icon } = props;

  return (
    <section className={css.inputWrapper}>
      <p className={css.icon}>{icon}</p>
      <input
        className={cln(css.input, { [css.hasIcon]: icon })}
        icon={icon}
        {...props}
      />
    </section>
  );
}

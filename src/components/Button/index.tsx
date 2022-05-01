import { ButtonHTMLAttributes, PropsWithChildren } from 'react';
import cln from 'classnames';
import css from './styles.module.scss';

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  fullwidth?: 'true' | 'false';
  theme?: 'secondary' | 'primary';
  size?: 'small' | 'medium';
}
export function Button(props: PropsWithChildren<IProps>) {
  const { theme = 'primary', size = 'medium' } = props;
  return (
    <button
      {...props}
      className={cln(css.button, props.className, {
        [css.fullWidth]: Boolean(props.fullwidth),
        [css.secondary]: theme === 'secondary',
        [css.primary]: theme === 'primary',
        [css.small]: size === 'small',
        [css.medium]: size === 'medium'
      })}
    >
      {props.children}
    </button>
  );
}

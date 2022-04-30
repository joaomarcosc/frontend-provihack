import { ButtonHTMLAttributes } from 'react';
import css from './styles.module.scss';

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  nome: string;
}
export function Button(props: IProps) {
  return (
    <button {...props} className={`${css.button} ${props.className}`}>
      {props.nome}
    </button>
  );
}

import css from './styles.module.scss';
import { InputHTMLAttributes } from 'react';

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  nome: string;
}
export function Button(props: IProps) {
  return <button>{props.nome}</button>;
}

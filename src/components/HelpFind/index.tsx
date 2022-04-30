import { Button } from 'components/Button';
import css from './styles.module.scss';
interface Iprops {
  onClick: () => void;
}
export function HelpFind(props: Iprops) {
  return (
    <div className={css.infoContainer}>
      <p className={css.title}>Como sugerir um estabelecimento?</p>
      <p className={css.text}>
        <span className={css.title}>{' Resposta: '}</span>
        {` Você pode preencher um formulário para nossa equipe verificar o local.`}{' '}
      </p>
      <Button onClick={props.onClick} nome="Ir para o formulário" />
    </div>
  );
}

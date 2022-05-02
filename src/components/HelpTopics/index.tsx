import css from './styles.module.scss';
import { ReactComponent as EnterSvg } from '../../assets/icons/arrow.svg';

interface Iprops {
  onClickSugest?: () => void;
  onClickSuport?: () => void;
}

export function HelpTopics(props: Iprops) {
  return (
    <section className={css.infoContainer}>
      <p className={css.title}>Principais tópicos:</p>

      <div onClick={props.onClickSugest} className={css.topicContainer}>
        <p className={css.text}>Formulário para sugestão de estabelecimento.</p>
        <p className={css.iconEnter}>{<EnterSvg />}</p>
      </div>

      <div onClick={props.onClickSuport} className={css.topicContainer}>
        <p className={css.text}>Como entrar em contato com o suporte?</p>
        <p className={css.iconEnter}>{<EnterSvg />}</p>
      </div>
    </section>
  );
}

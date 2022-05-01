import css from './styles.module.scss';
import { ReactComponent as EnterSvg } from '../../assets/icons/arrow.svg';

export function HelpTopics() {
  return (
    <section className={css.infoContainer}>
      <p className={css.title}>Principais tópicos:</p>
      <div className={css.topicContainer}>
        <p className={css.text}>
          Não encontrei nenhum estabelecimento na minha cidade, e agora?
        </p>
        <p className={css.iconEnter}>{<EnterSvg />}</p>
      </div>

      <div className={css.topicContainer}>
        <p className={css.text}>Como sugerir um estabelecimento?</p>
        <p className={css.iconEnter}>{<EnterSvg />}</p>
      </div>
      <div className={css.topicContainer}>
        <p className={css.text}>Como entrar em contato com o suporte?</p>
        <p className={css.iconEnter}>{<EnterSvg />}</p>
      </div>
    </section>
  );
}

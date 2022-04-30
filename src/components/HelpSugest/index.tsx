import css from './styles.module.scss';
interface Iprops {
  onClick: () => void;
}
export function HelpSugest(props: Iprops) {
  return (
    <div className={css.infoContainer}>
      <p className={css.title}>
        Não encontrei nenhum estabelecimento na minha cidade, e agora?
      </p>
      <p className={css.text}>
        <span className={css.title}>{' Resposta: '}</span>
        {`você pode entrar em contato com o nosso suporte e solicitar um
         novo estabelecimento`}{' '}
        <span onClick={props.onClick} className={css.link}>
          {'aqui.'}
        </span>
      </p>
    </div>
  );
}

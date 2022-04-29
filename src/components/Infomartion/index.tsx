import css from './styles.module.scss';

interface IProps {
  title: string;
  firstSubTitle: string;
  firstInfo: string;
  secondSubTitle: string;
  secondInfo: string;
  thirdSubTitle: string;
  thirdInfo: string;
}

export function Info(props: IProps) {
  return (
    <div className={css.infoContainer}>
      <p className={css.infoTitle}>{props.title}</p>
      <div className={css.detailsEstab}>
        <p className={css.infoText}>
          <span className={css.infoFix}>{props.firstSubTitle}</span>
          {props.firstInfo}
        </p>
      </div>
      <div className={css.detailsEstab}>
        <p className={css.infoText}>
          <span className={css.infoFix}>{props.secondSubTitle}</span>
          {props.secondInfo}
        </p>
      </div>
      <div className={css.detailsEstab}>
        <p className={css.infoText}>
          <span className={css.infoFix}>{props.thirdSubTitle}</span>
          {props.thirdInfo}
        </p>
      </div>
    </div>
  );
}

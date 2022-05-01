import css from './styles.module.scss';

interface IProps {
  title: string;
  firstSubTitle: string;
  firstInfo: string | string[];
  secondSubTitle: string;
  secondInfo: string;
  thirdSubTitle: string;
  thirdInfo: string;
  infoState?: string;
}

export function Info(props: IProps) {
  return (
    <section className={css.infoContainer}>
      <p className={css.infoTitle}>{props.title}</p>
      <p className={css.sectionInfo}>
        <span className={css.infoHighlight}>{props.firstSubTitle}</span>
        {typeof props.firstInfo === 'string'
          ? props.firstInfo
          : props.firstInfo.join(', ')}
      </p>

      <p className={css.sectionInfo}>
        <span className={css.infoHighlight}>{props.secondSubTitle}</span>
        {props.secondInfo}
        {props.infoState}
      </p>

      <p className={css.sectionInfo}>
        <span className={css.infoHighlight}>{props.thirdSubTitle}</span>
        {props.thirdInfo}
      </p>
    </section>
  );
}

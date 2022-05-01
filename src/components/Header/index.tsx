import css from './styles.module.scss';
import { ReactComponent as ArrowSvg } from 'assets/icons/arrow.svg';
import { useNavigate } from 'react-router-dom';

interface IProps {
  name: string;
  navigateTo: string;
  routeArrayPos: string[];
}

export function Header({ name, navigateTo, routeArrayPos }: IProps) {
  const navigate = useNavigate();
  return (
    <section className={css.headerWrapper}>
      <section className={css.headerMain}>
        <button
          className={css.headerButtonBack}
          onClick={() => navigate(navigateTo)}
        >
          <ArrowSvg />
          <p>{name}</p>
        </button>
      </section>
      <p className={css.routePositions}>{routeArrayPos.join(' > ')}</p>
    </section>
  );
}

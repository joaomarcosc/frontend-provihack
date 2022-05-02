import { ReactComponent as ArrowSvg } from 'assets/icons/arrow.svg';
import { ReactComponent as LogoCard } from 'assets/icons/logo-card.svg';

import css from './styles.module.scss';
interface IProps {
  company: string;
  city: string;
  state: string;
  onClick: () => void;
}

export function CompanyCard({ company, city, state, onClick }: IProps) {
  return (
    <section className={css.companyCardWrapper} onClick={onClick}>
      <section className={css.cardCompanyContent}>
        <div className={css.logo}>
          <LogoCard />
        </div>
        <div>
          <p className={css.company}>{company}</p>
          <p className={css.cityAndState}>
            {city}, {state}
          </p>
        </div>
      </section>

      <ArrowSvg />
    </section>
  );
}

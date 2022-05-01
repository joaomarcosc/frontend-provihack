import { ReactComponent as ArrowSvg } from 'assets/icons/arrow.svg';

interface IProps {
  company: string;
  city: string;
  state: string;
}

export function CompanyCard({ company, city, state }: IProps) {
  return (
    <section>
      <section>
        <div></div>
        <p>{company}</p>
        <p>
          <span>{city}</span>
          <span>{state}</span>
        </p>
      </section>

      <ArrowSvg />
    </section>
  );
}

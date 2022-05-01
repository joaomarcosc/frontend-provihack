import css from './styles.module.scss';
import { ReactComponent as BackSvg } from '../../assets/icons/back-icon.svg';
import { HelpTopics } from 'components/HelpTopics';
import { HelpSugest } from 'components/HelpSugest';
import { HelpFind } from 'components/HelpFind';

export default function HelpPage() {
  return (
    <section>
      <div className={css.header}>
        <p className={css.iconHeader}>{<BackSvg />}</p>
        <p className={css.title}>{'Ajuda'}</p>
      </div>
      <p className={css.menuText}>{'Início > Ajuda'}</p>
      <HelpFind />
    </section>
  );
}

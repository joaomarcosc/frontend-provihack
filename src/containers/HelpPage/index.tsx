import { Header } from 'components/Header';
import { HelpTopics } from 'components/HelpTopics';
import css from './styles.module.scss';

export default function HelpPage() {
  return (
    <section className={css.helpViewWrapper}>
      <Header name="Ajuda" routeArrayPos={['Início', 'Ajuda']} navigateTo="/" />
      <HelpTopics />
    </section>
  );
}

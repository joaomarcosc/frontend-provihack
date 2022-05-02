import { Header } from 'components/Header';
import { HelpTopics } from 'components/HelpTopics';
import { useNavigate } from 'react-router-dom';
import css from './styles.module.scss';

export default function HelpPage() {
  const navigate = useNavigate();

  return (
    <section className={css.helpViewWrapper}>
      <Header
        name="Ajuda"
        routeArrayPos={['Início', 'Ajuda']}
        navigateTo="/tipos-de-materiais"
      />
      <HelpTopics
        onClickSugest={() => navigate('/submeter-sugestao')}
        onClickSuport={() => navigate('/suporte')}
      />
    </section>
  );
}

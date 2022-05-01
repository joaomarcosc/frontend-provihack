<<<<<<< HEAD
import { Header } from 'components/Header';
import { HelpTopics } from 'components/HelpTopics';
import { useNavigate } from 'react-router-dom';
import css from './styles.module.scss';
=======
import css from './styles.module.scss';
import { ReactComponent as BackSvg } from '../../assets/icons/back-icon.svg';
import { HelpFind } from 'components/HelpFind';
>>>>>>> origin

export default function HelpPage() {
  const navigate = useNavigate();

  return (
    <section className={css.helpViewWrapper}>
      <Header name="Ajuda" routeArrayPos={['Início', 'Ajuda']} navigateTo="/" />
      <HelpTopics
        onClickSugest={() => navigate('submeter-sugestao')}
        onClickSuport={() => navigate('form')}
      />
    </section>
  );
}

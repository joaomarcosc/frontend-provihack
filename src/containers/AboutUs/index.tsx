import css from './styles.module.scss';
import { Header } from 'components/Header';

export default function AboutUs() {
  return (
    <section className={css.AboutUsWrapper}>
      <Header
        name="Sobre nós"
        routeArrayPos={['Início', 'Sobre nós']}
        navigateTo="/tipos-de-materiais"
      />
      <div className={css.AboutContainer}>
        <p className={css.title}>Sobre nós</p>
        <p className={css.text}>
          Somos uma vitrine, buscamos facilitar a conexão entre pessoas que
          desejam fazer descartes de materiais recicláveis e
          empresas/estabelecimentos que recebem e reaproveitam esses materiais.
          Queremos um planeta Terra mais sutentável, pois não existe planeta B!
        </p>
      </div>
    </section>
  );
}

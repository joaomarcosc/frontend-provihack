import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as RecycleSvg } from 'assets/icons/recycle-icon.svg';
import { ReactComponent as EarthSvg } from 'assets/icons/earth-icon.svg';
import { ReactComponent as ArrowSvg } from 'assets/icons/arrow.svg';
import { Carousel } from 'components/Carousel';
import { carouselListInfo } from './carouseListInfo';
import css from './styles.module.scss';
import cln from 'classnames';
import { useStores } from 'stores';

export default function Presentation() {
  const {
    counterStore: { currentIndex }
  } = useStores();
  const [step, setStep] = useState<number>(1);
  const navigate = useNavigate();

  return (
    <section
      className={cln(css.apresentationWrapper, {
        [css.secondStep]: step === 2
      })}
    >
      {step === 1 && (
        <>
          <EarthSvg className={css.topRight} />
          <EarthSvg className={css.topBottom} />
          <EarthSvg className={css.leftCenter} />

          <section className={css.stepOneInfo}>
            <RecycleSvg />
            <h3 className={css.presentationTitle}>Eu Reciclo</h3>
            <p className={css.presentationDescription}>Não existe planeta B!</p>
          </section>

          <section>
            <h3 className={css.secondaryTitle}>Seja bem-vindo(a)!</h3>
            <button className={css.button} onClick={() => setStep(2)}>
              Avançar
            </button>
          </section>
        </>
      )}

      {step === 2 && (
        <section className={css.secondStepSection}>
          <button className={css.backToFirstStep} onClick={() => setStep(1)}>
            <ArrowSvg /> Voltar
          </button>
          <Carousel slides={carouselListInfo} delay={4000} />
          <section>
            {currentIndex < carouselListInfo.length - 1 ? (
              <button
                className={css.button}
                onClick={() => navigate('tipos-de-materiais')}
              >
                Pular introdução
              </button>
            ) : (
              <button
                className={css.nextPage}
                onClick={() => navigate('tipos-de-materiais')}
              >
                Avançar
              </button>
            )}
          </section>
        </section>
      )}
    </section>
  );
}

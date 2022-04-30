import { useState } from 'react';
import { ReactComponent as RecycleSvg } from 'assets/icons/recycle-icon.svg';
import { ReactComponent as EarthSvg } from 'assets/icons/earth-icon.svg';
import { ReactComponent as ArrowSvg } from 'assets/icons/arrow.svg';
import css from './styles.module.scss';
import cln from 'classnames';
import { Carousel } from 'components/Carousel';
import { carouselListInfo } from './carouseListInfo';

export default function Presentation() {
  const [step, setStep] = useState<number>(1);

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

          <section>
            <RecycleSvg />
            <h3 className={css.presentationTitle}>Eu Reciclo</h3>
            <p className={css.presentationDescription}>Não existe plano B</p>
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
            <button className={css.button}>Pular introdução</button>
          </section>
        </section>
      )}
    </section>
  );
}

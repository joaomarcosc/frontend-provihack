import cln from 'classnames';
import { ICarouselInfoList } from 'containers/Presentation/carouseListInfo';
import { ReactComponent as ArrowSvg } from 'assets/icons/arrow.svg';
import { useStores } from 'stores';

import css from './styles.module.scss';

interface IProps {
  slides: ICarouselInfoList[];
  delay: number;
}

export function Carousel({ slides }: IProps) {
  const {
    counterStore: { currentIndex, setCurrentIndex }
  } = useStores();

  return (
    <section className={css.carouselWrapper}>
      <div className={css.image}>{slides[currentIndex].image}</div>
      <p className={css.description}>{slides[currentIndex].description}</p>

      <section className={css.bottomBar}>
        {currentIndex > 0 && (
          <ArrowSvg
            className={css.arrowLeft}
            onClick={() => {
              if (currentIndex > 0) {
                setCurrentIndex(currentIndex - 1);
              }
            }}
          />
        )}
        {slides.map((_, index) => (
          <button
            key={`slide-${index}`}
            title={`slide-${index}`}
            className={cln({ [css.active]: index === currentIndex })}
            onClick={() => setCurrentIndex(index)}
          ></button>
        ))}
        {currentIndex < slides.length - 1 && (
          <ArrowSvg
            className={css.arrowRight}
            onClick={() => {
              if (currentIndex < slides.length - 1) {
                setCurrentIndex(currentIndex + 1);
              }
            }}
          />
        )}
      </section>
    </section>
  );
}

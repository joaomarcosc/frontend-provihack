import cln from 'classnames';
import { ICarouselInfoList } from 'containers/Presentation/carouseListInfo';
import { useEffect, useState } from 'react';
import css from './styles.module.scss';

interface IProps {
  slides: ICarouselInfoList[];
  delay: number;
}

export function Carousel({ slides, delay }: IProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    function changeSlide() {
      const nextIndex = currentIndex + 1;

      setCurrentIndex(nextIndex > slides.length - 1 ? 0 : nextIndex);
    }

    const timeout = setTimeout(changeSlide, delay);

    return () => clearTimeout(timeout);
  }, [currentIndex, slides, delay]);

  return (
    <section className={css.carouselWrapper}>
      <div className={css.image}>{slides[currentIndex].image}</div>
      <p className={css.description}>{slides[currentIndex].description}</p>

      <section className={css.bottomBar}>
        {slides.map((_, index) => (
          <button
            key={`slide-${index}`}
            title={`slide-${index}`}
            className={cln({ [css.active]: index === currentIndex })}
            onClick={() => setCurrentIndex(index)}
          ></button>
        ))}
      </section>
    </section>
  );
}

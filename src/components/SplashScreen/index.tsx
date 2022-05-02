import { ReactComponent as RecycleIcon } from 'assets/icons/recycle-icon.svg';
import css from './styles.module.scss';

export function SplashScreen() {
  return (
    <section className={css.splashScreen}>
      <RecycleIcon />
    </section>
  );
}

import { useState } from 'react';
import { ReactComponent as RecycleIcon } from 'assets/icons/recycle-icon.svg';
import { ReactComponent as CloseIcon } from 'assets/icons/close.svg';
import { ReactComponent as InfoIcon } from 'assets/icons/info-icon.svg';
import { ReactComponent as FloaterIcon } from 'assets/icons/floater-icon.svg';
import css from './styles.module.scss';
import cln from 'classnames';

export default function RecycleTypes() {
  const [open, setOpen] = useState(false);
  return (
    <section className={css.recycleWrapper}>
      <header className={css.header}>
        <p>
          <RecycleIcon /> Eu reciclo
        </p>

        <button className={css.menuHamburgerIcon} onClick={() => setOpen(true)}>
          <div />
          <div />
          <div />
        </button>
      </header>
      <section className={cln(css.menu, { [css.open]: open })}>
        <section className={css.menuHeader}>
          <button
            className={css.menuCloseHamburger}
            onClick={() => setOpen(false)}
          >
            <CloseIcon />
          </button>
        </section>

        <section className={css.navbar}>
          <p>
            <InfoIcon />
            Sobre nós
          </p>
          <p>
            <FloaterIcon />
            Preciso de ajuda
          </p>
        </section>
      </section>
    </section>
  );
}

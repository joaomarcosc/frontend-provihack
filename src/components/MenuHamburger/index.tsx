import { Dispatch, ReactNode, SetStateAction } from 'react';
import { ReactComponent as CloseIcon } from 'assets/icons/close.svg';
import cln from 'classnames';
import css from './styles.module.scss';
import { useNavigate } from 'react-router-dom';

interface IProps {
  options: Array<{
    icon: ReactNode;
    title: string;
    navigateTo: string;
  }>;
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

export function MenuHamburger({ options, open, setOpen }: IProps) {
  const navigate = useNavigate();
  return (
    <section className={css.menuHamburgerWrapper}>
      <button className={css.menuHamburgerIcon} onClick={() => setOpen(true)}>
        <div />
        <div />
        <div />
      </button>
      <section className={css.backdrop}>
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
            {options?.map((item, index) => (
              <p onClick={() => navigate(item.navigateTo)} key={index}>
                {item.icon} {item.title}
              </p>
            ))}
          </section>
        </section>
      </section>
    </section>
  );
}

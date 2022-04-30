import { Dispatch, SetStateAction, PropsWithChildren } from 'react';
import css from './styles.module.scss';
import cln from 'classnames';

export interface IProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

export function Modal({ open, setOpen, children }: PropsWithChildren<IProps>) {
  return (
    <section
      className={cln(css.modalWrapper, { [css.open]: open })}
      onClick={() => setOpen(false)}
    >
      <section className={css.modal} onClick={(e) => e.stopPropagation()}>
        {children}
      </section>
    </section>
  );
}

import { forwardRef, InputHTMLAttributes } from 'react';
import cln from 'classnames';

import style from './styles.module.scss';

interface IDropdown {
  value: string;
  name: string;
}

export interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode;
  position?: 'left' | 'right';
  inputSize?: 'small' | 'medium' | 'large';
  fullwidth?: 'true' | 'false';
  label?: string;
  dropdownItems?: IDropdown[];
}

const Input = forwardRef<HTMLInputElement, IProps>((props: IProps, ref) => {
  const { name, label, className, inputSize, icon, fullwidth } = props;

  const classNamesList = [
    style.input,
    { [style.fullWidth]: Boolean(fullwidth) },
    className
  ];

  return (
    <section className={cln(classNamesList)}>
      <label htmlFor={name} className={style.label}>
        {label}
      </label>
      <div className={cln({ [style.icon]: icon })}>
        <div>{icon}</div>
        <input
          {...props}
          className={cln(style[inputSize ?? 'medium'])}
          ref={ref}
        />
      </div>
    </section>
  );
});

Input.displayName = 'Input';

export default Input;

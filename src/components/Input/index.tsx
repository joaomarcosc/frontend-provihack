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
  fullwidth?: boolean;
  label?: string;
  dropdownItems?: IDropdown[];
}

const Input = forwardRef<HTMLInputElement, IProps>((props: IProps, ref) => {
  const {
    placeholder,
    type,
    name,
    label,
    className,
    inputSize,
    icon,
    fullwidth,
    onClick,
    onChange,
    value,
    required,
    readOnly,
    disabled
  } = props;

  const classNamesList = [
    style.input,
    { [style.fullWidth]: fullwidth },
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
          id={name}
          value={value}
          placeholder={placeholder}
          type={type}
          ref={ref}
          onClick={onClick}
          onChange={onChange}
          className={cln(style[inputSize ?? 'medium'])}
          required={required}
          readOnly={readOnly}
          disabled={disabled}
        />
      </div>
    </section>
  );
});

Input.displayName = 'Input';

export default Input;

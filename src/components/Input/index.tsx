import { InputHTMLAttributes, ReactNode } from 'react';
import { Container, CustomInput, Icon } from './styles';

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: ReactNode;
}

export function Input(props: IProps) {
  const { icon } = props;

  return (
    <Container>
      <Icon>{icon}</Icon>
      <CustomInput icon={icon} {...props} />
    </Container>
  );
}

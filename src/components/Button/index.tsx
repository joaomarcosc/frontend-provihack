import { ButtonHTMLAttributes } from "react";
import { Container } from "./styles";

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: string;
}

export function Button(props: IProps) {
  const { children } = props;

  return <Container {...props}>{children}</Container>;
}

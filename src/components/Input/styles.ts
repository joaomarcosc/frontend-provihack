import { ReactNode } from 'react';
import styled from 'styled-components';

interface IInput {
  icon?: ReactNode;
}

export const Container = styled.section`
  position: relative;
  align-items: center;
  justify-content: center;
  width: fit-content;
  border-radius: 12px;
  padding: 15px 20px;
  box-shadow: 0px 4px 15px rgba(13, 38, 1, 0.13);
  border-radius: 12px;
`;

export const CustomInput = styled.input<IInput>`
  border: none;
  border-radius: 12px;
  outline: none;
  font-size: 16px;
  font-weight: 500;
  color: 000;

  &::placeholder {
    color: #999999;
  }

  ${(props) =>
    props.icon &&
    `
    padding-left: 26px
  `}
`;

export const Icon = styled.p`
  font-size: 19px;
  color: #999999;
  margin: 0;
  position: absolute;
  top: 0;
  transform: translateY(50%);
`;

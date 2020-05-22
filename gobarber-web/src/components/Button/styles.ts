import { shade } from 'polished';
import styled, { css } from 'styled-components';

interface ButtonProps {
  loading?: number;
}

export const BtnContainer = styled.button<ButtonProps>`
  background: #ff9000;
  height: 56px;
  border-radius: 10px;
  border: 0;
  padding: 0 16px;
  color: #312e38;
  width: 100%;
  font-weight: 500;
  margin-top: 16px;
  transition: all 0.2s;

  display: flex;
  justify-content: center;
  align-items: center;

  ${(props) =>
    props.loading &&
    css`
      opacity: 0.6;
      cursor: initial;
    `}

  ${(props) =>
    !props.loading &&
    css`
      &:hover {
        background: ${shade(0.2, '#ff9000')};
      }
    `}
`;

import React, { ButtonHTMLAttributes } from 'react';

import { BtnContainer } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = ({ children, ...rest }) => {
  return (
    <BtnContainer type="button" {...rest}>
      {children}
    </BtnContainer>
  );
};

export default Button;

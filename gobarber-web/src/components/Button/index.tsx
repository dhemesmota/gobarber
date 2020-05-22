import React, { ButtonHTMLAttributes } from 'react';

import { BtnContainer } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  loading?: boolean;
};

const Button: React.FC<ButtonProps> = ({ children, loading, ...rest }) => {
  return (
    <BtnContainer type="button" {...rest}>
      {loading ? 'Carregando...' : children}
    </BtnContainer>
  );
};

export default Button;

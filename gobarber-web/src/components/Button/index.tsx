import React, { ButtonHTMLAttributes } from 'react';
import ReactLoading from 'react-loading';

import { BtnContainer } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  loading?: boolean;
};

const Button: React.FC<ButtonProps> = ({ children, loading, ...rest }) => {
  return (
    <BtnContainer
      loading={Number(loading)}
      disabled={loading}
      type="button"
      {...rest}
    >
      {loading ? (
        <ReactLoading type="bubbles" height="100%" width={56} />
      ) : (
        children
      )}
    </BtnContainer>
  );
};

export default Button;

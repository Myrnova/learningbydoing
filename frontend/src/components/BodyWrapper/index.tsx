import React, { ReactNode } from 'react';
import { Container } from './styles';


interface IProps {
    children: ReactNode;
}

const BodyWrapper = ({children}: IProps) => {
  return (
      <div>
        <Container>{children}</Container>
      </div>
  );
};

export default BodyWrapper;

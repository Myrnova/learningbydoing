import React, { ReactNode } from 'react';


interface IProps {
    children: ReactNode;
}

const BodyWrapper = ({children}: IProps) => {
  return (
      <div className="relative min-h-screen">
        <main className="w-full min-h-screen">{children}</main>
      </div>
  );
};

export default BodyWrapper;

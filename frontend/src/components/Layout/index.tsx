import React, { ReactNode } from "react";
import BodyWrapper from "../BodyWrapper";
import Navbar from "../Navbar";
import { Container } from "./styles";

interface IProps {
    children: ReactNode;
}

export const DashboardLayout = ({ children }: IProps) => {
  return (
    <BodyWrapper>
      <div className="flex h-screen bg-gray-200" style={{backgroundColor: "rgba(243, 244, 246, 1)"}}>
        <Navbar />
        <Container className="flex flex-col flex-1 overflow-hidden">
        {children}  
          
        </Container>
      </div>
    </BodyWrapper>
  );
};

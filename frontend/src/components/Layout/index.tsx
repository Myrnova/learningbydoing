import React, { ReactNode } from "react";
import BodyWrapper from "../BodyWrapper";
import Navbar from "../Navbar";

interface IProps {
    children: ReactNode;
}

export const DashboardLayout = ({ children }: IProps) => {
  return (
    <BodyWrapper>
      <div className="flex h-screen bg-gray-200">
        <Navbar />

        <div className="flex flex-col flex-1 overflow-hidden">
          <main className="content">
            <section className="sm:flex-row flex flex-col flex-1">
              <div
                className="content-box"
                style={{ flexGrow: 2, flexBasis: "0%" }}
              >
                {children}
              </div>
            </section>
          </main>
        </div>
      </div>
    </BodyWrapper>
  );
};

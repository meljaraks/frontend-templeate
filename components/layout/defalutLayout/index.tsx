import { FC, ReactElement } from "react";

const DefaultLayout: FC<any> = ({ children }) => {
  return (
    <>
      <div>헤더</div>
      {children}
    </>
  );
};

export default DefaultLayout;

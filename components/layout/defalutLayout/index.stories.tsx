import { ComponentStory } from "@storybook/react";
import DefaultLayout from ".";
import { MainHeader } from "../../common/Headers/MainHeader";

export default {
  title: "Layout/defaultLayout",
  component: DefaultLayout,
};

export const view = ({ children }: any) => {
  return (
    <>
      <MainHeader />
      {children}
    </>
  );
};

import { ComponentStory } from "@storybook/react";
import Home from "../../pages/index";

export default {
  title: "Pages/Home",
  component: Home,
};

export const HomePage: ComponentStory<typeof Home> = (args) => (
  <Home {...args} />
);

HomePage.args = { name: "sam" };

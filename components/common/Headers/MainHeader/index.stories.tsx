import { ComponentMeta, ComponentStory } from "@storybook/react";
import { MainHeader } from ".";

export default {
  title: "Headers/Main_Header",
  component: MainHeader,
};

const Template: ComponentStory<typeof MainHeader> = (args) => (
  <MainHeader {...args} />
);

export const view = Template.bind({});
view.args = { name: "dd" };

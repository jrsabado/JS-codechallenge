import { Meta, StoryFn } from "@storybook/react";
import SettingsSelector from "./SettingsSelector";

interface SettingsSelectorProps {}

export default {
  title: "Modal/SettingsSelector",
  component: SettingsSelector,
  parameters: {
    layout: "centered",
  },
} as Meta;

const Template: StoryFn<SettingsSelectorProps> = (args) => <SettingsSelector {...args} />;

export const Default = Template.bind({});
Default.args = {};

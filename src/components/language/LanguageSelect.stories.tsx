import { Meta, StoryFn } from "@storybook/react";
import LanguageSelect from "./LanguageSelect";
import { Language } from '../settings/settingsContext';
import '../../../src/styles.css';

interface LanguageSelectProps {
  value?: Language;
  onChange?: (language: Language) => void;
}

export default {
  title: "Input/LanguageSelect",
  component: LanguageSelect,
  parameters: {
    layout: "centered",
  },
} as Meta;

const Template: StoryFn<LanguageSelectProps> = (args) => <LanguageSelect {...args} />;

export const Default = Template.bind({});
Default.args = {
  value: { code: 'en', name: 'English' }, // Default args if needed
  onChange: (language: Language) => console.log(language),
};

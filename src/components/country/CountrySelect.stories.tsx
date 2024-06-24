import { Meta, StoryFn } from "@storybook/react";
import CountrySelect from "./CountrySelect";
import { Country } from '../settings/settingsContext';
import '../../../src/styles.css';

// Define the type for CountrySelect props
interface CountrySelectProps {
  value?: Country;
  onChange?: (value: Country) => void;
}

// Settings
export default {
  title: "Input/CountrySelect",
  component: CountrySelect,
  parameters: {
    layout: "centered",
  },
} as Meta;

// Main Story
const Template: StoryFn<CountrySelectProps> = (args) => <CountrySelect {...args} />;

export const Default = Template.bind({});
Default.args = {
  value: { code: 'US', name: 'United States of America' }, // Default args if needed
  onChange: (value: Country) => console.log(value),
};

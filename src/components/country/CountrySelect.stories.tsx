import { Meta, StoryFn } from "@storybook/react";
import CountrySelect from "./CountrySelect";
import { Country } from '../settings/settingsContext';
import '../../../src/styles.css';

interface CountrySelectProps {
  value?: Country;
  onChange?: (value: Country) => void;
}

export default {
  title: "Input/CountrySelect",
  component: CountrySelect,
  parameters: {
    layout: "centered",
  },
} as Meta;

const Template: StoryFn<CountrySelectProps> = (args) => <CountrySelect {...args} />;

export const Default = Template.bind({});
Default.args = {
  value: { code: 'US', name: 'United States of America' }, 
  onChange: (value: Country) => console.log(value),
};

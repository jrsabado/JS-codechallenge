import { Meta, StoryFn } from "@storybook/react";
import CurrencySelect from "./CurrencySelect";
import { Currency } from '../settings/settingsContext';
import '../../../src/styles.css';

interface CurrencySelectProps {
  value?: Currency;
  onChange?: (currency: Currency) => void;
}

export default {
  title: "Input/CurrencySelect",
  component: CurrencySelect,
  parameters: {
    layout: "centered",
  },
} as Meta;

const Template: StoryFn<CurrencySelectProps> = (args) => <CurrencySelect {...args} />;

export const Default = Template.bind({});
Default.args = {
  value: { code: 'USD', name: 'US Dollar' }, // Default args if needed
  onChange: (currency: Currency) => console.log(currency),
};

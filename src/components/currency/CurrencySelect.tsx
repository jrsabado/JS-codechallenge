import React from 'react';
import CurrencyData from 'currency-codes/data';
import Select, { SingleValue, ActionMeta } from 'react-select';
import { Currency, DEFAULT_CURRENCY } from '../settings/settingsContext';

interface CurrencyOption {
  value: Currency;
  label: string;
}

interface CurrencySelectProps {
  value?: Currency;
  onChange?: (currency: Currency) => void;
}

const CurrencySelect = ({ value = DEFAULT_CURRENCY, onChange }: CurrencySelectProps) => {
  // Prepare data
  const options = CurrencyData.map(({ code, currency }: { code: string; currency: string }) => ({
    value: { code, name: currency },
    label: `${code} - ${currency}`,
  }));

  const defaultValue = value ? { value, label: `${value.code} - ${value.name}` } : null;

  const handleChange = (
    newValue: SingleValue<CurrencyOption>,
    _actionMeta: ActionMeta<CurrencyOption>
  ) => {
    if (newValue) {
      onChange?.(newValue.value);
    }
  };

  return (
    <div>
      <label>
        Currency
        <Select
          options={options}
          defaultValue={defaultValue}
          onChange={(newValue, actionMeta) => handleChange(newValue as SingleValue<CurrencyOption>, actionMeta)}
        />
      </label>
    </div>
  );
};

export default CurrencySelect;

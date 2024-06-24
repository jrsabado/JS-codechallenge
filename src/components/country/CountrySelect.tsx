import React from 'react';
import countries from 'i18n-iso-countries';
import Select, { SingleValue, ActionMeta } from 'react-select';
import { CountrySelectOption, CountrySelectSingleValue } from './CountrySelectOption';
import { Country } from '../settings/settingsContext';

countries.registerLocale(require('i18n-iso-countries/langs/en.json'));

interface CountryOption {
  value: Country;
  label: string;
}

interface CountrySelectProps {
  value?: Country;
  onChange?: (value: Country) => void;
}

const CountrySelect = ({ value, onChange }: CountrySelectProps) => {
  const options = Object.entries(countries.getNames('en', { select: 'official' })).map(([code, name]) => ({
    value: { code, name },
    label: name,
  }));

  const defaultValue = value ? { value, label: value.name } : null;

  const handleChange = (
    newValue: SingleValue<CountryOption>,
    _actionMeta: ActionMeta<CountryOption>
  ) => {
    if (newValue) {
      onChange?.(newValue.value);
    }
  };

  return (
    <div>
      <label>
        Country
        <Select
          options={options}
          components={{
            Option: CountrySelectOption,
            SingleValue: CountrySelectSingleValue,
          }}
          defaultValue={defaultValue}
          onChange={(newValue, actionMeta) => handleChange(newValue as SingleValue<CountryOption>, actionMeta)}
        />
      </label>
    </div>
  );
};

export default CountrySelect;

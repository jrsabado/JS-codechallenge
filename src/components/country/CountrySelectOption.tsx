import React from 'react';
import { OptionProps, SingleValueProps, components } from 'react-select';

interface CountryOption {
  value: {
    code: string;
    name: string;
  };
  label: string;
}

const CountrySelectOption = (props: OptionProps<CountryOption>) => {
  const { data } = props;
  const { code, name } = data.value;

  return (
    <components.Option {...props}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img
          src={`https://catamphetamine.gitlab.io/country-flag-icons/3x2/${code}.svg`}
          alt={`Flag of ${name}`}
          style={{ width: '20px', height: '15px', marginRight: '8px' }}
        />
        {name}
      </div>
    </components.Option>
  );
};

const CountrySelectSingleValue = (props: SingleValueProps<CountryOption>) => {
  const { data } = props;
  const { code, name } = data.value;

  return (
    <components.SingleValue {...props}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img
          src={`https://catamphetamine.gitlab.io/country-flag-icons/3x2/${code}.svg`}
          alt={`Flag of ${name}`}
          style={{ width: '20px', height: '15px', marginRight: '8px' }}
        />
        {name}
      </div>
    </components.SingleValue>
  );
};

export { CountrySelectOption, CountrySelectSingleValue };

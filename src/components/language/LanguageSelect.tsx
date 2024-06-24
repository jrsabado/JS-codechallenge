import React from 'react';
import Select, { SingleValue, ActionMeta } from 'react-select';
import { Language, DEFAULT_LANGUAGE } from '../settings/settingsContext';

interface LanguageOption {
  value: Language;
  label: string;
}

interface LanguageSelectProps {
  value?: Language;
  onChange?: (language: Language) => void;
}

// Extended language data
const languageData = [
  { code: 'en', name: 'English' },
  { code: 'es', name: 'Spanish' },
  { code: 'fr', name: 'French' },
  { code: 'de', name: 'German' },
  { code: 'zh', name: 'Chinese' },
  { code: 'ja', name: 'Japanese' },
  { code: 'ru', name: 'Russian' },
  { code: 'it', name: 'Italian' },
  { code: 'pt', name: 'Portuguese' },
  { code: 'hi', name: 'Hindi' },
  // Add more languages as needed
];

const LanguageSelect = ({ value = DEFAULT_LANGUAGE, onChange }: LanguageSelectProps) => {
  // Prepare data
  const options = languageData.map(({ code, name }) => ({
    value: { code, name },
    label: name,
  }));

  const defaultValue = value ? { value, label: value.name } : null;

  const handleChange = (
    newValue: SingleValue<LanguageOption>,
    _actionMeta: ActionMeta<LanguageOption>
  ) => {
    if (newValue) {
      onChange?.(newValue.value);
    }
  };

  return (
    <div>
      <label>
        Language
        <Select
          options={options}
          defaultValue={defaultValue}
          onChange={(newValue, actionMeta) => handleChange(newValue as SingleValue<LanguageOption>, actionMeta)}
        />
      </label>
    </div>
  );
};

export default LanguageSelect;

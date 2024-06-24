export interface Country {
    code: string;
    name: string;
  }
  
  export interface Language {
    code: string;
    name: string;
  }
  
  export interface Currency {
    code: string;
    name: string;
  }
  
  export const DEFAULT_COUNTRY: Country = {
    code: 'US',
    name: 'United States of America',
  };
  
  export const DEFAULT_LANGUAGE: Language = {
    code: 'en',
    name: 'English',
  };
  
  export const DEFAULT_CURRENCY: Currency = {
    code: 'USD',
    name: 'US Dollar',
  };
  
  export interface Settings {
    country: Country;
    language: Language;
    currency: Currency;
  }
  
  export const DEFAULT_SETTINGS: Settings = {
    country: DEFAULT_COUNTRY,
    language: DEFAULT_LANGUAGE,
    currency: DEFAULT_CURRENCY,
  };
  
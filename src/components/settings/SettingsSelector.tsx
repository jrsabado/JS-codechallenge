import React, { useState, useCallback, useMemo } from 'react';
import Modal from 'react-modal';
import CountrySelect from '../country/CountrySelect';
import LanguageSelect from '../language/LanguageSelect';
import CurrencySelect from '../currency/CurrencySelect';
import { Country, Language, Currency, Settings, DEFAULT_SETTINGS } from './settingsContext';
import SettingsButton from './SettingsButton';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SettingsSelector = (): JSX.Element => {
    // States
    const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
    const [settings, setSettings] = useState<Settings>(DEFAULT_SETTINGS);
    const [tempSettings, setTempSettings] = useState<Settings>(settings);
  
    // Memoized button label to prevent unnecessary re-renders
    const buttonLabel = useMemo(() => {
      return `${settings.country.name} - (${settings.currency.code} - ${settings.language.name})`;
    }, [settings.country.name, settings.currency.code, settings.language.name]);
  
    // Actions
    const handleOpen = useCallback(() => {
      setTempSettings(settings);
      setModalIsOpen(true);
    }, [settings]);
  
    const handleClose = useCallback(() => {
      setModalIsOpen(false);
    }, []);
  
    const handleSave = useCallback(() => {
      setSettings(tempSettings);
      setModalIsOpen(false);
      toast.success('Changes have been saved!', { autoClose: 1500 });
    }, [tempSettings]);
  
    const handleChangeCountry = useCallback((country: Country) => {
      setTempSettings((prev) => ({ ...prev, country }));
    }, []);
  
    const handleChangeLanguage = useCallback((language: Language) => {
      setTempSettings((prev) => ({ ...prev, language }));
    }, []);
  
    const handleChangeCurrency = useCallback((currency: Currency) => {
      setTempSettings((prev) => ({ ...prev, currency }));
    }, []);
  
    return (
      <div>
        <SettingsButton onClick={handleOpen} label={buttonLabel} />
  
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={handleClose}
          className="react-modal-content"
          overlayClassName="react-modal-overlay"
        >
          <h2>Select your region, currency, and language.</h2>
  
          <CountrySelect value={tempSettings.country} onChange={handleChangeCountry} />
          <CurrencySelect value={tempSettings.currency} onChange={handleChangeCurrency} />
          <LanguageSelect value={tempSettings.language} onChange={handleChangeLanguage} />
  
          <div className="modal-buttons">
            <button onClick={handleClose}>Cancel</button>
            <button onClick={handleSave}>Save</button>
          </div>
        </Modal>
        <ToastContainer />
      </div>
    );
  };
  
  export default SettingsSelector;
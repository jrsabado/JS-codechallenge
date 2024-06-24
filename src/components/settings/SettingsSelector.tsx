import React, { useState, useCallback, useMemo } from 'react';
import Modal from 'react-modal';
import CountrySelect from '../country/CountrySelect';
import LanguageSelect from '../language/LanguageSelect';
import CurrencySelect from '../currency/CurrencySelect';
import { Country, Language, Currency, Settings, DEFAULT_SETTINGS } from './settingsContext';
import SettingsButton from './SettingsButton';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

/* --- [TASK] ---
Changes on modal are only applied on SAVE

CURRENT SCENARIO
- Clicking the `SettingsSelector`-Button opens a modal dialog.
- Changes to any of the select inputs are immediately effective.
- The modal is dismissed using the **[Close]** button

DESIRED SCENARIO
- Clicking the `SettingsSelector`-Button opens a modal dialog.
- There is a **[Save]** and a **[Cancel]** button, both serving to dismiss the modal.
- Changes are taking effect only on **[Save]**

FURTHER DETAILS
- Positioning of the buttons within the modal is not in the scope of this task
--- [TASK] --- */

/* --- [TASK] ---
Reduced number of unnecessary re-renders

CURRENT SCENARIO
- The `SettingsSelector`-Button re-renders too often
- It re-renders every time the modal is opened, closed, or on changing the select inputs

DESIRED SCENARIO
- The `SettingsSelector`-Button only re-renders when relevant data changes (Country, Language, Currency)

FURTHER DETAILS
- The `SettingsSelector`-Button has a render counter that will log to the console (do not remove)
- Be aware that #1 changes some relevant behaviour for this task
--- [TASK] --- */

/* --- [TASK] ---
Improved layout and styling of modal dialog (CSS)

CURRENT SCENARIO
- The modal dialog lacks intentional layout (spacings, dimensions).
- On smaller devices, the available space is not utilized effectively.

DESIRED SCENARIO
- Ensure consistent spacing, padding, and dimensions.
- Implement responsive or adaptive behavior for the modal, especially on smaller devices.

FURTHER DETAILS
- Focus on injecting and structuring CSS, using selectors and properties effectively.
- Feel free to apply your preferred spacing and dimensions; the provided designs mereley serve as examples. Just make sure it is consistent.
- Bonus points awarded for aesthetically appealing re-design of elements.
--- [TASK] --- */

/* --- [TASK] ---
Improved use of TypeScript

CURRENT SCENARIO
- In `SettingsSelector`, there are individual `useState()` calls for `Country`, `Language`, and `Currency`.
- Throughout the entire project, there are several instances of type `any`.
    Example: 
    ```typescript
    ... = React.useState<any>(DEFAULT_COUNTRY);
    ```
- Default values are constants that are exported by each component. 
    Example:
    ```typescript
    .... { DEFAULT_COUNTRY } from "../country/CountrySelect";
    ```

DESIRED SCENARIO
- Consolidate `Country`, `Language`, and `Currency` into a single "state".
- Extract default values from the components and make them configurable from a central point.
- Eliminate any remaining instances of type `any`.

OPTIONAL BONUS
- Replace `any` in the `*.stories.tsx`  files with appropriate types.
--- [TASK] --- */

/* --- [TASK] ---
 ReactDOM.render is no longer supported

CURRENT SCENARIO
- There is an error logging in the console
    `Warning: ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot`

DESIRED SCENARIO
- The error log does not appear
- The cause of the the warning is fixed

FURTHER DETAILS
- Downgrading to React 17 is not an option 😉
--- [TASK] --- */

// Component
// const SettingsSelector = (): JSX.Element => {
//   // States
//   const [modalIsOpen, setModalIsOpen] = React.useState<any>(false);
//   const [selectedCountry, setCountry] = React.useState<any>(DEFAULT_COUNTRY);
//   const [selectedCurrency, setCurrency] = React.useState<any>(DEFAULT_CURRENCY);
//   const [selectedLanguage, setLanguage] = React.useState<any>(DEFAULT_LANGUAGE);

//   // Render Counter
//   const counter = useRef(0);

//   // Actions
//   const handleOpen = () => {
//     setModalIsOpen(true);
//   };
//   const handleClose = () => {
//     setModalIsOpen(false);
//   };

//   const button = () => {
//     // Increase render count.
//     counter.current++;

//     // Log current render count.
//     console.log("Render count of button is: " + counter.current);

//     /* Button */
//     return (
//       <button onClick={handleOpen}>
//         {selectedCountry.name} - ({selectedCurrency} - {selectedLanguage})
//       </button>
//     );
//   };

//   // Render
//   return (
//     <div>
//       {button()}

//       {/* Modal */}
//       <Modal isOpen={modalIsOpen}>
//         {/* Header */}
//         <h2>Select your region, currency and language.</h2>

//         {/* Country */}
//         <CountrySelect value={selectedCountry} onChange={setCountry} />

//         {/* Currency */}
//         <CurrencySelect value={selectedCurrency} onChange={setCurrency} />

//         {/* Language */}
//         <LanguageSelect language={selectedLanguage} onChange={setLanguage} />

//         {/* Close button */}
//         <button onClick={handleClose}>Close</button>
//       </Modal>
//     </div>
//   );
// };

// export default SettingsSelector;


// Component
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
  
    // Render
    return (
      <div>
        <SettingsButton onClick={handleOpen} label={buttonLabel} />
  
        {/* Modal */}
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={handleClose}
          className="react-modal-content"
          overlayClassName="react-modal-overlay"
        >
          {/* Header */}
          <h2>Select your region, currency, and language.</h2>
  
          {/* Country */}
          <CountrySelect value={tempSettings.country} onChange={handleChangeCountry} />
  
          {/* Currency */}
          <CurrencySelect value={tempSettings.currency} onChange={handleChangeCurrency} />
  
          {/* Language */}
          <LanguageSelect value={tempSettings.language} onChange={handleChangeLanguage} />
  
          {/* Buttons */}
          <div className="modal-buttons">
            <button onClick={handleClose}>Cancel</button>
            <button onClick={handleSave}>Save</button>
          </div>
        </Modal>
  
        {/* Toast Container */}
        <ToastContainer />
      </div>
    );
  };
  
  export default SettingsSelector;
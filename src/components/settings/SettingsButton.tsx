import React, { memo, useRef } from 'react';

interface SettingsButtonProps {
  onClick: () => void;
  label: string;
}

const SettingsButton = ({ onClick, label }: SettingsButtonProps) => {
  const counter = useRef(0);
  counter.current++;

  console.log('Render count of button is: ' + counter.current);

  return (
    <button className="settings-selector-button" onClick={onClick}>
      {label}
    </button>
  );
};

export default memo(SettingsButton);

import React, { useState } from 'react';
import styled from 'styled-components';
import { MdHelpOutline } from 'react-icons/md';

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 10em 3em 3em 5em;
  /* display: grid;
  place-items: center; */

  h1 {
    margin-bottom: 1em;
  }
`;

const SettingCard = styled.div`
  width: 14em;
  min-height: 5em;
  padding: 9px;
  border-radius: 6px;
  background: #e1e7eb;
  color: #000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  label {
    font-weight: 500;
  }

  input {
    accent-color: #18d;
    cursor: pointer;
  }
`;

const Settings = () => {

  const setMode = () => {
    const mode = sessionStorage.getItem('death-mode');
    return mode ? mode : false;
  }

  const [instantDeathMode, setInstantDeathMode] = useState(setMode());

  const toggleInstantDeathMode = (newMode) => {
    if (instantDeathMode && newMode === 'on') return;
    if (!instantDeathMode && newMode === 'off') return;
    setInstantDeathMode(!instantDeathMode);
    sessionStorage.setItem('death-mode', newMode);
  };

  return (
    <Container>
      <h1>Global Settings:</h1>
      <SettingCard>
        <h4>Instant Death Mode: <MdHelpOutline title='Enter instant death mode' style={{color: '#18d'}}/></h4>
        <div>
          <div style={{'display': 'flex', justifyContent: 'space-between', width: '8em'}}>
            <div>
              <label htmlFor="death-mode-on" style={{marginRight: '.2em'}}>On</label>
              <input type='radio' name='on' checked={instantDeathMode} onClick={() => toggleInstantDeathMode('on')} />
            </div>
            <div>
              <label htmlFor="death-mode-off" style={{marginRight: '.2em'}}>Off</label>
              <input type='radio' name='off' checked={!instantDeathMode} onClick={() => toggleInstantDeathMode('off')} />
            </div>
          </div>
        </div>
      </SettingCard>
    </Container>
  );
};

export default Settings;
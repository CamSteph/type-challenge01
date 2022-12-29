import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 10em 3em 3em 5em;
  display: grid;
  place-items: center;
`;

const Settings = () => {


  const [instantDeathMode, setInstantDeathMode] = useState(false);

  const toggleInstantDeathMode = (newMode) => {
    if (instantDeathMode && newMode === 'on') return;
    if (!instantDeathMode && newMode === 'off') return;
    setInstantDeathMode(!instantDeathMode);
    sessionStorage.setItem('death-mode', newMode);
  };

  return (
    <Container>
      Instant Death Mode
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
    </Container>
  );
};

export default Settings;
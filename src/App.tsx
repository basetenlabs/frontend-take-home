import { useState } from 'react';
import Instructions from './Instructions';
import Output from './Output';
import Placeholder from './Placeholder';
import Trigger from './Trigger';
import { Container, Implementation } from './styled';

function App() {
  const [selected, setSelected] = useState('');

  function handleTrigger() {
    setSelected('No implementation; unhandled trigger');
  }

  return (
    <Container>
      <Instructions />
      <Implementation>
        <Trigger onTrigger={handleTrigger} />

        {/* Replace the Placeholder component below with your implementation */}
        <Placeholder />

        <Output value={selected} />
      </Implementation>
    </Container>
  );
}

export default App;

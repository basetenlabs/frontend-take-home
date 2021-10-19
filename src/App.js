import { useState } from 'react';
import './App.css';
import Instructions from './Instructions';
import Placeholder from './Placeholder';
import Trigger from './Trigger';
import SelectedOutput from './SelectedOutput';

function App() {
  const [selected, setSelected] = useState();

  function handleTrigger() {
    setSelected('No implementation; unhandled trigger');
  }

  return (
    <div className="App">
      <Instructions />
      <div className="Implementation">
        <Trigger onTrigger={handleTrigger} />

        {/* Replace the Placeholder component below with your implementation */}
        <Placeholder replaceMe />

        <SelectedOutput selected={selected}/>
      </div>
    </div>
  );
}

export default App;

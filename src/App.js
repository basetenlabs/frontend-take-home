import { useState } from 'react';
import './App.css';
import Instructions from './Instructions';
import SearchableSelect from './SearchableSelect';
import Trigger from './Trigger';
import SelectedOutput from './SelectedOutput';

function App() {
  //ok they click this button and the component pops up
  //also the selected value will go here i guess
  const [selected, setSelected] = useState();
  const [shouldComponentOpen, setShouldComponentOpen] = useState(false)

  function handleTrigger() {
    setSelected('still waiting');
    setShouldComponentOpen(true)
  }

  return (
    <div className="App">
      <Instructions />
      <div className="Implementation">
        <Trigger onTrigger={handleTrigger} />
        <SearchableSelect shouldComponentRender={shouldComponentOpen} setSelected={setSelected} />

        <SelectedOutput selected={selected}/>
      </div>
    </div>
  );
}

export default App;

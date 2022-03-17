import React, {useState} from 'react'
import { search } from './API'

function SearchableSelect({shouldComponentRender, setSelected}) {
  const [value, setValue] = useState('')
  const [options, setOptions] = useState([])
  const [cursor, setCursor] = useState(0)

  const SortArray = (x, y) => {
    return x.item.id.localeCompare(y.item.id);
  }
  const sortedArray = options.sort(SortArray);

  const optionsMap = sortedArray.map(function(item, key){
    return <li tabIndex="0" id="childWrapper" onKeyPress={(e) => handleKeyPress(e, item.item.id)} onClick={() => handleItemSelection(item.item.id)} key={key}>{item.item.id}</li>
  })
  
  const handleKeyPress = (e, id) => {
    if(e.key === 'Enter'){
      handleItemSelection(id)
    }
  }
  
  const handleChange = (event) => {
    setValue(event.target.value)
    setOptions(search(event.target.value))
  }

  const handleItemSelection = (id) => {
    setSelected(id)
  }

  const handleKeyDown = (e) => {
    // arrow up/down button should select next/previous list element
    if (e.keyCode === 38 && cursor > 0) {
      setCursor(cursor - 1)
    } else if (e.keyCode === 40 && cursor < options.length - 1) {
      setCursor(cursor + 1)
    }
  }

  return (
    <div>
      {shouldComponentRender && 
      <div className="SearchableSelect">
        <input onKeyDown={(e) => handleKeyDown(e)}  onChange={(e) => handleChange(e)} value={value}></input>
        <br/>
        <ul id="parentList">{optionsMap}</ul>
      </div>
      }
    </div>
    );
}

export default SearchableSelect;

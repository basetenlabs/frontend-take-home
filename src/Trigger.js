import React from 'react'

function Trigger({ onTrigger }) {
  return (
    <div className="Trigger">
      <button type="button" onClick={() => onTrigger()} data-cy="trigger-implmentation">Trigger</button>
    </div>
  )
}

export default Trigger;

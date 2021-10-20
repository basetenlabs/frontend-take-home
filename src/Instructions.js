import React from 'react';
import Logo from './Logo';

function Instructions() {
  return (
    <div className="Instructions">
      <div className="Header">
        <div className="Logo"><Logo /></div>
        <div className="Text">Take Home Challenge</div>
      </div>
      <p>Replace the <code>Placeholder</code> component with the implementation that you write.</p>
      <p>Basic Requirements</p>
      <ul>
        <li>Clicking the <em>Trigger</em> button should launch the UI component to capture user input.</li>
        <li>UI component should consist of a text input as well as an area to display results matching user input.</li>
        <li>Matching results based on the text input are displayed below the text input as a list in alphabetical order.</li>
        <li>Each result should be selectable by mouse click as well as using the <code>&uarr;</code> / <code>&darr;</code> arrow keys (and <code>&crarr;</code>).</li>
        <li>Upon selection, should update the <em>Selected Output</em> area with the selected value.</li>
      </ul>
      <p>Nice-to-have Requirements</p>
      <ul>
        <li>Results are grouped by <code>type</code> and displayed under an appropriate <code>type</code> heading.</li>
        <li>UI component can also be launched via a hotkey combination <code>&#8984;</code>+<code>K</code> or <code>Ctrl</code>+<code>K</code>.</li>
        <li>Hitting the <code>Esc</code> key will close the UI component without selecting anything.</li>
      </ul>
      <p>Feel free to make assumptions along the way, and just note them in the comments.</p>
    </div>
  )
}

export default Instructions;

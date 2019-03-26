import React, { useState } from 'react';
// IMPORTING TYPESCRIPT FROM JAVASCRIPT
import { add } from './add.ts';

export default function About() {
  const [state, setState] = useState(0);
  function handleClick() {
    setState(add(1, 2));
  }
  return (
    <div>
      hello
      <div>
        Result:
        {' '}
        {state}
      </div>
      <button type="button" onClick={handleClick}>Add</button>
    </div>
  );
}

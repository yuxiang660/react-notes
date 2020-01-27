import React, { useState } from 'react';

const StateHook = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>StateHook - You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Test StateHook
      </button>
    </div>
  );
};

export default StateHook;

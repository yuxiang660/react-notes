import React, { useState, useEffect } from 'react';

const EffectHook = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `${count} times`;
  });

  return (
    <div>
      <p>Effect Hook - You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Test Effect Hook
      </button>
    </div>
  );
};

export default EffectHook;

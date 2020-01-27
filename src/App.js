import React from 'react';

function App() {
  return (
    <div>
      <header>
        <p>
          Environment variable<br />
          process.env.PUBLIC_RUL - {process.env.PUBLIC_URL}<br />
          process.env.NODE_EN - {process.env.NODE_ENV}<br />
        </p>
      </header>
    </div>
  );
}

export default App;

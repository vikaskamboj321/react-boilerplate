import React from 'react';
import './App.scss';

function App() {
  return (
    <div className="App">
      <h1>Welcome to our website!</h1>
      <p>This is a simple web application built with React.</p>
      { /* eslint-disable-next-line no-alert */}
      <button type="button" onClick={() => alert('Button clicked!')}>Click me</button>
    </div>
  );
}

export default App;

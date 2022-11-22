import './index.scss';
import React from 'react';

function App() {
  const [count, setCount] = React.useState(0);
  const Increment = () => {
    setCount(count + 1);
  };
  const Decrement = () => {
    setCount(count - 1);
  };
  return (
    <div className="App">
      <div>
        <h2>Counter:</h2>
        <h1>{count}</h1>
        <button className="minus" onClick={Decrement}>- Minus</button>
        <button className="plus" onClick={Increment}>Plus +</button>
      </div>
    </div>
  );
}

export default App;

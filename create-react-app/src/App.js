import React, { useState } from 'react';

function App() {
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);
  const [result, setResult] = useState(0);

  function handleChange1(event) {
    setValue1(event.target.value);
  }

  function handleChange2(event) {
    setValue2(event.target.value);
  }

  function handleClickResult(event) {
    console.log(event.target.innerText);
    event.target.innerText === 'summ'
      ? setResult(Number(value1) + Number(value2))
      : setResult(Number(value1) * Number(value2));
  }
  return (
    <div>
      <input value={value1} onChange={handleChange1} />
      <input value={value2} onChange={handleChange2} />

      <button onClick={handleClickResult}>summ</button>
      <button onClick={handleClickResult}>proizv</button>
      <p>result: {result}</p>
    </div>
  );
}

export default App;

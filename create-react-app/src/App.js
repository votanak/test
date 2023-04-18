import React, { useState } from 'react';

function App(props) {
  const [checkboxChecked, setCheckboxChecked] = useState(false);
  const checkHandle = () => {
    setCheckboxChecked(!checkboxChecked);
  };

  return (
    <div>
      <input type="checkbox" onChange={checkHandle} />
      <label>Вам есть 18 лет?</label>
      {!checkboxChecked && <p>увы, вам еще нет 18 лет</p>}
    </div>
  );
}

export default App;

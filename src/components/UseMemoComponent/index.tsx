import React, { useState, useMemo, useEffect } from 'react';

const UseMemoComponent = () => {
  const [inputValue, setInputValue] = useState<number>(1);
  const [timesValue, setTimeValue] = useState<number>(0);

  const performExpensiveOperation = (iteration: number): number => {
    let result = 0;
    for (let i = 0; i < iteration * 100; i++) {
      for (let j = 0; j < iteration * 100; j++) {
        result += i * j;
      }
    }
    return result;
  };

  //useMemo csak a function eredményét memorizálja
  const expensiveOperationResult = useMemo(() => {
    return performExpensiveOperation(timesValue);
  }, [timesValue]);

  const handleRecalculate = () => {
    setTimeValue(inputValue * 2);
  };

  useEffect(() => {}, [inputValue, timesValue]);

  return (
    <>
      <input
        type="number"
        value={inputValue}
        onChange={(e) => setInputValue(Number(e.target.value))}
      />
      <button onClick={handleRecalculate}>Ertek * 2</button>
      <p>Eredmény: {timesValue}</p>
      <p>Expensive operation: {expensiveOperationResult}</p>
    </>
  );
};

export default UseMemoComponent;

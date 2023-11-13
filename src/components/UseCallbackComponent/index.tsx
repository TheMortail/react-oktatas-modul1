import React, { useState, useCallback } from 'react';
import ChildComponent from './ChildComponent';

const UseCallbackComponent: React.FC = () => {
  const [countCallback, setCountCallback] = useState<number>(0);

  //A useCallback magát a function-t memorizálja
  const incrementWithCallback = useCallback(() => {
    setCountCallback(countCallback + 1);
  }, [countCallback]);

  return (
    <>
      <h1>UseCallback</h1>
      <p>Count: {countCallback}</p>
      <button onClick={incrementWithCallback}>
        Növelés useCallback-en keresztül
      </button>
      <ChildComponent incrementCallback={incrementWithCallback} />
    </>
  );
};

export default UseCallbackComponent;

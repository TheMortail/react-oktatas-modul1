import React, { useEffect, useRef, useState } from 'react';

const MountComponent = () => {
  const items = [
    { id: 1, name: 'Név1' },
    { id: 2, name: 'Név2' },
    { id: 3, name: 'Név3' },
  ];
  const [show, setShow] = useState<boolean>(false);
  const [windowsSize, setWindowsSize] = useState(getWindowsSize());
  const [count, setCount] = useState<number>(0);
  const timerRef = useRef(0);
  const timerOut = useRef(0);

  function getWindowsSize() {
    const { innerWidth, innerHeight } = window;
    return { innerWidth, innerHeight };
  }

  useEffect(() => {
    timerOut.current = window.setTimeout(() => {
      setShow(true);
    }, 3000);

    function handleWindowsResize() {
      setWindowsSize(getWindowsSize);
    }

    window.addEventListener('resize', handleWindowsResize);
    return () => {
      clearTimeout(timerOut.current);
      window.removeEventListener('resize', handleWindowsResize);
    };
  }, []);

  useEffect(() => {
    timerRef.current = window.setInterval(() => {
      setCount(count + 1);
    }, 3000);

    return () => {
      clearInterval(timerRef.current);
    };
  }, [count]);

  return (
    <>
      <h1>Window Size</h1>
      Windows Width: {windowsSize.innerWidth} <br />
      Windows Height: {windowsSize.innerHeight}
      <h1>Array</h1>
      {show && (
        <div>
          {items.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
          Count:{count}
        </div>
      )}
    </>
  );
};

export default MountComponent;

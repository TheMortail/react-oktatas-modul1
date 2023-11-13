import MountComponent from '../../components/MountComponent';
import React, { useState } from 'react';

const MountContainer = () => {
  const [show, setShow] = useState<boolean>(true);

  function toggle() {
    setShow(!show);
  }

  return (
    <>
      {show && <MountComponent />}
      <button onClick={toggle}>Toggle</button>
    </>
  );
};

export default MountContainer;

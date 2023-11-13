import { useEffect, useState } from 'react';

import { ChildComponentType } from './types';

const ChildComponent: ChildComponentType = (props) => {
  const { incrementCallback } = props;
  const [renderCount, setRenderCount] = useState<number>(0);

  useEffect(() => {
    setRenderCount((state) => ++state);
  }, [incrementCallback]);

  return (
    <div>
      <p>child render: {renderCount}</p>
      <button onClick={incrementCallback}>
        Növelés gyermekkomponensen keresztül
      </button>
    </div>
  );
};

export default ChildComponent;

import React from 'react';

import { ReactMemoComponentType } from './types';

const FourPropComponent: ReactMemoComponentType = (props) => {
  const { prop1, prop2, prop3, prop4 } = props;
  return (
    <div>
      <p>Prop1: {prop1}</p>
      <p>Prop2: {prop2}</p>
      <p>Prop3: {prop3}</p>
      <p>Prop4: {prop4}</p>
    </div>
  );
};

export default React.memo(FourPropComponent, (prevProps, nextProps) => {
  return prevProps.prop1 === nextProps.prop1;
});

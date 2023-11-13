import React from 'react';
import './App.css';
import MountContainer from './containers/MountContainer';
import FourPropContainer from './containers/FourPropContainer';
import UseMemoContainer from './containers/UseMemoContainer';
import UseCallbackContainer from './containers/UseCallbackContainer';

export default function App() {
  return (
    <div className="App">
      <MountContainer />
      <UseMemoContainer />
      <UseCallbackContainer />
      <FourPropContainer />
    </div>
  );
}

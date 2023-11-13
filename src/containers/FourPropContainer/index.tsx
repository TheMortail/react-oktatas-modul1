import { useState } from 'react';
import FourPropComponent from '../../components/FourPropComponent';

const FourPropContainer = () => {
  const [prop1, setProp1] = useState<string>('');
  const [prop2, setProp2] = useState<string>('');
  const [prop3, setProp3] = useState<string>('');
  const [prop4, setProp4] = useState<string>('');

  const generateRandomString = (): string => {
    const characters =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    const charactersLength = characters.length;

    for (let i = 0; i < 6; i++) {
      const randomIndex = Math.floor(Math.random() * charactersLength);
      result += characters.charAt(randomIndex);
    }

    return result;
  };

  const generateProp = (value: 'prop1' | 'prop2' | 'prop3' | 'prop4'): void => {
    const randomString = generateRandomString();
    value === 'prop1' && setProp1(randomString);
    value === 'prop2' && setProp2(randomString);
    value === 'prop3' && setProp3(randomString);
    value === 'prop4' && setProp4(randomString);
  };

  return (
    <>
      <h1>4 prop</h1>
      <button onClick={() => generateProp('prop1')}>generate prop1</button>
      <button onClick={() => generateProp('prop2')}>generate prop2</button>
      <button onClick={() => generateProp('prop3')}>generate prop3</button>
      <button onClick={() => generateProp('prop4')}>generate prop4</button>
      <FourPropComponent
        prop1={prop1}
        prop2={prop2}
        prop3={prop3}
        prop4={prop4}
      />
    </>
  );
};

export default FourPropContainer;

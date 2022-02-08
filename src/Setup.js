import { useState } from 'react';

const Setup = () => {
  const [text, setText] = useState('Random Title');

  const handleClick = () => {
    if (text === 'Random Title') {
      setText('Bibek Chaudhary');
    } else {
      setText('Random Title');
    }
  };
  return (
    <>
      <h1>{text}</h1>
      <button onClick={handleClick}>Change Title</button>
    </>
  );
};

export default Setup;

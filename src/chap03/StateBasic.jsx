import { useState } from 'react';

export default function StateBasic({init}) {
  const [count, setCount] = useState(init);
  console.log(`count is ${count}`);

  const handleClick = () => {
    setCount(prev => prev + 1);
  };
  return (
    <>
      <button onClick={handleClick}>カウント</button>
      <p>{count}回クリックされました</p>
    </>
  ); 
}
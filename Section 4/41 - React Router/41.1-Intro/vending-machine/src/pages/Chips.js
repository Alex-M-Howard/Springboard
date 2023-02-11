import {useState} from "react";
import Link from 'next/link';
import '@/styles/Chips.module.css'


function Chips() {
  let [count, setCount] = useState(0);

  const handleButton = () => {
    setCount(count += 1);
  };

  return(
    <div className='App'>
      <h3>Counter: {count}</h3>
      <button onClick={handleButton}>Eat Chips</button>
      <Link href='/'>Go Back</Link>
    </div>
  )
}

export default Chips;
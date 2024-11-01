import React, { useState} from 'react'

const App = () => {
  let [counter, setCounter] = useState(5);
  const update = () => {
    setCounter(counter+1);
  }
  const decrease = () => {
    setCounter(counter-1);
  }
  return (
    <div>
      <p>ร้านล่าหม่า</p>
      <p>ราคาไม้ละ {counter} บาท
       <button onClick={update}>+</button>
       <button onClick={decrease}>-</button> 
      </p>
      <p>5 ไม้ {counter*5} บาท</p>
      <p>10 ไม้ {counter*10} บาท</p>
      <p>20 ไม้ {counter*20} บาท</p>
      <p>30 ไม้ {counter*30} บาท</p>
      
    </div>
  )
}

export default App
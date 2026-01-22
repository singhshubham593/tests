import React, { useState } from 'react'

function Counter (){
    const [count,SetCount]=useState(0);
    
    const handleAdd =() => {
        SetCount(count + 1);
    }
    const handleSub =() => {
        if(count===0) return;
        SetCount(count-1)
    }
    const handleReset =() => {
        SetCount(0);
    }
  return (
    <div className='max-w-xl mx-auto space-y-4'>
        <h1>count : {count}</h1>
        <button className='' onClick={handleAdd}>Add 1</button>
        <button className=''onClick={handleSub}>Subtract 1</button>
        <button className='' onClick={handleReset}>Reset</button>
    </div>
  )
}

export default Counter

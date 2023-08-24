import React, { ReactNode, useState } from 'react';

type CounterProps = {
    children: ReactNode;
    click: React.Dispatch<React.SetStateAction<number>>;
};

function Counter({ click, children } : CounterProps) {
  return (
    <div>
        <h1>{children}</h1>
        <button onClick={() => click(prev => prev + 1)}>+</button>
        <button onClick={() => click(prev => prev - 1)}>-</button>
    </div>
  )
}

export default Counter;

// ClientComponent.jsx
'use client';
import { useState } from 'react';

export default function InspirationGenerator({children}: any) {
  const [index, setIndex] = useState(0);

  return (
    <>
      <p>Your inspirational quote is:</p>
      <button onClick={() => {
        setIndex(index + 1);
      }}>Inspire me again: {index}</button>
      {children}
    </>
  );
}
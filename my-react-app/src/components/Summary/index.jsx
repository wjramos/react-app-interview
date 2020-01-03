import React from 'react';

export default function Summary({ answers }) {
  return (
    <>
      <h1>Summary</h1>
      <img src={'./images/puppy.jpg'} alt="" />
      <ul>
        {answers.map((answer, i) => (
          <li key={i}>{answer}</li>
        ))}
      </ul>
    </>
  );
}
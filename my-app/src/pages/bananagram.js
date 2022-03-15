import React from 'react';

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// const letterset = "";

function makeletterset() {
  const letterset = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
    // letterset += alphabet.charAt(Math.floor(Math.random() * alphabet.length));
  return letterset;
}

console.log(makeletterset());
  
const Words = () => {
  return (
    <div>
      <div className="app">
        <div className='panagrams'>
          <h1> Panagrams </h1>
          <button onClick={makeletterset}>New Game</button>
        </div>

      </div>
    </div>
  );
};
  
export default Words;
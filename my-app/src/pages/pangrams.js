import React from 'react';

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var letterset = "";

function makeletterset() {
  for (let i = 0; i < 8; i++) {
    letterset += alphabet.charAt(Math.floor(Math.random() * alphabet.length));
    letterset += " ";
    //console.log(letterset)
  }
    // letterset += alphabet.charAt(Math.floor(Math.random() * alphabet.length));
    document.getElementById("demo").innerHTML=letterset;
    console.log(letterset)
    return letterset;
}

console.log(letterset);
  
const Words = () => {
  return (
    <div>
      <div className="app">
        <div className='pangrams'>
          <h1> Pangrams </h1>
          <button onClick={makeletterset}>New Game</button>
        </div>
        <p id="demo"></p>

      </div>
    </div>
  );
};
  
export default Words;
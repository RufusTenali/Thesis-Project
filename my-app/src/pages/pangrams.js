import React from 'react';

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const constants = "BCDFGHJKLMNQRSTVWXYZ";
const vowels = "AEIOU";
var letterset = "";

function makeletterset() {
  letterset=" ";
  
  for (let i = 0; i < 7; i++) {
    //letterset += alphabet.charAt(Math.floor(Math.random() * alphabet.length)) + " ";
    letterset += vowels.charAt(Math.floor(Math.random() * alphabet.length)) + " ";
    letterset += constants.charAt(Math.floor(Math.random() * alphabet.length)) + " ";
    //console.log(letterset)
  }

  // for (let i = 0; i < 2; i++) {
  //   letterset += vowels.charAt(Math.floor(Math.random() * alphabet.length)) + " ";
  //   //vowels.charAt(i) -= letterset.charAt(i);
  //   //console.log(letterset)
  // }
  // for (let i = 0; i < 5; i++) {
  //   letterset += constants.charAt(Math.floor(Math.random() * alphabet.length)) + " ";
  //   //console.log(letterset)
  // }
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
        <p id="demo">R C D S L Q A I</p>
    <form>
      <label>
        <input type="text" name="guess" />
      </label>
        <input type="submit" value="Guess" />
    </form>
      </div>
    </div>
  );
};
  
export default Words;
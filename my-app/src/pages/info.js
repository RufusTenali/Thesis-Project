import React from 'react';
import '../Components/Navbar/info.css'
  
const Info = () => {
  return (
    <div class="icard-grid">
      <div id="info" class="flip-box">
    <div class="flip-box-inner">
      <div class="flip-box-front">
        <h2 id="text">What is Dementia?</h2>
      </div>
      <div class="flip-box-back">
        <h2>Dementia is the loss of cognitive functions such as remembering, thinking, speaking to an extent that interferes with the person’s everyday life.
        </h2>
        <h2><a href="https://www.mayoclinic.org/diseases-conditions/dementia/symptoms-causes/syc-20352013" target="_blank">Click Here</a></h2>
      </div>
    </div>
  </div>
  <div id="info" class="flip-box">
    <div class="flip-box-inner">
      <div class="flip-box-front">
        <h2>What casues Dementia?</h2>
      </div>
      <div class="flip-box-back">
        <h2>Dementia is the term to describe a group of conditions that cause damage to the brain cells. Dementia is caused by damage to or loss of nerve cells and their connections in the brain</h2>
        <h2>
        <a href="https://www.youtube.com/watch?v=HobxLbPhrMc" target="_blank">Click Here</a>
        </h2>
      </div>
    </div>
  </div>
  <div id="info" class="flip-box">
    <div class="flip-box-inner">
      <div class="flip-box-front">
        <h2>5 Steps you can take to reduce risk of dementia</h2>
      </div>
      <div class="flip-box-back">
        <a href="https://www.youtube.com/watch?v=HobxLbPhrMc" target="_blank">1.	Be Physically Active
        <br></br>
2.	Eat a Healthy Diet
<br></br>
3.	Take care of your heart
<br></br>
4.	Mentally challenge yourself
<br></br>
5.	Be social engaged
</a>
      </div>
    </div>
  </div>
  <div id="info" class="flip-box">
    <div class="flip-box-inner">
      <div class="flip-box-front">
        <h2>What else can you do?</h2>
      </div>
      <div class="flip-box-back">
        <h2>Contact a medical professional for further assistance</h2>
      </div>
    </div>
  </div>
  </div>
  
  );
};
  
export default Info;
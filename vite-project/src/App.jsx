import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ComputersCanvas from './Components/canvas/Computers'
import Hero from './Components/Hero'
import CountdownTimer from './CountdownTimer'







let App = () => { 
  const [count, setCount] = useState(0)

  return (

  

<div>
  <h1 id="Sudo">Sudo's Software  Engineering Masterclass</h1>
  <p style={{ textAlign: "center" }}>
<strong id="Para"> All tech enthusiasts! Unlock your coding potential with our exclusive FREE CLASS </strong><br/>
Don't miss out on this opportunity to master industry trends, gain insider insights, and network with like-minded professionals.<br/>
</p>


<Hero/>
<CountdownTimer></CountdownTimer>

<br/>
<br/>
<strong id='Limited'>LIMITED SEATS AVAILABLE!</strong>

<br/>
<br/>
<h2>Sign Up </h2>
<form class="signup-form" action="#" method="post">
<div class="form-row">
<label for="name">Name:</label>
<input type="text" id="name" name="name" className='customeInput' required/>
<br/>
</div>
<div class="form-row">
<label for="email">Email:</label>
<input type="email" id="email" name="email" className='customeInput' required/>
</div>
<br/>
<button type="submit" id="BOX"> I WANT TO ATTEND!</button>
</form>
</div>
  )
  }
export default App 

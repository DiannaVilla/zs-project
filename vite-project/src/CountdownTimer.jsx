import React, { useEffect, useState } from "react";

const CountdownTimer = () => {
// Set the target date and time (Sunday, August 6, 2023, 1:00 PM EST)
const targetDate = new Date("2023-08-06T13:00:00-05:00").getTime();

const calculateTimeRemaining = () => {
const now = new Date().getTime();
const distance = targetDate - now;

// Calculate the remaining time
const days = Math.floor(distance / (1000 * 60 * 60 * 24));
const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
const seconds = Math.floor((distance % (1000 * 60)) / 1000);

return { days, hours, minutes, seconds };
};

const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

useEffect(() => {
// Calculate the time remaining every second
const interval = setInterval(() => {
setTimeRemaining(calculateTimeRemaining());
}, 1000);

// Clear the interval when the component unmounts
return () => clearInterval(interval);
}, []);

return (
<div>
<h1>Time Reamining</h1>
<p>
{timeRemaining.days}:{timeRemaining.hours}:{timeRemaining.minutes}:{timeRemaining.seconds}
</p>
</div>
);
};

export default CountdownTimer;


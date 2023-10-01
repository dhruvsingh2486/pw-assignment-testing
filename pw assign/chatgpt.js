let delayTime = 3;

function startCountdown() {
  const countdownInterval = setInterval(() => {
    console.log(`Time remaining: ${delayTime} seconds`);
    delayTime--;

    if (delayTime < 0) {
      clearInterval(countdownInterval);
      const randomNum = Math.floor(Math.random() * 100) + 1;
      console.log(`Random number generated: ${randomNum}`);
    }
  }, 1000);
}

// Start the countdown after the specified delay
setTimeout(startCountdown, delayTime * 1000);
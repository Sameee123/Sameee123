
function countdownTimer(targetDate) {
    const targetTime = new Date(targetDate).getTime();
  
    const timerInterval = setInterval(() => {
      const currentTime = new Date().getTime();
      const timeRemaining = targetTime - currentTime;
  
      if (timeRemaining <= 0) {
        clearInterval(timerInterval);
        console.log("Countdown timer has ended!");
      } else {
        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
  
        console.log(`Time Remaining: ${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`);
      }
    }, 1000); 
  }
  
  
  const targetDate = "2023-12-31T23:59:59Z"; 
  countdownTimer(targetDate);
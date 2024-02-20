function animateCounter(targetCounts, duration) {
  const counters = document.querySelectorAll('.count');
  
  const increments = [];
  counters.forEach((counter, index) => {
    increments[index] = Math.ceil(targetCounts[index] / (duration * 10));
  });
  
  const interval = setInterval(() => {
    let stop = true;
    counters.forEach((counter, index) => {
      if (parseInt(counter.textContent) < targetCounts[index]) {
        counter.textContent = parseInt(counter.textContent) + increments[index];
        stop = false;
      }
    });

    if (stop) {
      clearInterval(interval);
    }
  }, 100);
}
animateCounter([3, 10, 10, 10], 5); 

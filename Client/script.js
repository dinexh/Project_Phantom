const counters = document.querySelectorAll('.counters');
const speed = 50;

counters.forEach(counter => {
  const updateValue = () => {
    const target = +counter.getAttribute('data-target');
    const lastValue = +counter.innerText; 
    const inc = target / speed;
    
    if (lastValue > target) {
      counter.innerText = target;
    }else {
      counter.innerText = lastValue+inc;
      setTimeout( updateValue, 1);
    }
  }
  
  updateValue();
})
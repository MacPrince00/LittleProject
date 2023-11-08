let total = 0;
let totalMins = 0;
let totalHrs = 0;
let target = document.querySelector('.seconds');
let targetMins = document.querySelector('.minutes');
let targetHrs = document.querySelector('.hours');
let interval;


function runTime (){
  interval = setInterval(() => {
  total++;
  target.innerHTML = total;
  if(total < 10) {
    target.innerHTML = `0${total}`;
  }
   
   if(total === 59) {
     total = 0;
     totalMins++;
     targetMins.innerHTML = totalMins;
   }

   if(totalMins < 10) {
    targetMins.innerHTML = `0${totalMins}`;
   }

   if(totalMins === 59) {
    totalMins = 0;
    total = 0;
    totalHrs++;
    targetHrs.innerHTML = totalHrs;
   }

   if(totalHrs < 10) {
    targetHrs.innerHTML = `0${totalHrs}`;
   }}, 1000)};

function activate() {
  clearInterval(interval)
}

function removal() {
  clearInterval(interval);
  
  total = 0;
  totalMins = 0;
  totalHrs = 0;

  target.innerHTML = `00`;
  targetMins.innerHTML = `00`;
  targetHrs.innerHTML = `00`;
}




let delayTime = 3000
let i=3


let id = setInterval(() => {
   console.log(`Time Remaining ${i} seconds`)
   i--
   if(i<0){
      clearInterval(id);
      let x = Math.floor((Math.random() * 100) + 1);
      console.log(`Random Number Generated ${x}`)
   }
}, delayTime);



const tick= document.querySelector("#tick");
const background=document.querySelector("#background");

const initialTime= new Date();
const secondHand= document.querySelector("#second-hand"),
      minuteHand= document.querySelector("#minute-hand"),
      hourHand= document.querySelector("#hour-hand")

let secondRotation= (initialTime.getSeconds()/60)*360,
    minuteRotation= (initialTime.getMinutes()/60)*360,
    hourRotation= (initialTime.getHours()/12)*360

function setHands(){
  let currentTime= new Date()
  secondRotation= (currentTime.getSeconds()/60)*360
  minuteRotation= (currentTime.getMinutes()/60)*360
  hourRotation= (currentTime.getHours()/12)*360

  secondHand.style.transform=`rotate(${secondRotation}deg)`
  minuteHand.style.transform=`rotate(${minuteRotation}deg)`
  hourHand.style.transform=`rotate(${hourRotation}deg)`

  setBackground(currentTime.getHours())
}

function setBackground(currentHour){
  if(currentHour==23 && currentHour>=0 && currentHour<=5)
    background.style.background="url('https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/2LNYZK7HO2.jpg')"
  else if(currentHour>=6 && currentHour<=9)
    background.style.background="url('https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/QN7UD2N402.jpg')"
  else if(currentHour>=10 && currentHour<=17)
    background.style.background="url('https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/HHD5NX16SI.jpg')"
  else if(currentHour>=18 && currentHour<=19)
    background.style.background="url('https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/KJEBFF9JBF.jpg')"
  else if(currentHour>=20 && currentHour<=22)
    background.style.background="url('https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/ZVV7HW23A1.jpg')"
}


setBackground(initialTime.getHours())
setHands()

window.setInterval(function(){
  setHands()
  tick.play()
},1000)

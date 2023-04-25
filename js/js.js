// Set the date we're counting down to
var countDownDate = new Date("jun 01, 2023 23:59:59").getTime();

// Update the countdown every 1 second
var x = setInterval(function() {

  // Get the current time
  var now = new Date().getTime();

  // Calculate the distance between now and the countdown date
  var distance = countDownDate - now;

  // Calculate days, hours, minutes, and seconds remaining
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the countdown
  document.getElementById("days").innerHTML = days + "d ";
  document.getElementById("hours").innerHTML = hours + "h ";
  document.getElementById("minutes").innerHTML = minutes + "m ";
  document.getElementById("seconds").innerHTML = seconds + "s ";

  // If the countdown is over, stop the interval
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "EXPIRED";
  }
}, 1000);


function myFunction(smallImg){
    var fullImg = document.getElementById("imageBox");
    fullImg.src = smallImg.src
}


const sentences = [
  '<i class="fas fa-check"></i> ENTREGA PARA TODO O BRASIL',
  '<i class="fa fa-shield"></i> COMPRA GARANTIDA',
  '<i class="fa fa-instagram"></i> ESTAMOS TAMBÉM NO INSTAGRAM',
];


const textContainer = document.getElementById("text-container");


let sentenceIndex = 0;


setInterval(() => {
 
  sentenceIndex = (sentenceIndex + 1) % sentences.length;

  textContainer.innerHTML = sentences[sentenceIndex];
}, 5000);


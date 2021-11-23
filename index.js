function scuberGreetingForFeet(rideDistance){
  // Write your code here!

  if (rideDistance <= 400) {
    return 'This one is on me!';
  }
  else if (rideDistance > 2500) {
    return 'No can do.';
  }
  else if (rideDistance > 2000) {
    return 'I will gladly take your thirty bucks.';
  }  
}

function ternaryCheckCity(cityName){
  // Write your code here!
const cityMessage = cityName === 'NYC' ? "Ok, sounds good." : "No go.";
return cityMessage;
}

function switchOnCharmFromTip(tipAmount){  
  // Write your code here!
switch (tipAmount) {
  case 'generous':
    return "Thank you so much.";
    break;
  case 'not as generous':
    return "Thank you.";
    break;
  default:
    return "Bye."
    break;
}
}
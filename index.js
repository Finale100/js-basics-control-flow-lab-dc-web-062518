function scuberGreetingForFeet(someValue) {
  let message
  if (someValue < 400) {
    message = 'This one is on me!';
  } else if (someValue > 2500) {
    message = 'No can do.';
  } else if (someValue > 2000) {
    message = 'I will gladly take your thirty bucks.';
  }
  return message
}

function ternaryCheckCity(destination) {
  let message
  destination === 'NYC' ? message = 'Ok, sounds good.' : message = 'No go.';
  return message
}

function switchOnCharmFromTip(tip) {
let message;
  switch (tip) {
    case 'generous':
    message = 'Thank you so much.';
    break;
    case 'not as generous':
    message = 'Thank you.';
    break;
    default:
    message = 'Bye.';
  }
  return message
}

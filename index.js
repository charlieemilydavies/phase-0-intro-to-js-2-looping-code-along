for (let age = 30; age < 40; age++) {
  console.log(`I'm ${age} years old. Happy birthday to me!`);
  debugger;
}
const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
    debugger;
  }

  return gifts;
}

wrapGifts(gifts);

function writeCards(names) {
  const messages = [];
  for (let i = 0; i < names.length; i++) {
    messages.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`);
  }
  return messages;
}

function countDown(number) {
  for (let i = number; i >= 0; i--) {
    console.log(i);
  }
}

// Example usage:
const names = ["Alice", "Bob", "Charlie"];
console.log(writeCards(names)); // ["Thank you, Alice, for the wonderful gift!", "Thank you, Bob, for the wonderful gift!", "Thank you, Charlie, for the wonderful gift!"]

countDown(5); // Logs: 5, 4, 3, 2, 1, 0

'use strict';

const friends = ['Michael' , 'Steven', 'Peter'];
// friends.push('Joy');
// const newFriends = friends.push('Jay');
// friends.unshift('Dock');
// let friend = friends.pop();
// friends.pop();
// friend = friends.shift();
// console.log(friends);
// console.log(newFriends);
// console.log(friend);
friends.push(23);
console.log(friends.includes("Bob"));
console.log(friends.includes("Steven"));
console.log(friends.includes("23"));
console.log(friends.includes(23));
if(friends.includes('Steven')){
  console.log("You have a friend called Steven");
}

const calcTip = function(bill){
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}
const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals = [bills[0] + tips[0] + bills[1] + tips[1] + bills[2] + tips[2]];
console.log(bills, tips, totals);
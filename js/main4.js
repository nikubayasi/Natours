const friend1 = "Michael";
const friend2 = "Steven"
const friend3 = "Peter";

const friends = ['Michael','Steven', 'Peter'];

console.log(friends[1]);

const years = new Array(1991, 1984, 2008, 2020);
console.log(years[0]);
console.log(friends.length);
console.log(friends[friends.length -1]);

friends[3] = 'Jay';
console.log(friends);
// friends = ['Bob','Alice'];
const firstName = "Sagara";
const jonas = [firstName , 'Schedtmann', 2037 - 1983, 'teacher', friends];
console.log(jonas);
console.log(jonas.length);

// Exercise
const calcAge = function(birthYear){
  return 2037 - birthYear;
}
const years2 = [1990, 1965,2002,2010, 2018];

const age1 = calcAge(years2[0]);
const age2 = calcAge(years2[1]);
const age3 = calcAge(years2[years2.length - 1]);

console.log(age3)
const ages = [calcAge(years2[0]),calcAge(years2[1]),calcAge(years2[years2.length -1])]
console.log(ages);
// function calcAge(birthYear){
//   const age = 2037 - birthYear;
//   return age;
// }

// console.log(calcAge(1983));

// const age1 = calcAge(1990);
// console.log(age1);

// const calcAge2 = function(birthYear){
//   return 2037 - birthYear;
// }

// const age2 = calcAge2(2000);

// console.log(age2)

// const calcAge3 = birthYear => 2037 - birthYear;
// const age3 = calcAge3(1983);
// console.log(age3);

// const yearsUnitilRetirement = (birthYear, firstName) => {
//   const age = 2045 - birthYear;
//   const retirement = 65 - age;
//   return `${firstName} retires in ${retirement} years`;
// }

// console.log(yearsUnitilRetirement(1983,'sagara'));
// console.log(yearsUnitilRetirement(1990,'sagara'));


// function cutFruitPieces(fruit){
//   return fruit * 4;
// }

// function fruitProcessor(apples, oranges){
//   const applePieces = cutFruitPieces(apples);
//   const orangePieces = cutFruitPieces(oranges);

//   const juice = `Juice with ${applePieces} piece of apple and  ${orangePieces} piece of orange.`;
//   return juice;
// }

// console.log(fruitProcessor(2,3));

// const calcAge = function(year){
//   return 2037 - year;
// }

// const yearsUnitilRetirement = function(birthYear, firstName) {
//   const age = calcAge(birthYear);
//   const retirement = 65 - age;

//   if(retirement > 0){
//     console.log(`${firstName} retires in ${retirement} years`);
//     return retirement;

//   }else{
//     console.log(`${firstName} has already retired 🎉`);
//     return -1;
//   }
// }
// console.log(yearsUnitilRetirement(1983,'Sagara'));
// console.log(yearsUnitilRetirement(1950,'Sagara'));

const calcAverage = (a, b , c) => (a + b + c) / 3;
console.log(calcAverage(50,80,46));

let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);

console.log(scoreDolphins, scoreKoalas);

const checkWinner = function(avgDolphins, avgKoalas){
  if(avgDolphins >= 2 * avgKoalas){
    console.log(`Dolphins Win 🏅🏅🏅 (${avgDolphins} vs. ${avgKoalas})`);
  }else if(avgKoalas >= 2 * avgDolphins){
    console.log(`Koalas Win 🏅🏅🏅 (${avgKoalas} vs. ${avgDolphins})`);
  }else{
    console.log(`Draw  (${avgKoalas} vs. ${avgDolphins})`);
  }
}

checkWinner(scoreDolphins, scoreKoalas);
checkWinner(300,110)

 scoreDolphins = calcAverage(85, 41, 54);
 scoreKoalas = calcAverage(23, 27, 32);
 checkWinner(scoreDolphins, scoreKoalas);

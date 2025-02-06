'use strict';


function logger(x){
  console.log('My name is Jonas ' + x  );
}

logger('!');

function fruitsProcessor(apples, oranges){
  console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const mixJuice = fruitsProcessor(2,3);
const appleJuice = fruitsProcessor(5,0);
const orangeJuice = fruitsProcessor(0,5);
console.log(mixJuice);
console.log(appleJuice);
console.log(orangeJuice);

const num = Number('23');
console.log(num)

// let hasDriversLicense = false;
// const passTest = true;

// if(passTest) hasDriversLicense = true;
// if(hasDriversLicense) console.log('I can drive: D');

// const interface = 'Audio';

// const private = 534;
// console.log(window);

console.dir(window.document);

console.log(document.body.innerHTML);

const firstName = "Sagas";
const job = "Web Enginear";
const birthYear = 1983;
const year = 2045;

const sagas = "I'm " + firstName + ', a ' + (year - birthYear) + 'years old ' + job + "!";

console.log(sagas);

const sagasNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}`;

console.log(sagasNew);

console.log('String with \n\
multiple \n\
lines \n\
  ');

  console.log(`
String with
multiple
lines
  `);
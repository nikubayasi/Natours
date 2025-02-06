const jonas = {
  firstName: 'Jonas',
  lastName: 'Scmedtmann',
  birthYear: 1983,
  job: 'teacher',
  friends:['Michael', 'Petter', 'Steven'],
  hasDriverLicense: true,

  // calcAge: function(birthYear){
  //   return 2037 - this.birthYear;
  // },
  calcAge: function(){
    this.age = 2045 - this.birthYear;
    return this.age;
  },
  getSummary: function(){
    return `${this.firstName} is a ${this.calcAge()}-years old ${this.job}, and he has  ${this.hasDriverLicense ? 'a' : 'No'}  drevier's license`;
  }

}
console.log(jonas.calcAge());
console.log(jonas.age);
console.log(jonas.getSummary());

// console.log(jonas['calcAge'](1983));

// const jonasArray =[
//   'Jonas',
//   'Schmedtmann',
//   '2037-1991',
//   'teacher',
//   ['Michael', 'Petter', 'Steven']
// ];

// const jonas = {
//   firstName: 'Jonas',
//   lastName: 'Scmedtmann',
//   age: 2037 - 1991,
//   job: 'teacher',
//   friends:['Michael', 'Petter', 'Steven']
// }

// // const nameKey = jonas['firstName'] + " " + jonas['lastName'];
// const nameKey = "Name";
// console.log(jonas);
// console.log(jonas.lastName);
// console.log(jonas["friends"]);
// console.log(jonas["first"+nameKey]);
// console.log(jonas["last"+nameKey]);

// const interestedIn = prompt("What do you want to know about Jonas? Chose between firstName, lastName, age, job, and friends");
// if(jonas[interestedIn]){
//   console.log(jonas[interestedIn]);
// }else{
//   console.log("Not found");
// }

// jonas.location = 'Tokyo';
// jonas['twitter'] = '@nikubayasi';
// console.log(jonas);
// console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]} `);
import users from './users.js';

const getUsersWithGender = (users, gender) => {
  const usereName = users
    .filter(function (user) {
      return gender === user.gender;
    })
    .map(function (user) {
      return user.name;
    });
  return usereName;
};

console.log(getUsersWithGender(users, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]

// const getAge = users => {
//   return users.map(function (user) {
//     return user.age;
//   });
// };

// console.log(getAge(users));

// const mostAge = (users, age) => {
//   const mAge = users
//     .filter(function (user) {
//       return age < user.age;
//     })
//     .map(function (user) {
//       return user.name;
//     });
//   return mAge;
// };
// console.log(mostAge(users, 30));

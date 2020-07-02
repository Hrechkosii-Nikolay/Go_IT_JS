import users from './users.js';

const getUsersWithFriend = (users, friendName) => {
  return users
    .filter(function (user) {
      return user.friends.includes(friendName);
    })
    .map(function (user) {
      return user.name;
    });
};

console.log(getUsersWithFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]

// const getUsersWithEye = (users, colorEye) => {
//   return users
//     .filter(function (user) {
//       return user.eyeColor.includes(colorEye);
//     })
//     .map(function (user) {
//       return user.name;
//     });
// };

// console.log(getUsersWithEye(users, 'blue'));
// console.log(getUsersWithEye(users, 'brown'));

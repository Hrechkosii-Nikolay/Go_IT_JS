import users from './users.js';

const getNamesSortedByFriendsCount = users => {
  return users
    .sort(function (prev, next) {
      return prev.friends.length - next.friends.length;
    })
    .map(function (user) {
      return user.name;
    });
};

console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]

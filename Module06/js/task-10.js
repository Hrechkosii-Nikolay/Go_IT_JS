import users from './users.js';

const getSortedUniqueSkills = users => {
  const allSkills = users
    .reduce(function (acc, user) {
      acc.push(...user.skills);
      return acc;
    }, [])
    .reduce(function (acc, skill) {
      return acc.includes(skill) ? acc : [...acc, skill];
    }, [])
    .sort();
  return allSkills;
};

console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex',
// 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud',
// 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]

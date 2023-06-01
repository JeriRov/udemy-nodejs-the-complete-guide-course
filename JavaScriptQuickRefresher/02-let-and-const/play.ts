let guestAge = 29;
const hasHobbies = true;
const guestName = 'Max';

guestAge = 30;

function summarizeUser(userName, userAge, userHasHobby) {
  return (
    'Name is ' +
    userName +
    ', age is ' +
    userAge +
    ' and the user has hobbies: ' +
    userHasHobby
  );
}

console.log(summarizeUser(guestName, guestAge, hasHobbies));

export {};

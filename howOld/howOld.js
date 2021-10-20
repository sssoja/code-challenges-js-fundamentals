const howOld = (age, year) => {
  let dateToday = new Date();
  let thisYear = dateToday.getFullYear();
  const yearDifference = year - thisYear;
  const newAge = age + yearDifference;
  if (newAge > age) {
    return `You will be ${newAge} in the year ${year}`;
  } else if (newAge < 0) {
    return `The year ${year} was ${-newAge} years before you were born`;
  } else {
    return `You were ${newAge} in the year ${year}`;
  }
};

console.log(howOld(29, 2022));
console.log(howOld(29, 1991));
console.log(howOld(29, 1992));
console.log(howOld(1, 1992));
console.log(howOld(1, 2050));
console.log(howOld(0, 2021));

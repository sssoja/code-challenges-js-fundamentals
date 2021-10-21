const lifePhase = age => {
  if (age < 0 || age > 140) {
    return "This is not a valid age";
  } else if (age < 4) {
    return "baby";
  } else if (age < 13) {
    return "child";
  } else if (age < 20) {
    return "teen";
  } else if (age < 65) {
    return "adult";
  } else {
    return "senior citizen";
  }
};

console.log(lifePhase(5)); // should return child
console.log(lifePhase(0)); // should return baby
console.log(lifePhase(140)); // senior citizen
console.log(lifePhase(141)); // should return This is not a valid age

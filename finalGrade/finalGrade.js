const finalGrade = (grade1, grade2, grade3) => {
  if (
    grade1 < 0 ||
    grade1 > 100 ||
    grade2 < 0 ||
    grade2 > 100 ||
    grade3 < 0 ||
    grade3 > 100
  ) {
    return "You have entered an invalid grade.";
  }
  let average = (grade1 + grade2 + grade3) / 3;
  if (average < 60) {
    return "F";
  } else if (average < 70) {
    return "D";
  } else if (average < 80) {
    return "C";
  } else if (average < 90) {
    return "B";
  } else {
    return "A";
  }
};

console.log(finalGrade(1, 2, 3)); // should return F
console.log(finalGrade(100, 100, 100)); // should return A
console.log(finalGrade(100, 100, -100)); // should return You have entered an invalid grade.

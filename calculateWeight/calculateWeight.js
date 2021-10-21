const calculateWeight = (earthWeight, planet) => {
  switch (planet) {
    case "Mercury":
      return (earthWeight *= 0.378);

    case "Venus":
      return (earthWeight *= 0.907);

    case "Mars":
      return (earthWeight *= 0.377);

    case "Jupiter":
      return (earthWeight *= 2.36);

    case "Saturn":
      return (earthWeight *= 0.916);

    default:
      return "Invalid Planet Entry. Try: Mercury, Venus, Mars, Jupiter, or Saturn.";
  }
};

console.log(calculateWeight(100, "Jupiter")); // Should print 236
console.log(calculateWeight(0, "Jupiter")); // Should print 0
console.log(calculateWeight(-1, "Jupiter")); // Should print -2.36
console.log(calculateWeight(0, "Saturn")); // Should print 0
console.log(calculateWeight(0.1, "Mercury")); // Should print 0.0378

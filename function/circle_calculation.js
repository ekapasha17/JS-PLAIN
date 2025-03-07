function circle_calculation(radius) {
    const pi = Math.PI;
    return {
      diameter: 2 * radius,
      circumference: 2 * pi * radius,
      area: pi * radius * radius
    };
  }

module.exports = circle_calculation;
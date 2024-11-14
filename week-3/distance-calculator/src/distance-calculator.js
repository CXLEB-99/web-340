// src/distance-calculator.js
"use strict";

function calculateDistance(planet1, planet2) {
  const distances = {
    Mercury: 0.39,
    Venus: 0.72,
    Earth: 1,
    Mars: 1.52,
    Jupiter: 5.2,
    Saturn: 9.58,
    Uranus: 19.18,
    Neptune: 30.07
  };

  if (!distances[planet1] || !distances[planet2]) {
    throw new Error('Invalid planet name');
  }

  return Math.abs(distances[planet1] - distances[planet2]);
}

module.exports = calculateDistance;

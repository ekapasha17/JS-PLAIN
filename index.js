const rectangle_area        = require("./function/rectangle_area");
const circle_calculation    = require("./function/circle_calculation");
const find_third_angle      = require("./function/find_third_angle");
const date_difference       = require("./function/date_difference");
const get_initial           = require("./function/get_initial");

console.log("Rectangle Area (5x3):", rectangle_area(5, 3));
console.log("Circle Calculations (radius 5):", circle_calculation(5));
console.log("Third Angle (80, 65):", find_third_angle(80, 65));
console.log("Date Difference ('2024-03-19', '2024-03-21'):", date_difference("2024-03-19", "2024-03-21"));
console.log("Initials of 'test me':", get_initial("test me"));
/**
 * You are given two interior angles (in degrees) of a triangle.

Write a function to return the 3rd.

Note: only positive integers will be tested.
 */

function otherAngle(a, b) {
   return a <= 0 || b <= 0 ? 'mistake' : 180 - a - b;
}
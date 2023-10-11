/*
You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.

Examples
[2, 4, 0, 100, 4, 11, 2602, 36] -->  11 (the only odd number)

[160, 3, 1719, 19, 11, 13, -21] --> 160 (the only even number)
 */

function findOutlier(integers) {
   return integers.filter(e => e % 2 === 0).length > 1
      ? integers.filter(e => Math.abs(e) % 2 === 1)[0]
      : integers.filter(e => e % 2 === 0)[0]
}

console.log(findOutlier([-175436860,142831124,174785054,-21022353,-191333028,-102242314,-106960964,-138424772,-99142964,165978030,39241324,47282024,7117106,33185842,42280748,178792668,178806144,-75783048,25735816,-8321016,-130374920,-191841350,182200284,31538888,137340438,100953222]))
var a = isNaN('11')
// the value '11' looks like a string, but it’s not, and is converted to a number first, then the isNaN value is returned as false.
var b = isNaN(2-10)
// the value is a number and after comparing the isNaN value is returned as false for this one as well.

console.log(b)
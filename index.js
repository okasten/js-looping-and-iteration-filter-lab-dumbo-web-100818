// Code your solution in this file
function findMatching(array, str){
  array.filter(function (name) {return name.toLowerCase() === str})
}
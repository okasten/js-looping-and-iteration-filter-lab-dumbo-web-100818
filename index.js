// Code your solution in this file
function findMatching(array, str){
  return array.filter(function (name) {return name.toLowerCase() === str})
}
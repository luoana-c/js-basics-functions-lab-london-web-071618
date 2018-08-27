// Code your solution in this file!
function distanceFromHqInBlocks(address) {
  if (address > 42) {
    distance = address - 42
  }
  else {
    distance = 42 - address
  }
  return distance
}

function distanceFromHqInFeet(address) {
  if (address > 42) {
    distance = distanceFromHqInBlocks(address) * 264
  }
  return distance 
}
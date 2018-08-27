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
  distance = distanceFromHqInBlocks(address) * 264
  return distance 
}

function distanceTravelledInFeet(startAddress, endAddress) {
  if (endAddress > startAddress) { 
    distance = (endAddress - startAddress) * 264
  }
  else {
    distance = (startAddress - endAddress) * 264 
  }
  
  return distance 
}

function calculatesFarePrice(start, destination) {
  distance = distanceTravelledInFeet(start, destination)
  
  if (distance <= 400) {
    price = 0
  }
  else if (distance > 400 && distance < 2000) {
    price = 2 * (distance - 400)
  }
  return price
}
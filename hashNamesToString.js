//Given: an array containing hashes of names
//Return: a string formatted as a list of names separated by commas except for the last two names, which should be separated by an ampersand.

function list(names) {
  let newArr = []
  let finalString = ''
  names.forEach(name => {
    newArr.push(name.name)
  })
  
  if(newArr.length === 0) {
  return ''
  }
  if(newArr.length === 1) {
    return newArr[0]
  }
  if(newArr.length <= 2) {
   finalString = newArr[0] + ' & ' + newArr[1]
  }
  if(newArr.length > 2) {
  let length = newArr.length
    newArr.forEach(name => {
      if(length > 2) {
        finalString += `${name}, `
      } else if (length === 2) {
        finalString += `${name} & `
      } else {
        finalString += name
      }
      length--
    })
  }
  return finalString 
}

// Better solution from other coders on codewars.com

function list(names){
  return names.reduce(function(prev, current, index, array){
    if (index === 0){
      return current.name;
    }
    else if (index === array.length - 1){
      return prev + ' & ' + current.name;
    } 
    else {
      return prev + ', ' + current.name;
    }
  }, '');
 }
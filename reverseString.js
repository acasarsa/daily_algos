import {string} from './module.js';

// solve without using str.split('').reverse(str).join('')
const str = string()

function reverse(str) {
  let reversed = ''
  
  for (var i = str.length - 1; i >= 0; i--){
    reversed += str[i]
  }
  console.log(reversed.trim())
  return reversed.trim()
}
reverse(str)
// would be better to see if the beginning was empty space but how to avoid getting rid of intended white space?
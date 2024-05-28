function areThereDuplicates(...args) {
const frequencyCounter = {};

  
  for (const arg of args) {
const key = String(arg);

    frequencyCounter[key] = (frequencyCounter[key] || 0) + 1;

    if (frequencyCounter[key] > 1) {
      return true;
    }
  }

 

  return false;
}




console.log(areThereDuplicates(1,2, 4, 2, 6));

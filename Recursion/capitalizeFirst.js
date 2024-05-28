function capitalizeFirst(words, index = 0) {

  if (index === words.length) {
    return words;
  }

 
  words[index] = words[index][0].toUpperCase() + words[index].substr(1);

  
  return capitalizeFirst(words, index + 1);
}

console.log(capitalizeFirst(["car", "taco", "banana"]));




function capitalizeFirst(words) {
        const capitalizedWords = [];
         for (let i = 0; i < words.length; i++) {
          const word = words[i];
         const capitalizedWord = word[0].toUpperCase() + word.substr(1);
     capitalizedWords.push(capitalizedWord);
        }
        return capitalizedWords;
    }

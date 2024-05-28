function capitalizeWord(words, index = 0) {
  if (index === words.length) {
    return words;
  }

  

    words[index] = words[index].toUpperCase()

  return capitalizeWord(words, index + 1);
}



console.log(capitalizeWord(["car", "taco", "banana"]));

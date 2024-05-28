function findDuplicateWords(sentence) {
  // Split the sentence into words
  const words = sentence.split(" ");
  const freq = {};

  
 for(word of words){
freq[word]=(freq[word]||0)+1
 }


  const duplicates = [];
  for (const word in freq) {
    if (freq[word] > 1) {
      duplicates.push(word);
    }
  }

  return duplicates;
}

const sentence =
  "the quick brown fox jumps over the lazy dog the quick brown fox";
console.log(findDuplicateWords(sentence)); 

function PascalCase(word, index = 0, result = "") {
  if (index >= word.length) {
    return result;
  }

  if (index === 0 && word[index] !== word[index].toUpperCase()) {
    return "The string is not PascalCase";
  }

  if (index > 0 && word[index] === word[index].toUpperCase()) {
    result += "_";
  }

  result += word[index].toLowerCase();

  return PascalCase(word, index + 1, result);
}

let str = "PascalCaseStringNumber";

console.log(PascalCase(str));

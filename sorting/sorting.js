

console.log(["Akhil", "jagadish", "Abhinav", "priya"].sort(comparebylength));

function comparebylength(str1, str2) {
  return str1.length - str2.length;
}

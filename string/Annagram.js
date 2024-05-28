

                            //O(n)

function Annagram(string1, string2) {
  if (string1.length !== string2.length) {
    return false;
  }

  const freq1 = {};
  const freq2 = {};

  const Arr1 = string1.split("");
  const Arr2 = string2.split("");

  for (let n of Arr1) {
    freq1[n] = (freq1[n] || 0) + 1;
  }
  for (let n of Arr2) {
    freq2[n] = (freq2[n] || 0) + 1;
  }

  for (const key in freq1) {
    if (freq1[key] !== freq2[key]) {
      return false;
    }
  }
  return true;
}

console.log(Annagram("Akkhil", "Akklhi"));

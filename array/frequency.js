let arr = [3, 1, 3, 4, 2];

const freq = {};

for (let n of arr) {
  freq[n] = (freq[n] || 0) + 1;
}


for (let n in freq) {
  if (freq[n] >= 2) {
    console.log(`${n} occurs ${freq[n]} times`);
  }
}



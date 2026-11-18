const letters = new Set(["a","b","c"])

letters.add("a");
letters.add('Q')
letters.add('q')

let answer = letters.has ("q");


console.log(answer);
const loopyLighthouse = (range, multiples, words) => {
  for (let x = range[0]; x <= range[1]; x++) {
    let firstMultiple = x % multiples[0];
    let secondMultiple = x % multiples[1];
    if (firstMultiple === 0 && secondMultiple === 0) { console.log(words[0] + words[1]); }
    else if (firstMultiple === 0) { console.log(words[0]); }
    else if (secondMultiple === 0) { console.log(words[1]); }
    else
      (console.log(x));
  }
}



loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);



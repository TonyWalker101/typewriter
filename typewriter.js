const process = require("process");

const sentence = "hello there from lighthouse labs";

let timer = 1000;

for (let char = 0; char < sentence.length; char++) {

  setTimeout(() => {
    process.stdout.write(sentence[char]);
    if (char === sentence.length - 1) {
      process.stdout.write("\n");
    }
  }, timer);
  
  timer += 50;
}
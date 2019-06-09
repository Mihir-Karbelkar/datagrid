const solution = require("./Solution");
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout
});

function greet() {
  readline.question(
    `Enter any four numbers to test whether they follow the pattern or q to quit\n`,
    input => {
      if (input == "q") {
        console.log("Thanks");
        readline.close();
      } else {
        let count = 0,
          arr,
          newArr = [];
        arr = input.trim().split(" ");
        arr.forEach(item => {
          if (parseInt(item)) newArr.push(parseInt(item));
        });
        if (newArr.length != 4) {
          console.log("I want four numbers");
          greet();
        } else {
          console.log(solution(newArr[0], newArr[1], newArr[2], newArr[3]));
          greet();
        }
      }
    }
  );
}
greet();

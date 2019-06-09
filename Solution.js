class Solution {
  constructor(a, b, c, d) {
    this.a = a;
    this.b = b;
    this.c = c;
    this.d = d;
  }
  // Checks for (a, a+b) recursively
  static valueCheckerOne(a, b, c, d) {
    if (a == c && b == d) {
      return true;
    } else if (Math.abs(a) > Math.abs(c) || Math.abs(b) > Math.abs(d)) {
      return false;
    } else {
      return Solution.valueCheckerOne(a, a + b, c, d);
    }
  }
  // Checks for (a+b, a) recursively
  static valueCheckerTwo(a, b, c, d) {
    if (a == c && b == d) {
      return true;
    } else if (Math.abs(a) > Math.abs(c) || Math.abs(b) > Math.abs(d)) {
      return false;
    } else {
      return Solution.valueCheckerTwo(a + b, b, c, d);
    }
  }
  // Checks both (a+b,a) and (a,a+b)
  static answer(a, b, c, d) {
    if (a && b && c && d) {
      if (a == 0 && b == 0 && (c != 0 || d != 0)) return false;
      return (
        Solution.valueCheckerOne(a, b, c, d) ||
        Solution.valueCheckerTwo(a, b, c, d)
      );
    }
  }
  // Checks for (a+b,a) and (a,a+b) after object creation
  answer() {
    return Solution.answer(this.a, this.b, this.c, this.d);
  }
}
// Just for functionality using command line arguments
let args = [];
for (let i = 2; i < 6; i++) {
  if (process.argv[i]) args.push(parseInt(process.argv[i]));
}
if (args.length == 4) {
  console.log(Solution.answer(args[0], args[1], args[2], args[3]));
}
// Only exporting the static function
module.exports = Solution.answer;

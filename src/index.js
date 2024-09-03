module.exports = function check(str, bracketsConfig) {
  let open = [];
  let close = [];
  let stack = [];
  let pair = {};

  for (let i = 0; i < bracketsConfig.length; i++) {
    open.push(bracketsConfig[i][0]);
    close.push(bracketsConfig[i][1]);
  }

  for (let k = 0; k < open.length; k++){
    pair[close[k]] = open[k];
     }
    // console.log(open)
    // console.log(pair)
 

  for (let j = 0; j < str.length; j++) {
    let curr = str[j];
    if (open.includes(curr)) {
      stack.push(curr);
    } else {

      let top = stack[stack.length - 1];
      if (pair[curr] == top) {
        stack.pop();
      } else {
        return false;
      }
    }
  }

  return stack.length === 0;
};

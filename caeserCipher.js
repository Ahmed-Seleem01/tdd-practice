function caeserCipher(str, key) {
  let str1 = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i].match(/[a-z]/)) {
      let shiftedLetter = ((str.charCodeAt(i) - 97 + key) % 26) + 97;
      let temp = String.fromCharCode(shiftedLetter);
      str1 += temp;
    } else if (str[i].match(/[A-Z]/)) {
      let shiftedLetter = ((str.charCodeAt(i) + key - 65) % 26) + 65;
      let temp = String.fromCharCode(shiftedLetter);
      str1 += temp;
    } else {
      str1 += str[i];
    }
  }
  return str1;
}

console.log(caeserCipher("Zbc123//;", 1));

export default caeserCipher;

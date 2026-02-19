export function caesarCipher(string, shift) {
  const alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  let cipherArr = [];
  const lettersArr = string.split("");
  lettersArr.forEach((letter) => {
    let startIndex = alphabet.indexOf(letter);
    let finalIndex = findFinalIndex(startIndex, shift);
    cipherArr.push(alphabet[finalIndex]);
  });

  function findFinalIndex(startIndex, shift) {
    let finalIndex = startIndex + shift;
    if (finalIndex > alphabet.length - 1) {
      let newIndex = 0;
      let newShift = finalIndex - (alphabet.length - 1) - 1;
      return findFinalIndex(newIndex, newShift);
    }
    return finalIndex;
  }

  return cipherArr.join("");
}

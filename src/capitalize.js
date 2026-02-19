export function capitalize(string) {
  let strAsArr = string.split("");
  let firstLetter = strAsArr.shift();
  return firstLetter.toUpperCase() + strAsArr.join("");
}

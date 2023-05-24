export function toCapitalize(string) {
  if (typeof string !== "string") {
    return "";
  }
  const newString = string.split("");
  newString.splice(0, 1, newString[0].toUpperCase());
  return newString.join("");
}

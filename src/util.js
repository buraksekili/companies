export const inputCheck = (language) => {
  if (!language || language === "" || language.trim() === "") {
    console.log("lang? ", language);
    return "You need to specify a language";
  }
  return false;
};

// https://stackoverflow.com/questions/63424197/javascript-transfer-all-letters-in-string-into-uppercase-or-lowercase
export function convertString(phrase) {
  const maxLength = 100;

  let returnString = phrase.toLowerCase();
  //Convert Characters
  returnString = returnString.replace(/ö/g, "o");
  returnString = returnString.replace(/ç/g, "c");
  returnString = returnString.replace(/ş/g, "s");
  returnString = returnString.replace(/ı/g, "i");
  returnString = returnString.replace(/ğ/g, "g");
  returnString = returnString.replace(/ü/g, "u");

  // if there are other invalid chars, convert them into blank spaces
  returnString = returnString.replace(/[^a-z0-9\s-]/g, "");
  // convert multiple spaces and hyphens into one space
  returnString = returnString.replace(/[\s-]+/g, " ");
  // trims current string
  returnString = returnString.replace(/^\s+|\s+$/g, "");
  // cuts string (if too long)
  if (returnString.length > maxLength)
    returnString = returnString.substring(0, maxLength);
  // add hyphens
  returnString = returnString.replace(/\s/g, "-");
  return returnString;
}

export const joinString = (sep, ...strings) => {
  let joinedString = "";
  let index = 0;
  for (const string of strings) {
    if (index === 0) {
      joinedString = joinedString + string;
      index += 1;
    } else {
      joinedString = joinedString + sep + string;
      index += 1;
    }
  }

  return joinedString;
}

export const omitString = (string, maxStringLength) => {
  let omittedString = "";
  if (string.length > maxStringLength) {
    omittedString = string.slice(0, maxStringLength + 1);
    return joinString("", omittedString, "...");
  } else {
    return string;
  }
}

export const stringHandler = {
  joinString, omitString
}
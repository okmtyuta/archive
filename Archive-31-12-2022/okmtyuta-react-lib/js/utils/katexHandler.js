import { Katex } from "../../components/atoms/katex/Katex";

export const replaceStarterAndEnder = (inputString, initialStarter, initialEnder, starter, ender) => {
  let result = []
  let splittedStringByStarterAndEnder = []
  const splittedStringsByInitialStarter = inputString.split(initialStarter); // :array
  for (let splittedString of splittedStringsByInitialStarter) {
    splittedStringByStarterAndEnder = [...splittedStringByStarterAndEnder, ...splittedString.split(initialEnder)]
  }
  let shouldAddStarterAndEnder = false;
  for (let splittedString of splittedStringByStarterAndEnder) {
    if (shouldAddStarterAndEnder) {
      result.push(joinString("", starter, splittedString, ender))
      shouldAddStarterAndEnder = false;
    } else {
      result.push(splittedString);
      shouldAddStarterAndEnder = true;
    }
  }
  return result;
}

export const replaceKatexDollar = (inputString) => {
  let result = []
  const splittedStringsByDollar = inputString.split(`$`); // :array
  let shouldAddKatexTag = false;
  for (let splittedString of splittedStringsByDollar) {
    if (shouldAddKatexTag) {
      result.push((
      <Katex>
        {splittedString}
      </Katex>
      ))
      shouldAddKatexTag = false;
    } else {
      result.push(splittedString);
      shouldAddKatexTag = true;
    }
  }
  return result;
}

export const replaceKatexEnvironment = (inputString, environment, isDisplay=true) => {
  let result = []
  let splittedStringByStarterAndEnder = []
  const splittedStringsByInitialStarter = inputString.split(`\\begin{${environment}}`); // :array
  for (let splittedString of splittedStringsByInitialStarter) {
    splittedStringByStarterAndEnder = [...splittedStringByStarterAndEnder, ...splittedString.split(`\\end{${environment}}`)]
  }
  let shouldAddStarterAndEnder = false;
  for (let splittedString of splittedStringByStarterAndEnder) {
    if (shouldAddStarterAndEnder) {
      result.push((
      <Katex display={isDisplay} >
        {`\\begin{${environment}}${splittedString}\\end{${environment}}`}
      </Katex>
      ))
      shouldAddStarterAndEnder = false;
    } else {
      result.push(splittedString);
      shouldAddStarterAndEnder = true;
    }
  }
  return result;
}
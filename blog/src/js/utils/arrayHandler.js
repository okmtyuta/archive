import { joinString } from "./index"

export const gridRatioArrayToProp = (gridRatios) => {
  return joinString(" ", ...gridRatios);
}

export const equalOrContain = (target, keyword) => {
  if (typeof(target) === "string") {
    return target === keyword;
  } else if (typeof(target) === "object") {
    return target.includes(keyword)
  } else {
    console.assert(`${target} is not a string or Array.`)
  }
}

export const toArray = (target) => {
  if (typeof(target) === "string") {
    return [target]
  } else if (typeof(target) === "object") {
    return target
  } else {
    console.assert(`Type of ${target} can not be handled by toArray function.`)
  }
}
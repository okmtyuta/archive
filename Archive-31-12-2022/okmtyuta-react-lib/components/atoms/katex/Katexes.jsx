import { ulid } from "ulid";
import { replaceKatexEnvironment, replaceKatexDollar } from "../../../js/utils";
import { autoRenderingEnvironments } from "../../../config/katex";

const dollarProcess = (katexSegments) => {
  let processedArray = [];
  
  for (let katexSegment of katexSegments) {
    if (typeof(katexSegment) !== "string") {
      processedArray.push(katexSegment);
      continue;
    }

    processedArray = [...processedArray, ...replaceKatexDollar(katexSegment)]
  }

  return processedArray;
}

const environmentProcess = (katexSegments, environment, isDisplay) => {
  let processedArray = [];

  for (let katexSegment of katexSegments) {
    if (typeof(katexSegment) !== "string") {
      processedArray.push(katexSegment);
      continue;
    }
    processedArray = [...processedArray, ...replaceKatexEnvironment(katexSegment, environment, isDisplay)]
  }
  return processedArray;
}

const katexAutoRender = (katexSegments) => {
  const dollarProcessed = dollarProcess(katexSegments);
  let environmentProcessed = dollarProcessed;
  for (let katexEnvironment of autoRenderingEnvironments) {
    environmentProcessed = environmentProcess(environmentProcessed, katexEnvironment, true)
  }

  return environmentProcessed;
}


export const Katexes = (props) => {
  let childrenSegments = props.children;
  if (!childrenSegments) {
    childrenSegments = ""
  }

  let katexSegments = []

  if (typeof(childrenSegments) === "string") {
    katexSegments = [childrenSegments];
  } else if (typeof(childrenSegments) === "object") {
    katexSegments = childrenSegments;
  }


  return (
    <div>
      {katexAutoRender(katexSegments).map((katexSegment) => {
        return (
          <span key={ulid()}>{katexSegment}</span>
        )
      })}
    </div>
  )
}
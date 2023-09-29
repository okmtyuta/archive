import { useEffect } from 'react';
import katex from 'katex';
import { ulid } from 'ulid';
import { macros } from '../../../config';
import { KatexDisplay } from './KatexDisplay';
import { joinString } from '../../../js/utils';

export const Katex = (props) => {
  const identifier = ulid();

  let isDisplay = props.isDisplay;
  if (!isDisplay) {
    isDisplay = false;
  } 
  let isThrowError = props.throwError;
  if (!isThrowError) {
    isThrowError = true;
  }

  useEffect(() => {
    let renderElement = document.getElementById(identifier);
    
    katex.render(String(joinString("", ...props.children)), renderElement, {
      throwOnError: isThrowError,
      displayMode: isDisplay,
      macros
    }, []);
  })

  const displayMath = (
    <KatexDisplay id={identifier} padding={props.padding} paper={props.paper} margin={props.margin} forKatex={true} />
  );
  const inlineMath = (
    <span id={identifier} />
  );

  return (
    isDisplay ? displayMath : inlineMath
  );
}
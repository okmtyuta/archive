export function classNames(
  ...classes: Array<string | { [key: string]: boolean } | undefined>
) {
  const names: string[] = []
  for (const cls of classes) {
    if (!cls || cls === '') {
      continue
    }
    if (typeof cls === 'string') {
      names.push(cls)
    } else {
      Object.entries(cls).forEach(([k, v]) => {
        //eslint-disable-next-line no-extra-boolean-cast
        if (Boolean(v)) {
          names.push(k)
        }
      })
    }
  }
  // classes.forEach((c) => {
  //   if (!c || c === '') {
  //     return
  //   } else if (typeof c === 'string') {
  //     names.push(c)
  //   } else {
  //     Object.entries(c).forEach(([k, v]) => {
  //       //eslint-disable-next-line no-extra-boolean-cast
  //       if (Boolean(v)) {
  //         names.push(k)
  //       }
  //     })
  //   }
  // })
  return names.join(' ')
}

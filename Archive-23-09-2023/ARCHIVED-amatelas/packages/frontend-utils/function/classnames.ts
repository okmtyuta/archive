export function classNames(...classes: Array<string | { [key: string]: boolean } | undefined>) {
  const names: string[] = []
  classes.map((c) => {
    if (typeof c === 'string') {
      names.push(c)
    } else if (!c) {
      names.push('')
    } else {
      Object.entries(c).forEach(([k, v]) => {
        if (Boolean(v)) {
          names.push(k)
        }
      })
    }
  })
  return names.join(' ')
}

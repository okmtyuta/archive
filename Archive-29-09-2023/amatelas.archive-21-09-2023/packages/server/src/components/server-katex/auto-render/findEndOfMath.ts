/**
 *
 * @param delimiter: string 数式モードを識別するためのタグ。一般に$を使用する。
 * @param text: string レンダリング対象のテキスト
 * @param startIndex: number 開始インデックス
 * @returns :number
 */
export const findEndOfMath = (delimiter: string, text: string, startIndex: number): number => {
  let index = startIndex
  let braceLevel = 0

  const delimLength = delimiter.length

  while (index < text.length) {
    const character = text[index]

    if (braceLevel <= 0 && text.slice(index, index + delimLength) === delimiter) {
      return index
    } else if (character === '\\') {
      index++
    } else if (character === '{') {
      braceLevel++
    } else if (character === '}') {
      braceLevel--
    }

    index++
  }

  return -1
}

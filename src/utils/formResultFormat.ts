const formResultFormat = (target: string | object | number | null | undefined) => {
  if (!target) return null
  if (target instanceof Array) {
    const array = Array.from(target)
    return array.join('、')
  }
  return String(target)
}

export default formResultFormat

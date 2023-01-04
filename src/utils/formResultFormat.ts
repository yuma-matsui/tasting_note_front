const formResultFormat = (target: string | string[] | number | null | undefined) => {
  if (!target) return null
  if (target instanceof Array) return target.join('、')
  return String(target)
}

export default formResultFormat

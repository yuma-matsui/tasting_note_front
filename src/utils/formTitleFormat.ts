const formTitleFormat = (type: string) => {
  switch (type) {
    case 'appearance':
      return '外観'
    case 'flavor':
      return '香り'
    case 'taste':
      return '味わい'
    case 'conclusion':
      return 'まとめ'
    default:
      throw new Error('不正な呼び出し方です。')
  }
}

export default formTitleFormat

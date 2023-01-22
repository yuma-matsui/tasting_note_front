import { TastingSheetFormType } from '../types'

const formTitleFormat = (type: TastingSheetFormType) => {
  switch (type) {
    case 'appearance':
      return '外観'
    case 'flavor':
      return '香り'
    case 'taste':
      return '味わい'
    case 'conclusion':
      return 'まとめ'
    case 'setting':
      return '設定'
    case 'confirmation':
      return 'あなたの回答'
    default:
      throw new Error('不正な呼び出し方です。')
  }
}

export default formTitleFormat

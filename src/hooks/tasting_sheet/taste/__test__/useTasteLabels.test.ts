import { renderHook } from '@testing-library/react'

import useTasteLabels from '../useTasteLabels'
import { WineColor } from '../../../../types'

const setUp = (color: WineColor) => {
  const { result } = renderHook(() => useTasteLabels(color))

  return result.current
}

describe('useTasteLabels', () => {
  describe('colorがredの場合', () => {
    test('赤ワイン用のラベルコレクションを返す', () => {
      const labels = setUp('red')
      expect(labels).toMatchObject([
        {
          name: 'attack',
          heading: 'アタック',
          labels: ['軽い', 'やや軽い', 'やや強い', '強い', 'インパクトのある'],
          subHeading: undefined
        },
        {
          name: 'sweetness',
          heading: '甘み',
          labels: ['ドライ', 'ソフトな', 'まろやかな', '豊かな', '残糖がある'],
          subHeading: '(アルコールのボリューム感も含む)'
        },
        {
          name: 'acidity',
          heading: '酸味',
          labels: ['なめらかな', '豊かな', '爽やかな', '生き生きとした', 'シャープな', '堅い', '厳しい', '攻撃的な'],
          subHeading: '弱→強'
        },
        {
          name: 'astringent',
          heading: 'タンニン分',
          labels: [
            'サラサラとした',
            'シルキーな',
            'ヴィロードのような',
            '溶け込んだ',
            '緻密',
            '力強い',
            '収斂性のある'
          ],
          subHeading: '弱→強'
        },
        {
          name: 'balance',
          heading: 'バランス',
          labels: [
            'スマートな',
            '骨格のしっかりとした',
            '固い',
            '痩せた、渇いた',
            'ジューシーな',
            '豊満な',
            '力強い',
            '流れるような',
            'ふくよかな'
          ],
          subHeading: '左上/右上/下'
        },
        {
          name: 'alcohol',
          heading: 'アルコール',
          labels: ['軽い', 'やや軽め', '中程度', 'やや強め', '強い', '熱さを感じる'],
          subHeading: undefined
        },
        {
          name: 'afterTaste',
          heading: '余韻',
          labels: ['短い', 'やや短い', 'やや長い', '長い'],
          subHeading: undefined
        }
      ])
    })
  })
  describe('colorがwhiteの場合', () => {
    test('白ワイン用のラベルコレクションを返す', () => {
      const labels = setUp('white')
      expect(labels).toMatchObject([
        {
          name: 'attack',
          heading: 'アタック',
          labels: ['軽い', 'やや軽い', 'やや強い', '強い', 'インパクトのある'],
          subHeading: undefined
        },
        {
          name: 'sweetness',
          heading: '甘み',
          labels: ['ドライ', 'ソフトな', 'まろやかな', '豊かな', '残糖がある'],
          subHeading: '(アルコールのボリューム感も含む)'
        },
        {
          name: 'acidity',
          heading: '酸味',
          labels: ['なめらかな', '爽やかな', '溌剌とした', 'シャープな', '堅い', '力強い', '厳しい', '攻撃的な'],
          subHeading: '弱→強'
        },
        {
          name: 'bitterness',
          heading: '苦味',
          labels: ['控えめ', '穏やかな', 'コク(深み)を与える', '旨味をともなった', '強い(突出した)'],
          subHeading: undefined
        },
        {
          name: 'balance',
          heading: 'バランス',
          labels: [
            'スムースな',
            'コンパクトな',
            'スリムな',
            'ドライな',
            'ジューシーな',
            '豊潤な',
            '厚みのある',
            'まろやかな',
            'ふくよかな',
            'ねっとりした'
          ],
          subHeading: '左上/右上/下'
        },
        {
          name: 'alcohol',
          heading: 'アルコール',
          labels: ['軽い', 'やや軽め', '中程度', 'やや強め', '強い', '熱さを感じる'],
          subHeading: undefined
        },
        {
          name: 'afterTaste',
          heading: '余韻',
          labels: ['短い', 'やや短い', 'やや長い', '長い'],
          subHeading: undefined
        }
      ])
    })
  })
})

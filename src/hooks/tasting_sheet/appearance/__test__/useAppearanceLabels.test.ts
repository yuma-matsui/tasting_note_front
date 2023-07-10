import { renderHook } from '@testing-library/react'

import { WineColor } from '../../../../types'
import useAppearanceLabels from '../useAppearanceLabels'

const setUp = (color: WineColor) => {
  const { result } = renderHook(() => useAppearanceLabels(color))

  return result.current
}

describe('useAppearanceLabels', () => {
  describe('colorがredの場合', () => {
    test('赤ワイン用のラベルコレクションを返す', () => {
      const labels = setUp('red')
      expect(labels).toMatchObject([
        {
          name: 'clarity',
          heading: '清澄度',
          labels: ['澄んだ', '深みのある', 'やや濁った', '濁った'],
          subHeading: undefined
        },
        {
          name: 'brightness',
          heading: '輝き',
          labels: ['輝きのある', '艶のある', 'モヤがかった'],
          subHeading: undefined
        },
        {
          name: 'appearanceColors',
          heading: '色調',
          labels: [
            '紫がかった',
            'オレンジがかった',
            '黒みを帯びた',
            '縁が明るい',
            'ルビー(ラズベリーレッド)',
            'ガーネット(ダークチェリーレッド)',
            'トパーズ',
            'マホガニー',
            'レンガ'
          ],
          subHeading: '補助用語/メイン'
        },
        {
          name: 'intensity',
          heading: '濃淡',
          labels: ['無色に近い', '明るい', 'やや明るい', 'やや濃い', '濃い', '非常に濃い'],
          subHeading: undefined
        },
        {
          name: 'consistency',
          heading: '粘性',
          labels: ['さらっとした', 'やや軽い', 'やや強い', '強い'],
          subHeading: undefined
        },
        {
          name: 'appearanceImpressions',
          heading: '外観の印象',
          labels: [
            '若々しい',
            '若い状態を抜けた',
            'やや熟成した',
            '熟成した',
            '酸化熟成のニュアンス',
            '酸化が進んだ',
            '軽快な',
            '成熟度が高い',
            '濃縮感が強い'
          ],
          subHeading: '若さ/成熟度'
        }
      ])
    })
  })

  describe('colorがwhiteの場合', () => {
    test('白ワイン用のラベルコレクションを返す', () => {
      const labels = setUp('white')
      expect(labels).toMatchObject([
        {
          name: 'clarity',
          heading: '清澄度',
          labels: ['澄んだ', 'やや濁った', '濁った'],
          subHeading: undefined
        },
        {
          name: 'brightness',
          heading: '輝き',
          labels: ['輝きのある', '落ち着いた', 'モヤがかった'],
          subHeading: undefined
        },
        {
          name: 'appearanceColors',
          heading: '色調',
          labels: [
            'グリーンがかった',
            '黄金色がかった',
            'レモンイエロー',
            'イエロー',
            '黄金色',
            'トパーズ',
            'オレンジ',
            'アンバー'
          ],
          subHeading: '補助用語/メイン'
        },
        {
          name: 'intensity',
          heading: '濃淡',
          labels: ['無色に近い', '淡い', 'やや濃い', '濃い', '非常に濃い'],
          subHeading: undefined
        },
        {
          name: 'consistency',
          heading: '粘性',
          labels: ['さらっとした', 'やや軽い', 'やや強い', '強い'],
          subHeading: undefined
        },
        {
          name: 'appearanceImpressions',
          heading: '外観の印象',
          labels: [
            '若々しい',
            'やや発展した',
            '熟成のニュアンスが見える',
            '熟成した',
            '酸化が進んだ',
            '軽快な',
            '成熟度が高い',
            '濃縮感がある'
          ],
          subHeading: '若さ/成熟度'
        }
      ])
    })
  })
})

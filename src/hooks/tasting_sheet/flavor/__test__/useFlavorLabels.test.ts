import { renderHook } from '@testing-library/react'

import useFlavorLabels from '../useFlavorLabels'
import { WineColor } from '../../../../types'

const setUp = (color: WineColor) => {
  const { result } = renderHook(() => useFlavorLabels(color))

  return result.current
}

describe('useFlavorLabels', () => {
  describe('colorがredの場合', () => {
    test('赤ワイン用のラベルコレクションを返す', () => {
      const labels = setUp('red')
      expect(labels).toMatchObject([
        {
          heading: '第一印象',
          labels: [
            '閉じている',
            '控えめ',
            '開いている',
            '強い',
            'チャーミングな',
            '華やかな',
            '濃縮感がある',
            '深みのある',
            '複雑な'
          ],
          name: 'flavorFirstImpressions',
          subHeading: '強さ/性質'
        },
        {
          heading: '果実',
          labels: [
            'イチゴ',
            'ラズベリー',
            'ブルーベリー',
            'カシス',
            'ブラックベリー',
            'ブラックチェリー',
            '干しプラム',
            '乾燥イチジク'
          ],
          name: 'flavorFruits',
          subHeading: '熟成度低→高'
        },
        {
          heading: '花・植物',
          labels: [
            'バラ',
            'スミレ',
            '牡丹',
            'ゼラニウム',
            'ピーマン',
            'トマト',
            '黒オリーブ',
            'メントール',
            'シダ',
            'ローリエ',
            '杉',
            '針葉樹',
            'ユーカリ',
            'ドライハーブ',
            'タバコ',
            '紅茶',
            'スーボア',
            'キノコ',
            'トリュフ',
            '土'
          ],
          name: 'flavorFlowers',
          subHeading: '花/植物/ドライ/菌類'
        },
        {
          heading: '香辛料・芳香・化学物質',
          labels: [
            '黒胡椒',
            '丁子',
            'シナモン',
            'ナツメグ',
            '甘草',
            'ヴァニラ',
            'ロースト',
            'コーヒー',
            'チョコレート',
            '煙、薫製',
            '動物的なニュアンス',
            '鉄分',
            '生肉',
            'グリエ',
            '乾いた肉',
            'なめし皮',
            '樹脂',
            'ヨード',
            'ランシオ'
          ],
          name: 'flavorSpices',
          subHeading: '香辛料/樽/動物/他'
        },
        {
          heading: '香りの印象',
          labels: [
            '若々しい',
            '嫌気的な',
            '熟成感が現れている',
            '酸化熟成の段階にある',
            '酸化した',
            '第1アロマが強い',
            '第2アロマが強い',
            'ニュートラル',
            '木樽からのニュアンス'
          ],
          name: 'flavorImpressions',
          subHeading: '熟成感/特性'
        }
      ])
    })
  })

  describe('colorがwhiteの場合', () => {
    test('白ワイン用のラベルコレクションを返す', () => {
      const labels = setUp('white')
      expect(labels).toMatchObject([
        {
          heading: '第一印象',
          labels: [
            '閉じている',
            '控えめ',
            '開いている',
            '力強い',
            'フレッシュな',
            'チャーミングな',
            '華やかな',
            '濃縮感がある',
            '深みのある',
            '複雑な'
          ],
          name: 'flavorFirstImpressions',
          subHeading: '強さ/性質'
        },
        {
          heading: '果実',
          labels: [
            '柑橘類',
            '青リンゴ',
            'リンゴ',
            '洋梨',
            'マスカット',
            '花梨',
            'パッションフルーツ',
            '白桃',
            'アプリコット',
            'パイナップル',
            'ライチ',
            'バナナ',
            'マンゴー'
          ],
          name: 'flavorFruits',
          subHeading: '熟成度低→高'
        },
        {
          heading: '花・植物',
          labels: [
            'スイカズラ',
            'アカシア',
            '白バラ',
            'キンモクセイ',
            '菩提樹',
            'ミント',
            'アニス',
            'ヴェルヴェーヌ',
            '草のような',
            'タイム',
            'フレッシュアーモンド',
            'ヘーゼルナッツ'
          ],
          name: 'flavorFlowers',
          subHeading: '花/植物/ドライ/菌類'
        },
        {
          heading: '香辛料・芳香・化学物質',
          labels: [
            '石灰',
            '火打石',
            '貝殻',
            '鉱物',
            '海の香り',
            'トースト',
            'ヴァニラ',
            '煙、薫製',
            'シナモン',
            '白胡椒',
            'コリアンダー',
            '丁子',
            '香木',
            'お香',
            '白檀',
            'ジンジャーブレッド',
            '硫黄',
            'パン・ド・ミ',
            '乳製品',
            'フェノール',
            '麝香',
            '花の蜜',
            '蜂蜜',
            '蜜蝋'
          ],
          name: 'flavorSpices',
          subHeading: '香辛料/樽/動物/他'
        },
        {
          heading: '香りの印象',
          labels: [
            '若々しい',
            '嫌気的な',
            '発展的な',
            '熟成感が現れている',
            '酸化熟成の段階',
            '第1アロマが強い',
            '第2アロマが強い',
            'ニュートラル',
            '木樽からのニュアンス',
            '成熟度が高い',
            '複雑性のある'
          ],
          name: 'flavorImpressions',
          subHeading: '熟成感/特性'
        }
      ])
    })
  })
})

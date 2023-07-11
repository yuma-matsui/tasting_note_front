import { renderHook } from '@testing-library/react'

import { WineColor } from '../../../types'
import useTastingSheetLabels from '../useTastingSheetLabels'

describe('useTastingSheetLabels', () => {
  let color: WineColor
  beforeEach(() => {
    color = 'red'
  })

  test('要素数が4つの配列が返る', () => {
    const { result } = renderHook(() => useTastingSheetLabels(color))

    expect(result.current.length).toEqual(4)
  })

  test('colorがredの場合', () => {
    const { result } = renderHook(() => useTastingSheetLabels(color))

    expect(result.current).toMatchObject([
      {
        items: [
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
        ],
        options: [],
        type: 'appearance'
      },
      {
        items: [
          {
            name: 'flavorFirstImpressions',
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
            subHeading: '強さ/性質'
          },
          {
            name: 'flavorFruits',
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
            subHeading: '熟成度低→高'
          },
          {
            name: 'flavorFlowers',
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
            subHeading: '花/植物/ドライ/菌類'
          },
          {
            name: 'flavorSpices',
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
            subHeading: '香辛料/樽/動物/他'
          },
          {
            name: 'flavorImpressions',
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
            subHeading: '熟成感/特性'
          }
        ],
        options: [],
        type: 'flavor'
      },
      {
        items: [
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
        ],
        options: [],
        type: 'taste'
      },
      {
        items: [
          {
            name: 'evaluation',
            heading: '評価',
            labels: [
              'シンプル、フレッシュ感を楽しむ',
              'エレガントで余韻の長い',
              '成熟度が高く豊か',
              '濃縮し力強い',
              '複雑性があり引き締まった'
            ],
            subHeading: '軽→重'
          },
          {
            name: 'optimumTemperature',
            heading: '適正温度',
            labels: ['10度未満', '10〜13度', '14〜16度', '17〜20度', '21度以上'],
            subHeading: undefined
          },
          {
            name: 'glass',
            heading: 'グラス',
            labels: ['小ぶり', '中庸', '大ぶり'],
            subHeading: undefined
          },
          {
            name: 'decantage',
            heading: 'デカンタージュ',
            labels: ['必要なし', '事前(30分前)', '事前(60分前)', '事前(1時間以上前)'],
            subHeading: undefined
          }
        ],
        options: [
          {
            name: 'vintage',
            heading: '収穫年',
            labels: [
              '2022',
              '2021',
              '2020',
              '2019',
              '2018',
              '2017',
              '2016',
              '2015',
              '2014',
              '2013',
              '2012',
              '2011',
              '2010',
              '2009',
              '2008',
              '2007',
              '2006',
              '2005',
              '2004',
              '2003',
              '2002',
              '2001',
              '2000',
              '1999',
              '1998',
              '1997',
              '1996',
              '1995',
              '1994',
              '1993',
              '1992',
              '1991',
              '1990',
              '1989',
              '1988',
              '1987',
              '1986',
              '1985',
              '1984',
              '1983',
              '1982',
              '1981',
              '1980',
              '1979',
              '1978',
              '1977',
              '1976',
              '1975',
              '1974',
              '1973',
              '1972',
              '1971',
              '1970',
              '1969',
              '1968',
              '1967',
              '1966',
              '1965',
              '1964',
              '1963',
              '1962',
              '1961',
              '1960',
              '1959',
              '1958',
              '1957',
              '1956',
              '1955',
              '1954',
              '1953',
              '1952',
              '1951',
              '1950',
              '1949',
              '1948',
              '1947',
              '1946',
              '1945',
              '1944',
              '1943',
              '1942',
              '1941',
              '1940',
              '1939',
              '1938',
              '1937',
              '1936',
              '1935',
              '1934',
              '1933',
              '1932',
              '1931',
              '1930',
              '1929',
              '1928',
              '1927',
              '1926',
              '1925',
              '1924',
              '1923',
              '1922',
              '1921',
              '1920',
              '1919',
              '1918',
              '1917',
              '1916',
              '1915',
              '1914',
              '1913',
              '1912',
              '1911',
              '1910',
              '1909',
              '1908',
              '1907',
              '1906',
              '1905',
              '1904',
              '1903',
              '1902',
              '1901',
              '1900'
            ],
            subHeading: undefined
          },
          {
            name: 'country',
            heading: '生産国',
            labels: [
              'アメリカ',
              'アルゼンチン',
              'イギリス',
              'イタリア',
              'オーストラリア',
              'オーストリア',
              'カナダ',
              'ギリシャ',
              'クロアチア',
              'スペイン',
              'チリ',
              'ドイツ',
              'ニュージーランド',
              'ハンガリー',
              'フランス',
              'ポルトガル',
              '南アフリカ',
              '日本'
            ],
            subHeading: undefined
          },
          {
            name: 'grape',
            heading: '主なぶどう品種',
            labels: [
              'アリアニコ',
              'カベルネ・ソーヴィニヨン',
              'カベルネ・フラン',
              'ガメイ',
              'グルナッシュ',
              'サンジョベーゼ',
              'シラー',
              'ジンファンデル',
              'テンプラニーリョ',
              'ネッビオーロ',
              'ピノ・ノワール',
              'マスカット・ベリーA',
              'マルベック',
              'メルロ'
            ],
            subHeading: undefined
          }
        ],
        type: 'conclusion'
      }
    ])
  })

  test('colorがwhiteの場合', () => {
    color = 'white'
    const { result } = renderHook(() => useTastingSheetLabels(color))

    expect(result.current).toMatchObject([
      {
        items: [
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
        ],
        options: [],
        type: 'appearance'
      },
      {
        items: [
          {
            name: 'flavorFirstImpressions',
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
            subHeading: '強さ/性質'
          },
          {
            name: 'flavorFruits',
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
            subHeading: '熟成度低→高'
          },
          {
            name: 'flavorFlowers',
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
            subHeading: '花/植物/ドライ/菌類'
          },
          {
            name: 'flavorSpices',
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
            subHeading: '香辛料/樽/動物/他'
          },
          {
            name: 'flavorImpressions',
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
            subHeading: '熟成感/特性'
          }
        ],
        options: [],
        type: 'flavor'
      },
      {
        items: [
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
        ],
        options: [],
        type: 'taste'
      },
      {
        items: [
          {
            name: 'evaluation',
            heading: '評価',
            labels: [
              'シンプル、フレッシュ感を楽しむ',
              'エレガントでミネラリー',
              '成熟度が高く豊か',
              '濃縮し力強い',
              'ポテンシャルがある'
            ],
            subHeading: '軽→重'
          },
          {
            name: 'optimumTemperature',
            heading: '適正温度',
            labels: ['8度未満', '8〜10度', '11〜14度', '15〜18度', '19度以上'],
            subHeading: undefined
          },
          {
            name: 'glass',
            heading: 'グラス',
            labels: ['小ぶり', '中庸', '大ぶり'],
            subHeading: undefined
          }
        ],
        options: [
          {
            name: 'vintage',
            heading: '収穫年',
            labels: [
              '2022',
              '2021',
              '2020',
              '2019',
              '2018',
              '2017',
              '2016',
              '2015',
              '2014',
              '2013',
              '2012',
              '2011',
              '2010',
              '2009',
              '2008',
              '2007',
              '2006',
              '2005',
              '2004',
              '2003',
              '2002',
              '2001',
              '2000',
              '1999',
              '1998',
              '1997',
              '1996',
              '1995',
              '1994',
              '1993',
              '1992',
              '1991',
              '1990',
              '1989',
              '1988',
              '1987',
              '1986',
              '1985',
              '1984',
              '1983',
              '1982',
              '1981',
              '1980',
              '1979',
              '1978',
              '1977',
              '1976',
              '1975',
              '1974',
              '1973',
              '1972',
              '1971',
              '1970',
              '1969',
              '1968',
              '1967',
              '1966',
              '1965',
              '1964',
              '1963',
              '1962',
              '1961',
              '1960',
              '1959',
              '1958',
              '1957',
              '1956',
              '1955',
              '1954',
              '1953',
              '1952',
              '1951',
              '1950',
              '1949',
              '1948',
              '1947',
              '1946',
              '1945',
              '1944',
              '1943',
              '1942',
              '1941',
              '1940',
              '1939',
              '1938',
              '1937',
              '1936',
              '1935',
              '1934',
              '1933',
              '1932',
              '1931',
              '1930',
              '1929',
              '1928',
              '1927',
              '1926',
              '1925',
              '1924',
              '1923',
              '1922',
              '1921',
              '1920',
              '1919',
              '1918',
              '1917',
              '1916',
              '1915',
              '1914',
              '1913',
              '1912',
              '1911',
              '1910',
              '1909',
              '1908',
              '1907',
              '1906',
              '1905',
              '1904',
              '1903',
              '1902',
              '1901',
              '1900'
            ],
            subHeading: undefined
          },
          {
            name: 'country',
            heading: '生産国',
            labels: [
              'アメリカ',
              'アルゼンチン',
              'イギリス',
              'イタリア',
              'オーストラリア',
              'オーストリア',
              'カナダ',
              'ギリシャ',
              'クロアチア',
              'スペイン',
              'チリ',
              'ドイツ',
              'ニュージーランド',
              'ハンガリー',
              'フランス',
              'ポルトガル',
              '南アフリカ',
              '日本'
            ],
            subHeading: undefined
          },
          {
            name: 'grape',
            heading: '主なぶどう品種',
            labels: [
              'アリゴテ',
              'アルバリーニョ',
              'ヴィオニエ',
              'ヴェルメンティーノ',
              'グルナッシュ・ブラン',
              'ゲヴェルツトラミネール',
              'ケルナー',
              '甲州',
              'シャルドネ',
              'シュナン・ブラン',
              'ソーヴィニヨン・ブラン',
              'トロンテス',
              'ピノ・グリ',
              'ピノ・ブラン',
              'ミュスカデ',
              'リースリング'
            ],
            subHeading: undefined
          }
        ],
        type: 'conclusion'
      }
    ])
  })
})

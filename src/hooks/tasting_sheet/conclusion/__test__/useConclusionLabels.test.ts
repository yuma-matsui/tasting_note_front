import { renderHook } from '@testing-library/react'
import { WineColor } from '../../../../types'
import useConclusionLabels from '../useConclusionLabels'

const setUp = (color: WineColor, type?: 'select' | undefined) => {
  const { result } = renderHook(() => useConclusionLabels(color, type))

  return result.current
}

describe('useConclusionLabels', () => {
  describe('引数にtypeを渡さない場合', () => {
    describe('colorがredの場合', () => {
      test('赤ワイン用のフォームラベルのコレクションを返す', () => {
        const labels = setUp('red')
        expect(labels).toMatchObject([
          {
            heading: '評価',
            labels: [
              'シンプル、フレッシュ感を楽しむ',
              'エレガントで余韻の長い',
              '成熟度が高く豊か',
              '濃縮し力強い',
              '複雑性があり引き締まった'
            ],
            name: 'evaluation',
            subHeading: '軽→重'
          },
          {
            heading: '適正温度',
            labels: ['10度未満', '10〜13度', '14〜16度', '17〜20度', '21度以上'],
            name: 'optimumTemperature',
            subHeading: undefined
          },
          {
            heading: 'グラス',
            labels: ['小ぶり', '中庸', '大ぶり'],
            name: 'glass',
            subHeading: undefined
          },
          {
            heading: 'デカンタージュ',
            labels: ['必要なし', '事前(30分前)', '事前(60分前)', '事前(1時間以上前)'],
            name: 'decantage',
            subHeading: undefined
          }
        ])
      })
    })

    describe('colorがwhiteの場合', () => {
      test('白ワイン用のフォームラベルのコレクションを返す', () => {
        const labels = setUp('white')
        expect(labels).toMatchObject([
          {
            heading: '評価',
            labels: [
              'シンプル、フレッシュ感を楽しむ',
              'エレガントでミネラリー',
              '成熟度が高く豊か',
              '濃縮し力強い',
              'ポテンシャルがある'
            ],
            name: 'evaluation',
            subHeading: '軽→重'
          },
          {
            heading: '適正温度',
            labels: ['8度未満', '8〜10度', '11〜14度', '15〜18度', '19度以上'],
            name: 'optimumTemperature',
            subHeading: undefined
          },
          {
            heading: 'グラス',
            labels: ['小ぶり', '中庸', '大ぶり'],
            name: 'glass',
            subHeading: undefined
          }
        ])
      })
    })
  })

  describe('引数にtypeを渡した場合', () => {
    describe('colorがredの場合', () => {
      test('赤ワイン用のセレクトボックス用ラベルコレクションを返す', () => {
        const options = setUp('red', 'select')
        expect(options).toMatchObject([
          {
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
            name: 'vintage',
            subHeading: undefined
          },
          {
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
            name: 'country',
            subHeading: undefined
          },
          {
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
            name: 'grape',
            subHeading: undefined
          }
        ])
      })
    })

    describe('colorがwhiteの場合', () => {
      test('白ワイン用のセレクトボックス用ラベルコレクションを返す', () => {
        const options = setUp('white', 'select')
        expect(options).toMatchObject([
          {
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
            name: 'vintage',
            subHeading: undefined
          },
          {
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
            name: 'country',
            subHeading: undefined
          },
          {
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
            name: 'grape',
            subHeading: undefined
          }
        ])
      })
    })
  })
})

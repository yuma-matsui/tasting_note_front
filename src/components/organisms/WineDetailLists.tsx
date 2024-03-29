import { FC, memo } from 'react'

import { WineApi } from '../../types'
import { SheetOrWineDetailsDataList } from '../molecules'

const WineDetailLists: FC<{ wine: WineApi }> = memo(({ wine }) => (
  <dl className="border-black border-2 mb-4">
    <SheetOrWineDetailsDataList title="収穫年" content={`${wine.vintage}年`} />
    <SheetOrWineDetailsDataList title="生産国" content={wine.country} />
    <SheetOrWineDetailsDataList title="リージョン" content={wine.region ?? 'なし'} />
    <SheetOrWineDetailsDataList title="ぶどう品種" content={wine.grape} />
    <SheetOrWineDetailsDataList title="アルコール度数" content={`${wine.alcoholPercentage}%`} />
    <SheetOrWineDetailsDataList title="メモ" content={wine.memo ?? 'なし'} />
  </dl>
))

export default WineDetailLists

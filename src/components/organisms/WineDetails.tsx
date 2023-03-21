import { FC, memo } from 'react'

import { WineApi } from '../../types'
import WineDetailLists from './WineDetailLists'

const WineDetails: FC<{ wine: WineApi }> = memo(({ wine }) => (
  <>
    <h3>
      {wine.name}
      <span className="text-red-400">
        <button type="button">削除</button>
      </span>
    </h3>
    <div className="w-72 h-72 bg-gray-500 text-slate-50">ワイン画像を配置予定</div>
    <WineDetailLists wine={wine} />
  </>
))

export default WineDetails

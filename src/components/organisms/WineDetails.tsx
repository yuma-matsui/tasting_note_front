import { FC, memo } from 'react'

import { WineApi } from '../../types'
import { WineEditLink } from '../atoms'
import { WineDetailsTitle } from '../molecules'
import WineDetailLists from './WineDetailLists'

const WineDetails: FC<{ wine: WineApi }> = memo(({ wine }) => (
  <>
    <WineDetailsTitle wine={wine} />
    <div className="w-72 h-72 bg-gray-500 text-slate-50">ワイン画像を配置予定</div>
    <WineDetailLists wine={wine} />
    <WineEditLink wine={wine} />
  </>
))

export default WineDetails

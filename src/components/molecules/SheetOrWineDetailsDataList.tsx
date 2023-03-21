import { FC, memo } from 'react'

import { DetailsDataListProps } from '../../types'

const SheetOrWineDetailsDataList: FC<DetailsDataListProps> = memo(({ title, subTitle, content }) => (
  <>
    <dt>
      {title} {subTitle && <span>{subTitle}</span>}
    </dt>
    <dd className="text-lg pl-2">{content}</dd>
  </>
))

export default SheetOrWineDetailsDataList

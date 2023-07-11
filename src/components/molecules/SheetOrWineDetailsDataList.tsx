import { FC, memo } from 'react'

import { DetailsDataListProps } from '../../types'

const SheetOrWineDetailsDataList: FC<DetailsDataListProps> = memo(({ content, subTitle, title }) => (
  <>
    <dt className="form-heading-text">
      {title} {subTitle && <span className="form-subheading-text">{subTitle}</span>}
    </dt>
    <dd className="p-2 break-words">{content}</dd>
  </>
))

export default SheetOrWineDetailsDataList

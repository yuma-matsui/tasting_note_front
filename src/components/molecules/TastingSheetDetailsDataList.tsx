import { FC, memo } from 'react'

import { DetailsDataListProps } from '../../types'

const TastingSheetDetailsDataList: FC<DetailsDataListProps> = memo(({ title, subTitle, content }) => (
  <>
    <dt>
      {title} {subTitle && <span>{subTitle}</span>}
    </dt>
    <dd>{content}</dd>
  </>
))

export default TastingSheetDetailsDataList

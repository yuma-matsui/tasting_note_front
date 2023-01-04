import { FC, memo } from 'react'

import { ConfirmationDataListProps } from '../../types'

const TastingSheetConfirmationDataList: FC<ConfirmationDataListProps> = memo(({ title, subTitle, content }) => (
  <dl>
    <dt>
      {title} {subTitle ?? <span>{subTitle}</span>}
    </dt>
    <dd>{content}</dd>
  </dl>
))

export default TastingSheetConfirmationDataList

import { FC, memo } from 'react'

import { FormWrapperProps } from '../../types'
import { formTitleFormat } from '../../utils'

const TastingSheetFormWrapper: FC<FormWrapperProps> = memo(({ title, children }) => (
  <>
    <h2>{formTitleFormat(title)}</h2>
    {children}
  </>
))

export default TastingSheetFormWrapper

import { FC } from 'react'
import { useConclusionNameCheck, useTastingSheetContext } from '../../../hooks'

import { ConfirmationTabItemsProps } from '../../../types'
import { formResultFormat } from '../../../utils'
import TastingSheetConfirmationDataList from '../TastingSheetConfirmationDataList'

const ConclusionTabItems: FC<ConfirmationTabItemsProps> = ({ items, options }) => {
  if (options === undefined) throw new Error('不正な呼び出し方です。')

  const { tastingSheet } = useTastingSheetContext()
  const { isValidName } = useConclusionNameCheck()

  return (
    <>
      {[...items, ...options].map(
        ({ heading, name, subHeading }) =>
          isValidName(name) && (
            <TastingSheetConfirmationDataList
              key={heading}
              title={heading}
              subTitle={subHeading}
              content={formResultFormat(tastingSheet.conclusion[name])}
            />
          )
      )}
    </>
  )
}

export default ConclusionTabItems

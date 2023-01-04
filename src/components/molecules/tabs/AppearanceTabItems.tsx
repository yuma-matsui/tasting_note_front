import { FC } from 'react'
import { useAppearanceNameCheck, useTastingSheetContext } from '../../../hooks'

import { ConfirmationTabItemsProps } from '../../../types'
import { formResultFormat } from '../../../utils'
import TastingSheetConfirmationDataList from '../TastingSheetConfirmationDataList'

const AppearanceTabItems: FC<ConfirmationTabItemsProps> = ({ items }) => {
  const { tastingSheet } = useTastingSheetContext()
  const { isValidName } = useAppearanceNameCheck()

  return (
    <>
      {items.map(
        ({ heading, name, subHeading }) =>
          isValidName(name) && (
            <TastingSheetConfirmationDataList
              key={heading}
              title={heading}
              subTitle={subHeading}
              content={formResultFormat(tastingSheet.appearance[name])}
            />
          )
      )}
    </>
  )
}

export default AppearanceTabItems

import { FC, memo } from 'react'
import { TASTING_TIME } from '../../../assets'
import { useTastingSheetContext, useTastingSheetOnChange } from '../../../hooks'

const TastingSheetTimeSelectBox: FC = memo(() => {
  const { tastingSheet } = useTastingSheetContext()
  const { onChange } = useTastingSheetOnChange<'select'>()

  return (
    <label htmlFor="time">
      テイスティング時間(分)
      <select id="time" name="time" value={tastingSheet.time} onChange={onChange}>
        {TASTING_TIME.map((time) => (
          <option value={time} key={time}>
            {time}
          </option>
        ))}
      </select>
    </label>
  )
})

export default TastingSheetTimeSelectBox

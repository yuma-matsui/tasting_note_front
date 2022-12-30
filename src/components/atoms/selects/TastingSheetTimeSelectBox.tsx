import { ChangeEvent, FC, memo, useState } from 'react'
import { TASTING_TIME } from '../../../assets'
import { useTastingSheetContext } from '../../../hooks'

const TastingSheetTimeSelectBox: FC = memo(() => {
  const { setTastingSheet } = useTastingSheetContext()

  const [sheetTime, setSheetTime] = useState<number>(Math.min(...TASTING_TIME))
  const onChangeSheetTime = (e: ChangeEvent<HTMLSelectElement>) => {
    const time = Number(e.target.value)
    setSheetTime(time)
    setTastingSheet((prev) => ({ ...prev, time }))
  }

  return (
    <label htmlFor="sheet-time">
      テイスティング時間(分)
      <select id="sheet-time" value={sheetTime} onChange={onChangeSheetTime}>
        {TASTING_TIME.map((_time) => (
          <option value={_time} key={_time}>
            {_time}
          </option>
        ))}
      </select>
    </label>
  )
})

export default TastingSheetTimeSelectBox

import { ChangeEvent, FC, useState } from 'react'
import { useTastingSheetContext } from '../../hooks'

const TIME_LIMITS = [3, 5, 10, 15]

const TastingSheetTimeSelectBox: FC = () => {
  const { setTastingSheet } = useTastingSheetContext()

  const [sheetTime, setSheetTime] = useState<number>(3)
  const onChangeSheetTime = (e: ChangeEvent<HTMLSelectElement>) => {
    const time = Number(e.target.value)
    setSheetTime(time)
    setTastingSheet((prev) => ({ ...prev, time }))
  }

  return (
    <label htmlFor="sheet-time">
      テイスティング時間(分)
      <select
        id="sheet-time"
        style={{
          display: 'block',
          width: '150px',
        }}
        value={sheetTime}
        onChange={onChangeSheetTime}
      >
        {TIME_LIMITS.map((time) => (
          <option value={time} key={time}>
            {time}
          </option>
        ))}
      </select>
    </label>
  )
}

export default TastingSheetTimeSelectBox

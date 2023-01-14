import { FC, memo } from 'react'

import { TASTING_TIME, WINE_COLORS } from '../../../assets'
import { useTastingSheetForm } from '../../../hooks'

const NewTastingSheetSettingForm: FC = memo(() => {
  const { handleSubmit, onSubmit, register, isValid, isSubmitting, errors } = useTastingSheetForm()

  return (
    <div>
      <h2>テイスティングシートの設定</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="name">
            シート名(任意)
            <input type="text" id="name" style={{ display: 'block' }} {...register('tastingSheet.name')} />
          </label>
        </div>

        <div>
          <p>テイスティング時間</p>
          <label htmlFor="time">
            <select id="time" {...register('tastingSheet.time', { required: true })}>
              {TASTING_TIME.map((time) => (
                <option value={String(time)} key={time}>
                  {time}
                </option>
              ))}
            </select>
          </label>
          <p>{errors.tastingSheet?.time && <span>必須項目です</span>}</p>
        </div>

        <div>
          <p>ワインの色</p>
          <div style={{ display: 'flex' }}>
            {WINE_COLORS.map((color) => (
              <label key={color} htmlFor={color}>
                <input value={color} type="radio" id={color} {...register('tastingSheet.color', { required: true })} />
                {color === 'white' ? '白' : '赤'}
              </label>
            ))}
          </div>
        </div>
        <input type="submit" value="テイスティングを始める" disabled={!isValid || isSubmitting} className="btn" />
      </form>
    </div>
  )
})

export default NewTastingSheetSettingForm

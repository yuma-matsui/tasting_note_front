import { FC, memo, useEffect, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import { TASTING_TIME, WINE_COLORS } from '../../../assets'
import { TastingSheet } from '../../../types'
import { initialTastingSheet } from '../../../utils'

const NewTastingSheetSettingForm: FC = memo(() => {
  const [tastingSheet, setTastingSheet] = useState<TastingSheet>(initialTastingSheet)
  const {
    register,
    handleSubmit,
    formState: { isValid, isSubmitting, errors }
  } = useForm<TastingSheet>({
    defaultValues: initialTastingSheet,
    mode: 'onChange'
  })
  const onSubmit: SubmitHandler<TastingSheet> = (data) => {
    setTastingSheet((prev) => ({ ...prev, ...data }))
  }

  useEffect(() => {
    console.log(tastingSheet)
  }, [tastingSheet])

  return (
    <div>
      <h2>テイスティングシートの設定</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="name">
            シート名(任意)
            <input type="text" id="name" style={{ display: 'block' }} {...register('name')} />
          </label>
        </div>

        <div>
          <p>テイスティング時間</p>
          <label htmlFor="time">
            <select id="time" {...register('time', { required: true })}>
              {TASTING_TIME.map((time) => (
                <option value={String(time)} key={time}>
                  {time}
                </option>
              ))}
            </select>
          </label>
          <p>{errors.time && <span>必須項目です</span>}</p>
        </div>

        <div>
          <p>ワインの色</p>
          <div style={{ display: 'flex' }}>
            {WINE_COLORS.map((color) => (
              <label key={color} htmlFor={color}>
                <input value={color} type="radio" id={color} {...register('color', { required: true })} />
                {color === 'white' ? '白' : '赤'}
              </label>
            ))}
          </div>
        </div>
        <input type="submit" value="テイスティングを始める" disabled={!isValid || isSubmitting} />
      </form>
    </div>
  )
})

export default NewTastingSheetSettingForm

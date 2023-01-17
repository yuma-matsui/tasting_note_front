import { FC, memo } from 'react'

import { TASTING_TIME, WINE_COLORS } from '../../../assets'
import { useTastingSheetForm } from '../../../hooks'
import { TastingSheetCheckBox, TastingSheetSelectBox } from '../../atoms'

const NewTastingSheetSettingForm: FC = memo(() => {
  const { handleSubmit, onSubmit, register, isValid, isSubmitting } = useTastingSheetForm()

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
          <TastingSheetSelectBox id="time" register={register} name="tastingSheet.time" options={TASTING_TIME} />
        </div>

        <div>
          <p>ワインの色</p>
          <div>
            {WINE_COLORS.map((color) => (
              <TastingSheetCheckBox
                key={color}
                id={color}
                value={color}
                register={register}
                name="tastingSheet.color"
                label={color === 'white' ? '白' : '赤'}
              />
            ))}
          </div>
        </div>
        <input type="submit" value="テイスティングを始める" disabled={!isValid || isSubmitting} className="btn" />
      </form>
    </div>
  )
})

export default NewTastingSheetSettingForm

import { FC, memo } from 'react'

import { TASTING_TIME, WINE_COLORS } from '../../../assets'
import { TastingSheetSettingFormProps } from '../../../types'
import { TastingSheetCheckBox, TastingSheetSelectBox } from '../../atoms'

const NewTastingSheetSettingForm: FC<TastingSheetSettingFormProps> = memo(({ register, errors }) => (
  <div>
    <h2>テイスティングシートの設定</h2>
    <div>
      <label htmlFor="name">
        シート名
        <input
          type="text"
          id="name"
          style={{ display: 'block' }}
          {...register('tastingSheet.name', { required: true })}
        />
      </label>
      {errors.tastingSheet?.name && (
        <p>
          <span>シート名を入力してください</span>
        </p>
      )}
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
  </div>
))

export default NewTastingSheetSettingForm

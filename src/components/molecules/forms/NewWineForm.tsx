import { FC, memo } from 'react'

import { useWineForm } from '../../../hooks'
import { WineMemoTextArea, WineSelectBox, WineTextInput } from '../../atoms'

const NewWineForm: FC = memo(() => {
  const {
    register,
    handleSubmit,
    isSubmitting,
    isValid,
    errors,
    onSubmit,
    tastingSheetName,
    selectBoxOptions: { vintages, countries, grapes, alcoholPercentages }
  } = useWineForm()

  return (
    <>
      <h2>
        シート名: <span className="font-bold">{tastingSheetName}</span>のワインを登録
      </h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <WineTextInput name="wine.name" label="ワイン名" register={register} errors={errors} required />
        <WineTextInput name="wine.image" label="画像" register={register} required={false} />
        <WineSelectBox name="wine.vintage" label="収穫年" register={register} options={vintages} />
        <WineSelectBox name="wine.country" label="生産国" register={register} options={countries} />
        <WineTextInput name="wine.region" label="リージョン" register={register} required={false} />
        <WineSelectBox name="wine.grape" label="ぶどう品種" register={register} options={grapes} />
        <WineSelectBox
          name="wine.alcoholPercentage"
          label="アルコール度数"
          register={register}
          options={alcoholPercentages}
        />
        <WineMemoTextArea register={register} />
        <input type="submit" className="btn" disabled={isSubmitting || !isValid} />
      </form>
    </>
  )
})

export default NewWineForm

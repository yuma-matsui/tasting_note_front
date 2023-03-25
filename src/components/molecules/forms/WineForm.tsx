import { FC, memo } from 'react'

import { useWineForm } from '../../../hooks'
import { WineApi } from '../../../types'
import { GoToAnotherPageButton, WineMemoTextArea, WineSelectBox, WineTextInput } from '../../atoms'

const WineForm: FC<{ wine?: WineApi }> = memo(({ wine }) => {
  const {
    register,
    handleSubmit,
    isSubmitting,
    isValid,
    errors,
    onSubmit,
    tastingSheetId,
    tastingSheetName,
    selectBoxOptions: { vintages, countries, grapes, alcoholPercentages },
    requesting
  } = useWineForm(wine)

  if (requesting) return <p>...Loading</p>

  return (
    <>
      <h2>
        シート名: <span className="font-bold">{tastingSheetName}</span>のワインを{wine ? '編集' : '登録'}
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
        <GoToAnotherPageButton to={`/tasting_sheets/${tastingSheetId}`} text="シートへ戻る" />
        <input type="submit" value={wine ? '更新' : '登録'} className="btn" disabled={isSubmitting || !isValid} />
      </form>
    </>
  )
})

export default WineForm
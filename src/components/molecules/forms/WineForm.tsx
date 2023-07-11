import { FC, memo } from 'react'

import { useOnClickOpenModal, useWineForm } from '../../../hooks'
import { WineApi } from '../../../types'
import {
  GoToAnotherPageButton,
  WineImage,
  WineImageInput,
  WineImagePreview,
  WineMemoTextArea,
  WineSelectBox,
  WineTextInput
} from '../../atoms'

const WineForm: FC<{ wine?: WineApi | undefined }> = memo(({ wine }) => {
  const {
    disabled,
    errors,
    handleSubmit,
    imageFile,
    onChangeImageFile,
    onSubmit,
    register,
    selectBoxOptions: { alcoholPercentages, countries, grapes, vintages },
    submitButtonClassName,
    tastingSheetId
  } = useWineForm(wine)

  const { onClickOpenModal } = useOnClickOpenModal({
    rightButton: <GoToAnotherPageButton to={`/tasting_sheets/${tastingSheetId}`} text="OK" />,
    text: '編集中ですがよろしいですか？'
  })

  return (
    <>
      <h2 className="page-title">ワインの{wine ? '編集' : '登録'}</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="wine-form">
        <WineTextInput name="wine.name" label="ワイン名" register={register} errors={errors} required />
        <WineImageInput onChangeImageFile={onChangeImageFile} />
        {wine?.image && !imageFile && <WineImage filename={wine.image} />}
        {imageFile && <WineImagePreview imageFile={imageFile} />}
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
        <div className="flex justify-between w-full max-w-md">
          <button type="button" className="text-gray-400" onClick={onClickOpenModal}>
            戻る
          </button>
          <input type="submit" value={wine ? '更新' : '登録'} className={submitButtonClassName} disabled={disabled} />
        </div>
      </form>
    </>
  )
})

export default WineForm

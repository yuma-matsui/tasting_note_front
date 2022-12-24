import { FC, FormEvent, memo } from 'react'
import { useTastingSheetContext } from '../../hooks'
import { TastingSheetNameInput, TastingSheetSettingSubmitButton, TastingSheetTimeSelectBox } from '../atoms'
import TastingSheetWineColorRadios from './TastingSheetWineColorRadios'

const NewTastingSheetSettingForm: FC = memo(() => {
  const { tastingSheet } = useTastingSheetContext()

  const onSubmitPrevent = (e: FormEvent<HTMLFormElement>) => e.preventDefault()

  const onClickCreateSheet = () => console.log(tastingSheet)

  return (
    <form
      onSubmit={onSubmitPrevent}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <h2>テイスティングシートの設定</h2>
      <TastingSheetNameInput />
      <TastingSheetTimeSelectBox />
      <TastingSheetWineColorRadios />
      <TastingSheetSettingSubmitButton onClick={onClickCreateSheet} />
    </form>
  )
})

export default NewTastingSheetSettingForm

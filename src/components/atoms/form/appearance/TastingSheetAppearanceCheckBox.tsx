import { ChangeEvent, FC } from 'react'
import { useAppearanceContext, useAppearanceStatus } from '../../../../hooks'
import { AppearanceCheckBoxProps } from '../../../../types'

const TastingSheetAppearanceCheckBox: FC<AppearanceCheckBoxProps> = ({ name, label }) => {
  const { dispatch } = useAppearanceContext()
  const { checked, disabled } = useAppearanceStatus(name, label)

  const onChangeCheck = (e: ChangeEvent<HTMLInputElement>) =>
    dispatch({
      type: e.target.name,
      payload: {
        value: e.target.value
      }
    })

  return (
    <label
      htmlFor={label}
      style={{
        opacity: disabled ? 0.5 : 1
      }}
    >
      <input
        type="checkbox"
        name={name}
        id={label}
        value={label}
        onChange={onChangeCheck}
        checked={checked}
        disabled={disabled}
      />
      {label}
    </label>
  )
}

export default TastingSheetAppearanceCheckBox

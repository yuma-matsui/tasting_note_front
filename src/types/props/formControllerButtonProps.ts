import TastingSheet from '../tasting_sheet/tastingSheet'

type FormControllerButtonProps = {
  disabled: boolean
  onClick: () => void
  tastingSheet: TastingSheet
  value: string
}

export default FormControllerButtonProps

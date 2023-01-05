import WineColor from './wineColor'

type FormItemClassProperty = {
  color: WineColor
  name: string
  heading: string
  subHeading?: string
  labels:
    | string[]
    | {
        red: string[]
        white: string[]
      }
}

export default FormItemClassProperty

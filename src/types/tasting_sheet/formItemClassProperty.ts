import WineColor from './wineColor'

type FormItemClassProperty<T> = {
  name: T
  color: WineColor
  heading: string
  labels:
    | string[]
    | {
        red: string[]
        white: string[]
      }
  subHeading?: string | undefined
}

export default FormItemClassProperty

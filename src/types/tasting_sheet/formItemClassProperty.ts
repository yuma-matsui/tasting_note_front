import WineColor from './wineColor'

type FormItemClassProperty<T> = {
  color: WineColor
  name: T
  heading: string
  subHeading?: string | undefined
  labels:
    | string[]
    | {
        red: string[]
        white: string[]
      }
}

export default FormItemClassProperty

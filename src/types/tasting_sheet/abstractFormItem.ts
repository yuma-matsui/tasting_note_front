type AbstractFormItem<T> = {
  heading: string
  name: T
  labels:
    | string[]
    | {
        white: string[]
        red: string[]
      }
  subHeading?: string | undefined
}

export default AbstractFormItem

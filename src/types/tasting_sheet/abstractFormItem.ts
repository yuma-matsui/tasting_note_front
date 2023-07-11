type AbstractFormItem<T> = {
  name: T
  heading: string
  labels:
    | string[]
    | {
        red: string[]
        white: string[]
      }
  subHeading?: string | undefined
}

export default AbstractFormItem

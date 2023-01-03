type FormItemClassProperty = {
  color: string
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

import { FormItemClassProperty } from '../types'

class FormItem<T> {
  readonly #property: FormItemClassProperty<T>

  constructor(property: FormItemClassProperty<T>) {
    this.#property = property
  }

  #getLabels() {
    const { color, labels } = this.#property
    if (labels instanceof Array) return labels

    return color === 'white' ? labels.white : labels.red
  }

  get property() {
    const { name, heading, subHeading } = this.#property
    return {
      name,
      heading,
      labels: this.#getLabels(),
      subHeading
    }
  }
}

export default FormItem

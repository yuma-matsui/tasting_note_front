import { FormItemClassProperty } from '../types'

class FormItem {
  readonly #property: FormItemClassProperty

  constructor(property: FormItemClassProperty) {
    this.#property = property
  }

  #getLabels() {
    if (this.#property.labels instanceof Array) return this.#property.labels

    return this.#property.color === 'white' ? this.#property.labels.white : this.#property.labels.red
  }

  get property() {
    return {
      heading: this.#property.heading,
      name: this.#property.name,
      labels: this.#getLabels(),
      subHeading: this.#property.subHeading
    }
  }
}

export default FormItem

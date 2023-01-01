const START_YEAR = 1900

const VINTAGES = [
  ...new Array(new Date().getFullYear() - START_YEAR + 1).fill(START_YEAR).map((year: number, index) => year + index)
]

export default VINTAGES

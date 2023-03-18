const MINIMUM_PERCENTAGE = 8
const MAX_PERCENTAGE = 16

const ALCOHOL_PERCENTAGES = [
  ...new Array(MAX_PERCENTAGE + 1)
    .fill(MINIMUM_PERCENTAGE)
    .map((percentage: number, index) => String(percentage + index / 2))
]

export default ALCOHOL_PERCENTAGES

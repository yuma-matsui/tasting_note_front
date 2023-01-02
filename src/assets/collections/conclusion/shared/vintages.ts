const END_YEAR = 1900
const thisYear = new Date().getFullYear()

const VINTAGES = [...new Array(thisYear - END_YEAR).fill(thisYear).map((year: number, index) => year - index - 1)]

export default VINTAGES

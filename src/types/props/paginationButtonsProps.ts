type PaginationButtonsProps = {
  pageNumber: number
  back: () => void
  next: () => void
  isFirstPage: boolean
  isLastPage: boolean
}

export default PaginationButtonsProps

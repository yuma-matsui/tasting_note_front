import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import GoToNewWinePageButton from '../GoToNewWinePageButton'
import { TastingSheetApi } from '../../../../types'

const mockNavigate = jest.fn()
// eslint-disable-next-line @typescript-eslint/no-unsafe-return
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate
}))

const mockState = {
  id: 0,
  name: 'test',
  color: 'red'
}
jest.mock('../../../../hooks/tasting_sheet/useTastingSheetStateForWine', () => () => mockState)

const mockClassName = 'mock-class'
jest.mock('../../../../hooks/useGetButtonClassName', () => () => ({
  className: mockClassName
}))

describe('GoToNewWinePageButton', () => {
  const tastingSheet = {} as TastingSheetApi
  it('"ワインの登録"が表示される', () => {
    render(<GoToNewWinePageButton tastingSheet={tastingSheet} />)
    expect(screen.getByText('ワインの登録')).toBeInTheDocument()
  })

  it('クリックされた時にnavigate関数が呼ばれる', () => {
    render(<GoToNewWinePageButton tastingSheet={tastingSheet} />)
    userEvent.click(screen.getByRole('button'))

    expect(mockNavigate).toHaveBeenCalledWith('/wines/new', { state: mockState })
  })

  it('useGetButtonClassNameで取得したclassNameをもつ', () => {
    render(<GoToNewWinePageButton tastingSheet={tastingSheet} />)
    expect(screen.getByRole('button')).toHaveClass(mockClassName)
  })
})

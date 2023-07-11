/* eslint-disable @typescript-eslint/no-unsafe-return */

import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { TastingSheetApi } from '../../../../types'
import { initialTastingSheet } from '../../../../utils'
import GoToNewWinePageButton from '../GoToNewWinePageButton'

const mockNavigate = jest.fn()
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

const setUp = ({ tastingSheet }: { tastingSheet: TastingSheetApi }) => {
  const utils = render(<GoToNewWinePageButton tastingSheet={tastingSheet} />)

  return {
    ...utils,
    button: screen.getByRole('button')
  }
}

describe('GoToNewWinePageButton', () => {
  const tastingSheet = {
    ...initialTastingSheet,
    id: 1,
    createdAt: 'test',
    wine: null
  }

  it('"ワインの登録"が表示される', () => {
    const { getByText } = setUp({ tastingSheet })
    expect(getByText('ワインの登録')).toBeInTheDocument()
  })

  it('クリックされた時にnavigate関数が呼ばれる', () => {
    const { button } = setUp({ tastingSheet })
    userEvent.click(button)

    expect(mockNavigate).toHaveBeenCalledWith('/wines/new', { state: mockState })
  })

  it('useGetButtonClassNameで取得したclassNameをもつ', () => {
    const { button } = setUp({ tastingSheet })
    expect(button).toHaveClass(mockClassName)
  })
})

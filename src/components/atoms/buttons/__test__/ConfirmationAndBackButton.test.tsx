import userEvent from '@testing-library/user-event'
import { render, screen } from '@testing-library/react'

import ConfirmationAndBackButton from '../ConfirmationAndBackButton'
import { TastingSheet } from '../../../../types'
import { initialTastingSheet } from '../../../../utils'

const mockClassName = 'mock-class'
jest.mock('../../../../hooks/useGetButtonClassName', () => () => ({
  className: mockClassName
}))

const setUp = ({ tastingSheet }: { tastingSheet: TastingSheet }) => {
  const utils = render(<ConfirmationAndBackButton tastingSheet={tastingSheet} />)

  return {
    ...utils,
    button: screen.getByRole('button')
  }
}

describe('ConfirmationAndBackButton', () => {
  const tastingSheet = { ...initialTastingSheet }

  it('"戻る"が表示される', () => {
    const { getByText } = setUp({ tastingSheet })

    expect(getByText('戻る', { exact: false })).toBeInTheDocument()
  })

  it('useGetButtonClassNameで取得したclassNameをもつ', () => {
    const { button } = setUp({ tastingSheet })
    expect(button).toHaveClass(mockClassName)
  })

  it('クリックされた時にwindow.location.reloadが呼ばれる', () => {
    const onReloadMock = jest.fn()
    Object.defineProperty(window, 'location', {
      configurable: true,
      value: { reload: onReloadMock }
    })
    const { button } = setUp({ tastingSheet })

    userEvent.click(button)
    expect(onReloadMock).toHaveBeenCalled()
  })
})

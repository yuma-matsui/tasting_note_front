import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import ConfirmationAndBackButton from '../ConfirmationAndBackButton'
import { TastingSheet, WineColor } from '../../../../types'

describe('ConfirmationAndBackButton', () => {
  const tastingSheet = {} as TastingSheet

  it('"戻る"が表示される', () => {
    render(<ConfirmationAndBackButton tastingSheet={tastingSheet} />)
    expect(screen.getByText('戻る', { exact: false })).toBeInTheDocument()
  })

  describe('className', () => {
    const testCases: [WineColor, string][] = [
      ['red', 'bg-theme-red'],
      ['white', 'bg-theme-green']
    ]
    it.each(testCases)('colorが%sの場合に%sをもつ', (color, result) => {
      tastingSheet.color = color
      render(<ConfirmationAndBackButton tastingSheet={tastingSheet} />)
      expect(screen.queryByRole('button')).toHaveClass(result)
    })
  })

  it('クリックされた時にwindow.location.reloadが呼ばれる', () => {
    const onReloadMock = jest.fn()
    Object.defineProperty(window, 'location', {
      configurable: true,
      value: { reload: onReloadMock }
    })
    render(<ConfirmationAndBackButton tastingSheet={tastingSheet} />)
    userEvent.click(screen.getByRole('button'))

    expect(onReloadMock).toHaveBeenCalled()
  })
})

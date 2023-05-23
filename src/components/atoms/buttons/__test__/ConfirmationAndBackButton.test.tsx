import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import ConfirmationAndBackButton from '../ConfirmationAndBackButton'
import { TastingSheet, WineColor } from '../../../../types'

const setUp = ({ tastingSheet }: { tastingSheet: TastingSheet }) => {
  const utils = render(<ConfirmationAndBackButton tastingSheet={tastingSheet} />)

  return {
    ...utils,
    button: screen.getByRole('button')
  }
}

describe('ConfirmationAndBackButton', () => {
  const tastingSheet = {} as TastingSheet

  it('"戻る"が表示される', () => {
    const { getByText } = setUp({ tastingSheet })

    expect(getByText('戻る', { exact: false })).toBeInTheDocument()
  })

  describe('className', () => {
    const testCases: [WineColor, string][] = [
      ['red', 'bg-theme-red'],
      ['white', 'bg-theme-green']
    ]
    it.each(testCases)('colorが%sの場合に%sをもつ', (color, result) => {
      tastingSheet.color = color
      const { queryByRole } = setUp({ tastingSheet })

      expect(queryByRole('button')).toHaveClass(result)
    })
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

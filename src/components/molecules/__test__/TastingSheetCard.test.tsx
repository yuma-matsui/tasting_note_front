import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom'

import { TastingSheetApi, TastingSheetCardProps, WineApi } from '../../../types'
import TastingSheetCard from '../TastingSheetCard'
import { useHasWineAndImage as mockUseHasWineAndImage } from '../../../hooks'

const mockBgColor = 'mock-bg-color'
const mockTextColor = 'mock-text-color'
jest.mock('../../../hooks/tasting_sheet/useTastingSheetCardColor', () => () => ({
  bgColor: mockBgColor,
  textColor: mockTextColor
}))

jest.mock('../../../hooks/tasting_sheet/useHasWineAndImage')

jest.mock('../../../hooks/tasting_sheet/useTastingSheetStateForWine', () => () => 'mock-state')

const mockOnClickOpenModal = jest.fn()
jest.mock('../../../hooks/useOnClickOpenModal', () => () => ({
  onClickOpenModal: mockOnClickOpenModal
}))

jest.mock('../../atoms/links/CardInsideLink', () => () => <p>CardInsideLink</p>)

const setUp = ({ tastingSheet }: TastingSheetCardProps) => {
  const utils = render(<TastingSheetCard tastingSheet={tastingSheet} />, { wrapper: MemoryRouter })

  return {
    ...utils
  }
}

describe('TastingSheetCard', () => {
  let props: TastingSheetCardProps
  const initialProps: TastingSheetCardProps = {
    tastingSheet: {} as TastingSheetApi
  }

  let useHasWineAndImageReturnValue: typeof initialReturnValue
  const initialReturnValue = {
    hasWine: true,
    hasWineImage: true,
    cardImage: 'card-image'
  }

  beforeEach(() => {
    props = { ...initialProps }
    useHasWineAndImageReturnValue = { ...initialReturnValue }
    ;(mockUseHasWineAndImage as jest.Mock).mockImplementation(() => useHasWineAndImageReturnValue)
  })

  test('tastingSheetのnameが表示される', () => {
    props.tastingSheet.name = 'test-sheet-name'
    const { getByRole } = setUp(props)
    expect(getByRole('heading', { name: props.tastingSheet.name })).toBeInTheDocument()
  })

  test('tastingSheetのcreatedAtが表示される', () => {
    props.tastingSheet.createdAt = '0000/00/00'
    const { getByText } = setUp(props)
    expect(getByText(props.tastingSheet.createdAt)).toBeInTheDocument()
  })

  test('削除ボタンが表示される', () => {
    const { getByRole } = setUp(props)
    expect(getByRole('button', { name: '削除' })).toBeInTheDocument()
  })

  test('削除ボタンが押されるとonClickOpenModalが呼ばれる', () => {
    const { getByRole } = setUp(props)
    userEvent.click(getByRole('button'))

    expect(mockOnClickOpenModal).toHaveBeenCalled()
  })

  test('figureタグが表示される', () => {
    const { getByRole } = setUp(props)
    expect(getByRole('figure')).toBeInTheDocument()
  })

  test('useTastingSheetCardColorで取得したbgColorをもつdivタグが表示される', () => {
    const { getByRole } = setUp(props)
    expect(getByRole('figure').parentElement?.className.includes(mockBgColor)).toBeTruthy()
  })

  test('src属性にuseHasWineAndImageで取得したcardImageを持つimgタグが表示される', () => {
    const { getByRole } = setUp(props)
    expect(getByRole('img')).toHaveAttribute('src', useHasWineAndImageReturnValue.cardImage)
  })

  test('/tasting_sheets/:tastingSheet.idをhrefにもつlinkタグが表示される', () => {
    props.tastingSheet.id = 1
    const { getByRole } = setUp(props)
    expect(getByRole('link')).toHaveAttribute('href', `/tasting_sheets/${props.tastingSheet.id}`)
  })

  describe('useHasWineAndImageで取得したhasWineImage', () => {
    test('trueの場合はNo Imageが表示されない', () => {
      const { queryByText } = setUp(props)
      expect(queryByText('No Image')).not.toBeInTheDocument()
    })

    test('falseの場合、No Imageが表示される', () => {
      useHasWineAndImageReturnValue.hasWineImage = false
      ;(mockUseHasWineAndImage as jest.Mock).mockImplementation(() => useHasWineAndImageReturnValue)
      const { getByText } = setUp(props)
      expect(getByText('No Image')).toBeInTheDocument()
    })
  })

  describe('useHasWineAndImageで取得したhasWine', () => {
    test('trueの場合はCardInsideLinkが表示されない', () => {
      const { queryByText } = setUp(props)
      expect(queryByText('CardInsideLink')).not.toBeInTheDocument()
    })

    test('trueの場合はCardInsideLinkが表示される', () => {
      useHasWineAndImageReturnValue.hasWine = false
      ;(mockUseHasWineAndImage as jest.Mock).mockImplementation(() => useHasWineAndImageReturnValue)

      const { getByText } = setUp(props)
      expect(getByText('CardInsideLink')).toBeInTheDocument()
    })
  })

  test('tastingSheet.wineが存在して、wine.imageが存在しない場合、CardInsideLinkが表示される', () => {
    props.tastingSheet.wine = {} as WineApi
    const { getByText } = setUp(props)
    expect(getByText('CardInsideLink')).toBeInTheDocument()
  })

  test('tastingSheet.wine.imageが存在する場合、CardInsideLinkは表示されない', () => {
    props.tastingSheet.wine = { image: 'test' } as WineApi
    const { queryByText } = setUp(props)
    expect(queryByText('CardInsideLink')).not.toBeInTheDocument()
  })
})

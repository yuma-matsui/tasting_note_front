import userEvent from '@testing-library/user-event'
import { fireEvent, render, screen } from '@testing-library/react'
import { act } from 'react-dom/test-utils'

import WineForm from '../WineForm'
import { WineApi } from '../../../../types'
import { useWineForm as mockUseWineForm } from '../../../../hooks'
import { wineTestData } from '../../../../utils'

jest.mock('../../../../hooks/useWineForm')

const mockOnClickOpenModal = jest.fn()
jest.mock('../../../../hooks/useOnClickOpenModal', () => () => ({
  onClickOpenModal: mockOnClickOpenModal
}))

jest.mock('../../../atoms/WineImage', () => () => <p>WineImage</p>)
jest.mock('../../../atoms/inputs/WineImageInput', () => () => <p>WineImageInput</p>)
jest.mock('../../../atoms/WineImagePreview', () => () => <p>WineImagePreview</p>)
jest.mock('../../../atoms/inputs/WineMemoTextArea', () => () => <p>WineMemoTextArea</p>)
jest.mock('../../../atoms/selects/WineSelectBox', () => () => <p>WineSelectBox</p>)
jest.mock('../../../atoms/inputs/WineTextInput', () => () => <p>WineTextInput</p>)

const setUp = (wine?: WineApi | undefined) => {
  const utils = render(<WineForm wine={wine} />)

  return {
    ...utils,
    backButton: screen.getByRole('button', { name: '戻る' })
  }
}

describe('WineForm', () => {
  let wine: WineApi | undefined

  const mockSubmitButtonClassName = 'mock-class'
  let useWineFormReturnValue: typeof initialReturnValue
  const initialReturnValue = {
    register: jest.fn(),
    handleSubmit: jest.fn(),
    disabled: false,
    errors: false,
    onSubmit: jest.fn(),
    tastingSheetId: 1,
    selectBoxOptions: {
      vintages: [],
      countries: [],
      alcoholPercentages: [],
      grapes: []
    },
    imageFile: true,
    onChangeImageFile: jest.fn(),
    submitButtonClassName: mockSubmitButtonClassName
  }

  beforeEach(() => {
    wine = { ...wineTestData }

    useWineFormReturnValue = { ...initialReturnValue }
    ;(mockUseWineForm as jest.Mock).mockImplementation(() => useWineFormReturnValue)
  })

  describe('heading', () => {
    test('wineが存在する場合は"ワインの編集"が表示される', () => {
      const { getByRole } = setUp(wine)
      expect(getByRole('heading', { name: 'ワインの編集' })).toBeInTheDocument()
    })

    test('wineが存在しない場合は"ワインの登録"が表示される', () => {
      wine = undefined
      const { getByRole } = setUp(wine)
      expect(getByRole('heading', { name: 'ワインの登録' })).toBeInTheDocument()
    })
  })

  describe('button(戻る)', () => {
    test('戻るボタンが表示される', () => {
      const { backButton } = setUp(wine)
      expect(backButton).toBeInTheDocument()
    })

    test('クリックされるとonClickOpenModalが呼ばれる', () => {
      const { backButton } = setUp(wine)
      userEvent.click(backButton)

      expect(mockOnClickOpenModal).toHaveBeenCalled()
    })
  })

  describe('submit button', () => {
    describe('value', () => {
      test('wineが存在する場合は"更新"になる', () => {
        const { getByRole } = setUp(wine)
        expect(getByRole('button', { name: '更新' })).toBeInTheDocument()
      })

      test('wineが存在しない場合は"登録"になる', () => {
        wine = undefined
        const { getByRole } = setUp(wine)
        expect(getByRole('button', { name: '登録' })).toBeInTheDocument()
      })
    })

    describe('disabled', () => {
      test('useWineFormで取得した値と一致する/falseの場合', () => {
        const { getByRole } = setUp(wine)
        expect(getByRole('button', { name: '更新' })).toBeEnabled()
      })

      test('useWineFormで取得した値と一致する/trueの場合', () => {
        useWineFormReturnValue.disabled = true
        ;(mockUseWineForm as jest.Mock).mockImplementation(() => useWineFormReturnValue)

        const { getByRole } = setUp(wine)
        expect(getByRole('button', { name: '更新' })).toBeDisabled()
      })
    })

    test('useWineFormで取得したsubmitButtonClassNameを持つ', () => {
      const { getByRole } = setUp(wine)
      expect(getByRole('button', { name: '更新' })).toHaveClass(mockSubmitButtonClassName)
    })

    test('クリックされた場合、handleSubmitがonSubmitを引数に呼ばれる', async () => {
      const { getByRole } = setUp(wine)
      await act(() => fireEvent.submit(getByRole('button', { name: '更新' })))

      expect(useWineFormReturnValue.handleSubmit).toHaveBeenCalledWith(useWineFormReturnValue.onSubmit)
    })
  })

  test('WineTextInputが2つ表示される', () => {
    const { getAllByText } = setUp(wine)
    expect(getAllByText('WineTextInput').length).toEqual(2)
  })

  test('WineSelectBoxが4つ表示される', () => {
    const { getAllByText } = setUp(wine)
    expect(getAllByText('WineSelectBox').length).toEqual(4)
  })

  test('WineImageInputが表示される', () => {
    const { getByText } = setUp(wine)
    expect(getByText('WineImageInput')).toBeInTheDocument()
  })

  test('WineMemoTextAreaが表示される', () => {
    const { getByText } = setUp(wine)
    expect(getByText('WineMemoTextArea')).toBeInTheDocument()
  })

  describe('WineImagePreview', () => {
    test('useWineFormで取得したimageFileが存在する場合は表示される', () => {
      const { getByText } = setUp(wine)
      expect(getByText('WineImagePreview')).toBeInTheDocument()
    })

    test('useWineFormで取得したimageFileが存在しない場合は表示されない', () => {
      useWineFormReturnValue.imageFile = false
      ;(mockUseWineForm as jest.Mock).mockImplementation(() => useWineFormReturnValue)

      const { queryByText } = setUp(wine)
      expect(queryByText('WineImagePreview')).not.toBeInTheDocument()
    })
  })

  describe('WineImage', () => {
    describe('imageFileが存在しない場合', () => {
      beforeEach(() => {
        useWineFormReturnValue.imageFile = false
        ;(mockUseWineForm as jest.Mock).mockImplementation(() => useWineFormReturnValue)
      })

      test('wineのimageプロパティが存在すれば表示される', () => {
        wine = { ...wineTestData, image: 'test' }
        const { getByText } = setUp(wine)

        expect(getByText('WineImage')).toBeInTheDocument()
      })

      test('wineのimageプロパティが存在しない場合は表示されない', () => {
        const { queryByText } = setUp(wine)
        expect(queryByText('WineImage')).not.toBeInTheDocument()
      })

      test('wineが存在しない場合は表示されない', () => {
        wine = undefined
        const { queryByText } = setUp(wine)

        expect(queryByText('WineImage')).not.toBeInTheDocument()
      })
    })

    test('imageFileが存在する場合は表示されない', () => {
      wine = { ...wineTestData, image: 'test ' }

      const { queryByText } = setUp(wine)
      expect(queryByText('WineImage')).not.toBeInTheDocument()
    })
  })
})

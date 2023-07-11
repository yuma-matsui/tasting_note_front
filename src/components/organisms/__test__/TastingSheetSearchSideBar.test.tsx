import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { TastingSheetSearchSideBarProps } from '../../../types'
import TastingSheetSearchSideBar from '../TastingSheetSearchSideBar'

const setUp = ({ children, onClickToggleSideBar, sideBarContent, visible }: TastingSheetSearchSideBarProps) => {
  const utils = render(
    <TastingSheetSearchSideBar
      sideBarContent={sideBarContent}
      visible={visible}
      onClickToggleSideBar={onClickToggleSideBar}
    >
      {children}
    </TastingSheetSearchSideBar>
  )

  return {
    ...utils
  }
}

describe('TastingSheetSearchSideBar', () => {
  let props: TastingSheetSearchSideBarProps
  const initialProps: TastingSheetSearchSideBarProps = {
    children: <p>MockedChildren</p>,
    onClickToggleSideBar: jest.fn(),
    sideBarContent: <p>MockedSideBarContent</p>,
    visible: false
  }

  beforeEach(() => {
    props = { ...initialProps }
  })

  test('checkboxが表示される', () => {
    const { getByRole } = setUp(props)
    expect(getByRole('checkbox')).toBeInTheDocument()
  })

  describe('visible', () => {
    test('falseの場合、checkboxのchecked属性がfalseになる', () => {
      const { getByRole } = setUp(props)
      expect(getByRole('checkbox')).not.toBeChecked()
    })

    test('trueの場合、checkboxのchecked属性がtrueになる', () => {
      props.visible = true
      const { getByRole } = setUp(props)
      expect(getByRole('checkbox')).toBeChecked()
    })

    test('trueの場合sideBarContentが表示される', () => {
      props.visible = true
      const { getByText } = setUp(props)
      expect(getByText('MockedSideBarContent')).toBeInTheDocument()
    })

    test('falseの場合sideBarContentが表示されない', () => {
      const { queryByText } = setUp(props)
      expect(queryByText('MockedSideBarContent')).not.toBeInTheDocument()
    })
  })

  test('childrenが表示される', () => {
    const { getByText } = setUp(props)
    expect(getByText('MockedChildren')).toBeInTheDocument()
  })

  test('buttonが表示される', () => {
    const { getByRole } = setUp(props)
    expect(getByRole('button')).toBeInTheDocument()
  })

  test('buttonがクリックされるとonClickToggleSideBarが実行される', () => {
    const { getByRole } = setUp(props)
    userEvent.click(getByRole('button'))

    expect(props.onClickToggleSideBar).toHaveBeenCalled()
  })
})

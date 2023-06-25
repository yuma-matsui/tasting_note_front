import { render } from '@testing-library/react'

import BaseModal from '../BaseModal'
import { BaseModalProps } from '../../../../types'

const setUp = ({ text, leftButton, rightButton, visible }: BaseModalProps) => {
  const utils = render(<BaseModal text={text} leftButton={leftButton} rightButton={rightButton} visible={visible} />)

  return {
    ...utils
  }
}

describe('BaseModal', () => {
  let props: BaseModalProps
  const initialProps: BaseModalProps = {
    text: 'test',
    leftButton: <p>leftButton</p>,
    rightButton: <p>rightButton</p>,
    visible: false
  }

  beforeEach(() => {
    props = { ...initialProps }
  })

  describe('visibleがfalseの場合', () => {
    beforeEach(() => {
      props.visible = false
    })

    test('textが表示されない', () => {
      const { queryByText } = setUp(props)
      expect(queryByText(props.text)).not.toBeInTheDocument()
    })

    test.each([['leftButton'], ['rightButton']])('%sが表示される', (buttonText) => {
      const { queryByText } = setUp(props)
      expect(queryByText(buttonText)).not.toBeInTheDocument()
    })

    test('checkedがfalseのinputタグが表示される', () => {
      const { getByRole } = setUp(props)
      expect(getByRole('checkbox', { checked: false })).toBeInTheDocument()
    })
  })

  describe('visibleがtrueの場合', () => {
    beforeEach(() => {
      props.visible = true
    })

    test('textが表示される', () => {
      const { getByText } = setUp(props)
      expect(getByText(props.text)).toBeInTheDocument()
    })

    test.each([['leftButton'], ['rightButton']])('%sが表示される', (buttonText) => {
      const { getByText } = setUp(props)
      expect(getByText(buttonText)).toBeInTheDocument()
    })

    test('checkedがtrueのinputタグが表示される', () => {
      const { getByRole } = setUp(props)
      expect(getByRole('checkbox', { checked: true })).toBeInTheDocument()
    })
  })
})

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

  test('textが表示される', () => {
    const { getByText } = setUp(props)
    expect(getByText(props.text)).toBeInTheDocument()
  })

  test.each([['leftButton'], ['rightButton']])('%sが表示される', (buttonText) => {
    const { getByText } = setUp(props)
    expect(getByText(buttonText)).toBeInTheDocument()
  })

  describe('visible', () => {
    test.each([[false], [true]])('checkedが%pのinputタグが表示される', (bool) => {
      props.visible = bool
      const { getByRole } = setUp(props)
      expect(getByRole('checkbox', { checked: bool })).toBeInTheDocument()
    })
  })
})

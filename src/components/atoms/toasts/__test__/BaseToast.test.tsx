import { render } from '@testing-library/react'

import { BaseToastProps } from '../../../../types'
import BaseToast from '../BaseToast'

jest.mock('../../../../hooks/useGetToastClassName', () => () => ({
  toastColorClass: 'mockToastColorClass'
}))

const setUp = ({ text, type, visible }: BaseToastProps) => {
  const utils = render(<BaseToast text={text} visible={visible} type={type} />)

  return {
    ...utils
  }
}

describe('BaseToast', () => {
  let props: BaseToastProps
  const initialProps: BaseToastProps = {
    text: 'test',
    type: 'success',
    visible: false
  }

  beforeEach(() => {
    props = { ...initialProps }
  })

  describe('visibleがfalseの場合', () => {
    test('何も表示されない', () => {
      const { queryByText } = setUp(props)
      expect(queryByText(props.text)).not.toBeInTheDocument()
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

    test('useGetToastClassNameで取得したclassNameをもつdivを祖先に持つ', () => {
      const { getByText } = setUp(props)
      expect(getByText(props.text).parentElement?.parentElement).toHaveClass('mockToastColorClass')
    })
  })
})

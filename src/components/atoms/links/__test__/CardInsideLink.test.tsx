import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'

import { CardInsideLinkProps, WineApi } from '../../../../types'
import CardInsideLink from '../CardInsideLink'

const setUp = ({ text, to, textColor, state }: CardInsideLinkProps) => {
  const utils = render(<CardInsideLink text={text} to={to} textColor={textColor} state={state} />, {
    wrapper: MemoryRouter
  })

  return {
    ...utils
  }
}

describe('CardInsideLink', () => {
  let props: CardInsideLinkProps
  const initialProps: CardInsideLinkProps = {
    text: 'test',
    to: '/',
    textColor: 'red',
    state: {} as WineApi
  }

  beforeEach(() => {
    props = { ...initialProps }
  })

  test('textが表示される', () => {
    const { getByText } = setUp(props)
    expect(getByText(props.text)).toBeInTheDocument()
  })

  test('toを持つaタグが表示される', () => {
    const { getByRole } = setUp(props)
    expect(getByRole('link')).toHaveAttribute('href', '/')
  })
})

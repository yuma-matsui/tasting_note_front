import { render, screen } from '@testing-library/react'

import { DemoImageContainerProps } from '../../../types'
import DemoImageContainer from '../DemoImageContainer'

const setUp = ({ text, src, alt }: DemoImageContainerProps) => {
  const utils = render(<DemoImageContainer text={text} src={src} alt={alt} />)

  return {
    ...utils,
    image: screen.getByRole('img')
  }
}

describe('DemoImageContainer', () => {
  const props = {
    text: 'DemoImageContainerTest',
    src: 'test-src',
    alt: 'test-alt'
  }

  test('textが表示される', () => {
    const { getByText } = setUp(props)
    expect(getByText(props.text)).toBeInTheDocument()
  })

  test('alt属性にaltを持つimgタグが表示される', () => {
    const { image } = setUp(props)
    expect(image).toHaveAttribute('alt', props.alt)
  })

  test('src属性にsrcを持つimgタグが表示される', () => {
    const { image } = setUp(props)
    expect(image).toHaveAttribute('src', props.src)
  })
})

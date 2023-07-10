import { render } from '@testing-library/react'

import StepsBar from '../StepsBar'
import { StepsBarProps, WineColor } from '../../../types'

const setUp = ({ color, currentStepIndex }: StepsBarProps) => {
  const utils = render(<StepsBar currentStepIndex={currentStepIndex} color={color} />)

  return {
    ...utils
  }
}

describe('StepsBar', () => {
  let props: StepsBarProps
  const initialProps: StepsBarProps = {
    color: 'red',
    currentStepIndex: 1
  }

  beforeEach(() => {
    props = { ...initialProps }
  })

  test('ulタグが表示される', () => {
    const { getByRole } = setUp(props)
    expect(getByRole('list')).toBeInTheDocument()
  })

  test('liタグが4つ表示される', () => {
    const { getAllByRole } = setUp(props)
    expect(getAllByRole('listitem').length).toBe(4)
  })

  test.each([['外観'], ['香り'], ['味わい'], ['まとめ']])('%sが表示される', (title) => {
    const { getByText } = setUp(props)
    expect(getByText(title)).toBeInTheDocument()
  })

  describe.each([
    ['red', 'step-error'],
    ['white', 'step-success']
  ])('colorが%sの場合', (color, stepColor) => {
    beforeEach(() => {
      props.color = color as WineColor
    })

    test.each([[1], [2], [3], [4]])(
      `currentStepIndexが%dの場合、${stepColor}をclassNameにもつliタグは%dになる`,
      (result) => {
        props.currentStepIndex = result
        const { getAllByRole } = setUp(props)

        const lists = getAllByRole('listitem')
        const targets = lists.filter((list) => list.className.includes(stepColor))
        expect(targets.length).toEqual(result)
      }
    )
  })
})

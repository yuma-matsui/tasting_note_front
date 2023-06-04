import { render } from '@testing-library/react'

import { TastingSheetApi, WineApi, WineDetailsProps } from '../../../types'
import WineDetails from '../WineDetails'

jest.mock('../../molecules/titles/WineDetailsTitle', () => () => <p>MockedWineDetailsTitle</p>)

jest.mock('../../molecules/DetailsPageBottomButtons', () => () => <p>MockedDetailsPageBottomButtons</p>)

jest.mock('../../atoms/WineImage', () => () => <p>MockedWineImage</p>)

jest.mock('../WineDetailLists', () => () => <p>MockedWineDetailLists</p>)

const setUp = ({ tastingSheet, wine }: WineDetailsProps) => {
  const utils = render(<WineDetails wine={wine} tastingSheet={tastingSheet} />)

  return {
    ...utils
  }
}

describe('WineDetails', () => {
  let props: WineDetailsProps

  beforeEach(() => {
    props = {
      tastingSheet: {} as TastingSheetApi,
      wine: {} as WineApi
    }
  })

  test.each([['WineDetailsTitle'], ['WineDetailLists'], ['DetailsPageBottomButtons']])(
    '%sが表示される',
    (componentName) => {
      const { getByText } = setUp(props)
      expect(getByText(`Mocked${componentName}`)).toBeInTheDocument()
    }
  )

  describe('WineImage', () => {
    test('wine.imageが存在しない場合はWineImageが表示されない', () => {
      const { queryByText } = setUp(props)
      expect(queryByText('MockedWineImage')).not.toBeInTheDocument()
    })

    test('wine.imageが存在する場合はWineImageが表示される', () => {
      props.wine.image = 'test'
      const { getByText } = setUp(props)
      expect(getByText('MockedWineImage')).toBeInTheDocument()
    })
  })
})

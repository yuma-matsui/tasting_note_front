import { render } from '@testing-library/react'

import SheetOrWineDetailsDataList from '../SheetOrWineDetailsDataList'
import { DetailsDataListProps } from '../../../types'

const setUp = ({ title, subTitle, content }: DetailsDataListProps) => {
  const utils = render(<SheetOrWineDetailsDataList title={title} subTitle={subTitle} content={content} />)

  return {
    ...utils
  }
}

describe('SheetOrWineDetailsDataList', () => {
  let props: DetailsDataListProps
  const initialProps: DetailsDataListProps = {
    title: 'test-title',
    subTitle: 'test-sub-title',
    content: 'test-content'
  }

  beforeEach(() => {
    props = { ...initialProps }
  })

  test('contentが表示される', () => {
    const { getByText } = setUp(props)
    expect(getByText('test-content')).toBeInTheDocument()
  })

  describe('subTitleが存在しない場合', () => {
    test('titleが表示される', () => {
      props.subTitle = undefined
      const { getByText } = setUp(props)
      expect(getByText(props.title)).toBeInTheDocument()
    })
  })

  describe('subTitleが存在する場合', () => {
    test('subTitleが表示される', () => {
      const { getByText } = setUp(props)
      expect(getByText('test-sub-title')).toBeInTheDocument()
    })
  })
})

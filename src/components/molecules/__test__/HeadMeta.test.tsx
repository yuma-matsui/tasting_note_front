import { ReactNode } from 'react'
import { render } from '@testing-library/react'
import { HelmetProvider } from 'react-helmet-async'

import HeadMeta from '../HeadMeta'
import { HeadMetaProps } from '../../../types'

jest.mock('react-helmet-async', () => ({
  Helmet: ({ children }: { children: ReactNode }) => (
    <>
      <p>MockHelmet</p>
      {children}
    </>
  )
}))

const setUp = ({ title, description, path, error = false, children }: HeadMetaProps) => {
  const utils = render(
    <HeadMeta title={title} description={description} path={path} error={error}>
      {children}
    </HeadMeta>,
    { wrapper: HelmetProvider }
  )

  return {
    ...utils
  }
}

describe('HeadMeta', () => {
  let props: HeadMetaProps
  const initialProps: HeadMetaProps = {
    title: 'test-title',
    description: 'test-description',
    path: '/test-path',
    error: false,
    children: <p>Children</p>
  }

  beforeEach(() => {
    props = { ...initialProps }
  })

  test('Helmetが表示される', () => {
    const { getByText } = setUp(props)
    expect(getByText('MockHelmet')).toBeInTheDocument()
  })

  test('titleが表示される', () => {
    setUp(props)
    expect(document.title).toEqual(props.title)
  })

  test('childrenが表示される', () => {
    const { getByText } = setUp(props)
    expect(getByText('Children')).toBeInTheDocument()
  })

  test('contentがdescriptionのmetaタグが表示される', () => {
    setUp(props)
    expect(document.querySelector('meta')?.getAttribute('content')).toEqual(props.description)
  })

  test('errorがtrueの場合はlinkタグが表示されない', () => {
    props.error = true
    setUp(props)
    expect(document.querySelector('link')).toBe(null)
  })

  describe('path', () => {
    test('存在する場合、ドメイン名 + pathをhrefにもつlinkタグが表示される', () => {
      setUp(props)
      expect(document.querySelector('link')?.getAttribute('href')).toBe('https://tasting-note.com/test-path')
    })

    test('存在しない場合、ドメイン名をhrefにもつlinkタグが表示される', () => {
      props.path = undefined
      setUp(props)
      expect(document.querySelector('link')?.getAttribute('href')).toBe('https://tasting-note.com')
    })
  })
})

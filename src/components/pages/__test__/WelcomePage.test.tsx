import { render } from '@testing-library/react'

import { ReactNodeChildren } from '../../../types'
import WelcomePage from '../WelcomePage'

jest.mock('../../molecules/HeadMeta', () => ({ children }: ReactNodeChildren) => (
  <>
    <p>MockedHeadMeta</p>
    {children}
  </>
))

jest.mock('../../molecules/titles/TopPageTitle', () => () => <p>MockedTopPageTitle</p>)
jest.mock('../../molecules/sections/WelcomePageAboutSection', () => () => <p>MockedWelcomePageAboutSection</p>)
jest.mock('../../molecules/sections/WelcomePageImagesSection', () => () => <p>MockedWelcomePageImagesSection</p>)
// jest.mock('../../molecules/sections/WelcomePageWithRegistrationSection', () => () => (
//   <p>MockedWelcomePageWithRegistrationSection</p>
// ))

// jest.mock('../../atoms/links/SignInLink', () => () => <p>MockedSignInLink</p>)
// jest.mock('../../atoms/links/SignUpLink', () => () => <p>MockedSignUpLink</p>)
jest.mock('../../atoms/links/StartTastingLink', () => () => <p>MockedStartTastingLink</p>)
jest.mock('../../organisms/Footer', () => () => <p>MockedFooter</p>)

const setUp = () => {
  const utils = render(<WelcomePage />)

  return {
    ...utils
  }
}

describe('WelcomePage', () => {
  test.each([
    ['HeadMeta'],
    ['TopPageTitle'],
    ['WelcomePageAboutSection'],
    ['WelcomePageImagesSection'],
    // ['WelcomePageWithRegistrationSection'],
    // ['SignUpLink'],
    // ['SignInLink'],
    ['StartTastingLink'],
    ['Footer']
  ])('%sが表示される', (componentName) => {
    const { getByText } = setUp()
    expect(getByText(`Mocked${componentName}`)).toBeInTheDocument()
  })
})

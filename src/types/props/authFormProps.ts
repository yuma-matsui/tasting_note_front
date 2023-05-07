import { AuthError, UserCredential } from 'firebase/auth'

import TastingSheet from '../tasting_sheet/tastingSheet'

type AuthFormProps = {
  tastingSheet: TastingSheet
  authFunction: (email: string, password: string) => Promise<UserCredential | undefined>
  authError: AuthError | undefined
  type: 'signIn' | 'signUp'
}

export default AuthFormProps

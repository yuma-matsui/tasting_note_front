import { AuthError, UserCredential } from 'firebase/auth'

import TastingSheet from '../tasting_sheet/tastingSheet'

type AuthFormProps = {
  authError: AuthError | undefined
  authFunction: (email: string, password: string) => Promise<UserCredential | undefined>
  tastingSheet: TastingSheet
  type: 'signIn' | 'signUp'
}

export default AuthFormProps

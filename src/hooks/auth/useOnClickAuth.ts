import useAuthContext from '../context/useAuthContext'
import useToastContext from '../context/useToastContext'

const useOnClickAuth = () => {
  const { deleteAccount, signOut, signIn } = useAuthContext()
  const { showToast } = useToastContext()

  const onClickSignIn = async () => {
    try {
      await signIn()
      showToast('ログインしました')
    } catch (e) {
      if (e instanceof Error) throw e
    }
  }

  const onClickSignOut = async () => {
    try {
      await signOut()
      showToast('ログアウトしました')
    } catch (e) {
      if (e instanceof Error) throw e
    }
  }

  const onClickDeleteAccount = async () => {
    try {
      await deleteAccount()
      showToast('アカウントを削除しました')
    } catch (e) {
      if (e instanceof Error) throw e
    }
  }

  return {
    onClickSignIn,
    onClickDeleteAccount,
    onClickSignOut
  }
}

export default useOnClickAuth

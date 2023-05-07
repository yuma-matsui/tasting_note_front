const getFirebaseErrorMessage = (errorMessage: string) => {
  switch (errorMessage) {
    case 'Firebase: Error (auth/email-already-in-use).':
      return 'すでに登録されているメールアドレスです'
    default:
      return '登録に失敗しました。時間をおいてから再度ためしてください'
  }
}

export default getFirebaseErrorMessage

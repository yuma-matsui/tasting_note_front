const getFirebaseErrorMessage = (errorMessage: string) => {
  switch (errorMessage) {
    case 'Firebase: Error (auth/email-already-in-use).':
      return 'すでに登録されています。'
    case 'Firebase: Error (auth/wrong-password).':
    case 'Firebase: Error (auth/user-not-found).':
      return 'メールアドレスかパスワードが違います。'
    default:
      return '時間をおいてからもう一度ためしてください。'
  }
}

export default getFirebaseErrorMessage

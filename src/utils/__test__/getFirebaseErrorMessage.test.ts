import getFirebaseErrorMessage from '../getFirebaseErrorMessage'

describe('getFirebaseErrorMessage', () => {
  const testCases: [string, string][] = [
    ['Firebase: Error (auth/email-already-in-use).', 'すでに登録されています。'],
    ['other case', '時間をおいてからもう一度ためしてください。'],
    ['Firebase: Error (auth/wrong-password).', 'パスワードが違います。'],
    ['Firebase: Error (auth/user-not-found).', 'メールアドレスが違います。']
  ]
  it.each(testCases)('%sを引数に与えた場合%sが返る', (input, expected) => {
    const result = getFirebaseErrorMessage(input)
    expect(result).toBe(expected)
  })
})

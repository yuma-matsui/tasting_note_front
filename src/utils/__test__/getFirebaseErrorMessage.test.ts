import getFirebaseErrorMessage from '../getFirebaseErrorMessage'

describe('getFirebaseErrorMessage', () => {
  const testCases: [string, string][] = [
    ['Firebase: Error (auth/email-already-in-use).', 'すでに登録されているメールアドレスです'],
    ['other case', '登録に失敗しました。時間をおいてから再度ためしてください']
  ]
  it.each(testCases)('%sを引数に与えた場合%sが返る', (input, expected) => {
    const result = getFirebaseErrorMessage(input)
    expect(result).toBe(expected)
  })
})

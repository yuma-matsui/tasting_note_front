const metaContents = {
  apiError: {
    description: '通信エラーが発生しました。時間を経ってもう一度おためしください',
    title: '通信エラーが発生しました'
  },
  editWine: {
    description: '登録したワインの編集が行えます',
    title: 'ワインの編集'
  },
  newSheet: {
    description: 'ワインテイスティングの記録が行えます',
    path: '/tasting_sheets/new',
    title: 'テイスティングの記録'
  },
  newWine: {
    description: 'テイスティングしたワインの登録が行えます',
    path: '/wines/new',
    title: 'ワインの登録'
  },
  notFound: {
    description: '存在しないページが指定されました',
    title: 'ご指定のページが見つかりません'
  },
  pp: {
    description: 'プライバシーポリシー',
    path: '/pp',
    title: 'プライバシーポリシー'
  },
  resetPassword: {
    description: 'パスワードのリセットが行えます',
    path: '/reset_password',
    title: 'パスワードのリセット'
  },
  root: {
    description: 'J.S.Aソムリエ呼称資格認定試験2次試験対策用サービス',
    title: 'Tasting Note'
  },
  signIn: {
    description: 'ログインが行えます',
    path: '/signin',
    title: 'ログイン'
  },
  signUp: {
    description: 'ユーザー登録が行えます',
    path: '/signup',
    title: 'サインアップ'
  },
  tos: {
    description: '利用規約',
    path: '/tos',
    title: '利用規約'
  }
}

export default metaContents

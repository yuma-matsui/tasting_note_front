import * as Yup from 'yup'
import MAIL_PATTERN from './mailPattern'

const signInFormSchema = Yup.object().shape({
  email: Yup.string().matches(MAIL_PATTERN, { message: '不正な形式です' }),
  password: Yup.string().required('パスワードを入力してください')
})

export default signInFormSchema

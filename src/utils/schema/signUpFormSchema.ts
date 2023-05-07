import * as Yup from 'yup'
import MAIL_PATTERN from './mailPattern'

const PASSWORD_PATTERN = /[a-zA-Z\d]{8,}/

const signUpFormSchema = Yup.object().shape({
  email: Yup.string().matches(MAIL_PATTERN, { message: '不正な形式です' }),
  password: Yup.string().matches(PASSWORD_PATTERN, { message: '英数字8文字以上で入力してください' }),
  passwordConfirmation: Yup.string().oneOf([Yup.ref('password')], 'パスワードと一致しません')
})

export default signUpFormSchema

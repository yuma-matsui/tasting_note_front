import * as Yup from 'yup'

import MAIL_PATTERN from './mailPattern'

const resetPasswordFormSchema = Yup.object().shape({
  email: Yup.string().matches(MAIL_PATTERN, { message: '不正な形式です' })
})

export default resetPasswordFormSchema

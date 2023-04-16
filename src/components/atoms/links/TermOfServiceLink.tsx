import { FC, memo } from 'react'
import { Link } from 'react-router-dom'

const TermOfServiceLink: FC = memo(() => <Link to="/tos">利用規約</Link>)

export default TermOfServiceLink

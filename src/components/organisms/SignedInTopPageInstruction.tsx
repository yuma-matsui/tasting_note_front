import { FC, memo } from 'react'

const SignedInTopPageInstruction: FC = memo(() => (
  <div className="flex flex-col items-center mb-4">
    <h1>テイスティングを記録しよう</h1>
    <div className="w-72 h-72 bg-gray-500 text-slate-50">サービスのデモ画像配置予定</div>
    <ul>
      <li>本番同様のシートを使用してテスト形式でワインを評価</li>
      <li>評価したコメントシートを記録</li>
      <li>記録したシートで復習</li>
    </ul>
  </div>
))

export default SignedInTopPageInstruction

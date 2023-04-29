import { FC, memo } from 'react'

const SignedInTopPageInstruction: FC = memo(() => (
  <>
    <h1 className="mb-4 text-lg">テイスティングを記録しよう</h1>
    <div className="demo-img-wrapper bg-gray-700 text-white mb-4">サービスのデモ画像配置予定</div>
    <ol className="my-4 flex flex-col items-center list-decimal pl-6">
      <li className="mb-4">
        本番同様のシートを使用して
        <br />
        テスト形式でワインを評価
      </li>
      <li className="mb-4">評価したコメントシートを記録</li>
      <li>記録したシートで復習</li>
    </ol>
  </>
))

export default SignedInTopPageInstruction

import { FC, memo } from 'react'

const LoadingSpinner: FC = memo(() => (
  <div className="h-screen w-screen flex flex-col items-center justify-center">
    <div className="flex justify-center">
      <div className="animate-spin h-24 w-24 border-8 border-emerald-500 rounded-full border-t-transparent object-center" />
    </div>
    <p className="text-center text-white mt-4">Loading</p>
  </div>
))

export default LoadingSpinner

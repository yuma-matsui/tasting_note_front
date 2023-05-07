import { FC, memo } from 'react'

const LoadingSpinner: FC<{
  isAuthPage?: boolean
}> = memo(({ isAuthPage = false }) => (
  <div className={`h-screen flex flex-col items-center justify-center ${isAuthPage ? 'w-auto' : 'w-screen'}`}>
    <div className="flex justify-center">
      <div className="animate-spin h-24 w-24 border-8 border-theme-green rounded-full border-t-transparent object-center" />
    </div>
    <p className="text-center text-theme-green mt-4">Loading</p>
  </div>
))

export default LoadingSpinner

import useAuthContext from './context/useAuthContext'

const useStartTastingButtonStyles = () => {
  const { currentUser } = useAuthContext()

  const text = currentUser ? 'テイスティングをはじめる' : 'すぐにはじめる'

  const className = currentUser
    ? 'rounded-full shadow-md bg-transparent border-8 border-theme-yellow text-theme-yellow font-black bottom-2 sticky text-lg px-4 py-2 mt-4'
    : 'base-btn bg-theme-red w-40'

  return {
    text,
    className
  }
}

export default useStartTastingButtonStyles

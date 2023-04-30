import useAuthContext from './context/useAuthContext'

const useStartTastingButtonStyles = () => {
  const { currentUser } = useAuthContext()

  const text = currentUser ? 'テイスティングをはじめる' : 'すぐにはじめる'

  const className = currentUser
    ? 'rounded-full shadow-md bg-transparent border-8 border-theme-yellow text-theme-yellow font-bold bottom-2 sticky text-lg py-2 mt-4 w-full sm:w-96 block mx-auto'
    : 'base-btn bg-theme-red w-40'

  return {
    text,
    className
  }
}

export default useStartTastingButtonStyles

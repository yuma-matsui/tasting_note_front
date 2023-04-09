import { useState } from 'react'

const useToggleSideBar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const onClickToggleSideBar = () => setIsOpen((prev) => !prev)

  return {
    isOpen,
    onClickToggleSideBar
  }
}

export default useToggleSideBar

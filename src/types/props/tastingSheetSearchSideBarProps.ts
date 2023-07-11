import { ReactElement, ReactNode } from 'react'

type TastingSheetSearchSideBarProps = {
  children: ReactNode
  onClickToggleSideBar: () => void
  sideBarContent: ReactElement
  visible: boolean
}

export default TastingSheetSearchSideBarProps

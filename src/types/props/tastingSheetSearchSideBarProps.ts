import { ReactElement, ReactNode } from 'react'

type TastingSheetSearchSideBarProps = {
  sideBarContent: ReactElement
  children: ReactNode
  visible: boolean
  onClickToggleSideBar: () => void
}

export default TastingSheetSearchSideBarProps

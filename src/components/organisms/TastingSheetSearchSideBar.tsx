import { FC, ReactElement, ReactNode, memo } from 'react'

const TastingSheetSearchSideBar: FC<{
  sideBarContent: ReactElement
  children: ReactNode
  visible: boolean
  onClickToggleSideBar: () => void
}> = memo(({ sideBarContent, children, visible, onClickToggleSideBar }) => (
  <div className="drawer">
    <input type="checkbox" className="drawer-toggle" checked={visible} onChange={() => {}} />
    <div className="drawer-content">{children}</div>
    <div className="drawer-side">
      <input type="button" className="drawer-overlay" onClick={onClickToggleSideBar} />
      <div className="menu p-4 w-1/3 bg-base-100 text-base-content">{sideBarContent}</div>
    </div>
  </div>
))

export default TastingSheetSearchSideBar
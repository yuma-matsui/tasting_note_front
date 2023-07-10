import { FC, memo } from 'react'
import { TastingSheetSearchSideBarProps } from '../../types'

const TastingSheetSearchSideBar: FC<TastingSheetSearchSideBarProps> = memo(
  ({ children, onClickToggleSideBar, sideBarContent, visible }) => (
    <div className="drawer">
      <input type="checkbox" className="drawer-toggle" checked={visible} readOnly />
      <div className="drawer-content hidden-scrollbar">{children}</div>
      <div className="drawer-side">
        <input type="button" className="drawer-overlay" onClick={onClickToggleSideBar} />
        <div className="menu px-2 py-4 w-2/3 md:w-1/3 bg-base-100 text-base-content">{visible && sideBarContent}</div>
      </div>
    </div>
  )
)

export default TastingSheetSearchSideBar

import { memo } from 'react'

const TastingSheetFormSubmitButton = memo(({ disabled }: { disabled: boolean }) => (
  <input type="submit" value="次へ" className="btn" disabled={disabled} />
))

export default TastingSheetFormSubmitButton

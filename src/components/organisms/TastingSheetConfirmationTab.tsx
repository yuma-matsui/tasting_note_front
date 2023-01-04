import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react'
import { FC, memo } from 'react'

import { FormItemsProps } from '../../types'
import { formTitleFormat } from '../../utils'
import { AppearanceTabItems, ConclusionTabItems, FlavorTabItems, TasteTabItems } from '../molecules'

const TastingSheetConfirmationTab: FC<FormItemsProps> = memo(({ formItems }) => (
  <Tabs variant="soft-rounded">
    <TabList>
      {formItems.map(({ type }) => (
        <Tab key={type}>{formTitleFormat(type)}</Tab>
      ))}
    </TabList>

    <TabPanels>
      {formItems.map(({ type, items, options }) => (
        <TabPanel>
          {options && type === 'conclusion' && <ConclusionTabItems items={items} options={options} />}
          {type === 'appearance' && <AppearanceTabItems items={items} />}
          {type === 'flavor' && <FlavorTabItems items={items} />}
          <TasteTabItems items={items} />
        </TabPanel>
      ))}
    </TabPanels>
  </Tabs>
))

export default TastingSheetConfirmationTab

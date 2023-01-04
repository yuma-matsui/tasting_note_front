import { FC } from 'react'
import { ChakraProvider } from '@chakra-ui/react'

import RouterConfig from './router/RouterConfig'
import { TastingSheetProvider } from './providers'

const App: FC = () => (
  <ChakraProvider>
    <TastingSheetProvider>
      <RouterConfig />
    </TastingSheetProvider>
  </ChakraProvider>
)

export default App

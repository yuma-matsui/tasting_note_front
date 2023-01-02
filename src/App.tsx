import { FC } from 'react'
import { ChakraProvider } from '@chakra-ui/react'

import RouterConfig from './router/RouterConfig'

const App: FC = () => (
  <ChakraProvider>
    <RouterConfig />
  </ChakraProvider>
)

export default App

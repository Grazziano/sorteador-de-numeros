import React from 'react';
import Home from './pages/Home';

import { extendTheme, ChakraProvider } from '@chakra-ui/react';

const colors = {
  sorteador: {
    900: '#12131B',
    400: '#1B1C29',
    100: '#C6C6C6',
  },
  button: {
    cta: '#FBA931',
    default: '#FFF',
    gray: '#DFDFDF',
    danger: '#FF4040',
  },
  orange: {
    900: '#FBA931',
  },
};

const theme = extendTheme({ colors });

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Home />
    </ChakraProvider>
  );
}

export default App;

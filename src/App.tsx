import React from 'react';

import { ChakraProvider, extendBaseTheme } from '@chakra-ui/react';

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

const theme = extendBaseTheme(colors);

function App() {
  return (
    <ChakraProvider theme={theme}>
      <div>
        <h1>Teste</h1>
      </div>
    </ChakraProvider>
  );
}

export default App;

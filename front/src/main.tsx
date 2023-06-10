import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { ChakraProvider, extendTheme, Box } from '@chakra-ui/react';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider>
      <Box backgroundColor="blackAlpha.800" color="white" minH="100vh">
        <App />
      </Box>
    </ChakraProvider>
  </React.StrictMode>,
);

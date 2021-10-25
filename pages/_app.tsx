import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { Box } from "@chakra-ui/layout";
import theme from "@chakra-ui/react";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Box>
        <Component {...pageProps} />
      </Box>
    </ChakraProvider>
  );
}
export default MyApp;

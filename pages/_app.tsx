import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { Box } from "@chakra-ui/layout";
import { extendTheme } from "@chakra-ui/react";
import "swiper/css";
function MyApp({ Component, pageProps }: AppProps) {
  const configScrollBar = {
    styles: {
      global: {
        "html,body": {
          "&::-webkit-scrollbar": {
            width: "12px",
          },
          "&::-webkit-scrollbar-track": {
            background: "rgb(138, 138, 138)",
            borderRadius: "2px",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "rgb(58, 58, 58)",
            borderRadius: "2px",
          },
        },
      },
    },
  };
  const theme = extendTheme(configScrollBar);
  return (
    <ChakraProvider theme={theme}>
      <Box>
        <Component {...pageProps} />
      </Box>
    </ChakraProvider>
  );
}
export default MyApp;

// import "../styles/globals.css"
import "../styles/bootstrap.min.css"
import { AppProps } from "next/app"
// import { ChakraProvider } from "@chakra-ui/react"
import { Provider as JotaiProvider } from "jotai"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <JotaiProvider>
      <Component {...pageProps} />
    </JotaiProvider>
  )
}

export default MyApp

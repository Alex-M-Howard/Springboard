import '@/styles/globals.css'
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider } from "@emotion/react";
import theme from "../config/theme";
import createEmotionCache from "../config/createEmotionCache";

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}

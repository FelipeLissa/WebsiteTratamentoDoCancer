
import { ThemeProvider } from 'styled-components';
import { Toaster } from 'react-hot-toast';

import GlobalStyles from '../styles/global';
import theme from '../styles/theme';
import { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
      <GlobalStyles />
      <Toaster position='top-right'></Toaster>
    </ThemeProvider>
  );
}

export default MyApp;

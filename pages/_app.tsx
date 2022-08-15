
import { ThemeProvider } from 'styled-components';
import { Toaster } from 'react-hot-toast';

import GlobalStyles from '../styles/global';
import theme from '../styles/theme';
import { AppProps } from 'next/app';
import { useEffect, useState } from 'react';

function MyApp({ Component, pageProps }: AppProps) {

  const [showChild, setShowChild] = useState(false);
  useEffect(() => {
    setShowChild(true);
  }, []);

  if (!showChild) {
    return null;
  }if (typeof window === 'undefined') {
    return <></>;
  } else {
    return (
      <ThemeProvider theme={theme}>
      <Component {...pageProps} />
      <GlobalStyles />
      <Toaster position='top-right'></Toaster>
    </ThemeProvider>
    );
  }
}

export default MyApp;

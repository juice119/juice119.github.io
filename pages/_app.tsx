import 'jquery/dist/jquery.slim';
import 'bootstrap/dist/css/bootstrap.min.css';

import { NextComponentType } from 'next';

import { GlobalStyle } from '../component/common/GlobalStyle';
import { ThemeProvider } from '../component/common/ThemeContext';

export default function YosumeApp({
  Component,
  pageProps,
}: {
  Component: NextComponentType;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  pageProps: any;
}) {
  return (
    <ThemeProvider>
      <GlobalStyle />
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

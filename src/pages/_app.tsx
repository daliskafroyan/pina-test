import { AppProps } from 'next/app';

// import '@fontsource/m-plus-rounded-1c'
import '@/styles/globals.css';
import '@fontsource/m-plus-rounded-1c/100.css'
import '@fontsource/m-plus-rounded-1c/300.css'
import '@fontsource/m-plus-rounded-1c/400.css'
import '@fontsource/m-plus-rounded-1c/500.css'
import '@fontsource/m-plus-rounded-1c/700.css'
import '@fontsource/m-plus-rounded-1c/800.css'
import '@fontsource/m-plus-rounded-1c/900.css'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;

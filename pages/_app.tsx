import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Container from '../Containers/container'
import 'antd/dist/antd.css';
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return   <Component {...pageProps} /> 
}

export default MyApp

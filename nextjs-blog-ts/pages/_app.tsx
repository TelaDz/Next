import { AppProps } from 'next/app'
import '../styles/index.css'

// export default function MyApp({ Component, pageProps }: AppProps) {
//   return (
//     <Provider session={pageProps.session}>
//       <Component {...pageProps} />
//     </Provider>
//   )
// }
export default function MyApp({ Component, pageProps }: AppProps) {
  return (
      <Component {...pageProps} />
  )
}

import 'tailwindcss/tailwind.css'
// import { Provider } from 'next-auth/client'

function MyApp({ Component, pageProps }) {
  return  (
    <Component {...pageProps} />
  )
}

export default MyApp


// <Provider session={pageProps.session}> 
        
//     </Provider>
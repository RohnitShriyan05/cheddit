import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className='overflow-hidden flex flex-col inset-0 scroll-smooth bg-primaryDark'>
      <Navbar/>
      <Component {...pageProps} />
      <Footer/>
    </div>
  )
}

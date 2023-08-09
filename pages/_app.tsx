import '@/styles/globals.css'
import { Inter } from 'next/font/google'
import Home from './home'
import NavBar from './navbar'
import { useState } from 'react'
import { useRouter } from 'next/router'
import NotFound from './notFound'


const inter = Inter({ subsets: ['latin'] })

export default function App() {
  const [isSearch, setIsSearch] = useState(false);
  const [whoNews, setWhoNews] = useState('');
  const location = useRouter();

  console.log(location.asPath);
  function handleSearch(value: string) {
    if (value) {
      console.log(value);
      setIsSearch(true);
      setWhoNews(value);
    } else{
      setIsSearch(false);
    }
  }

  return(
    <div className={`${inter.className}`}>
      <NavBar currentPage={location.asPath} handleSearch={handleSearch} />
      {
        location.asPath !== '/home' && location.asPath !== '/' ? (
          <NotFound />
        ) : (
          <Home isSearch={isSearch} whoNews={whoNews} />
        )
      }
    </div>
  )
}
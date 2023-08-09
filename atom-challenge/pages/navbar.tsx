import Image from 'next/image'
import styles from '@/styles/Nav.module.css'
import { ChangeEvent, useState } from 'react'
import { Input } from  'antd'
import Link from 'next/link';


interface NavBarProps {
  currentPage: string;
  handleSearch: (value: string) => void; 
}

export default function NavBar({ currentPage, handleSearch }: NavBarProps){
  const[search, setSearch] = useState('');
  
  return(
    <nav className={`${styles.main}`}>
      <div className={`${styles.logo}`}>
        <Image
            src="/logo.svg"
            alt="Logomarca"
            width={161}
            height={36}
            priority
        />
      </div>

      <div>
        <ul  className={`${styles.pagesLists}`}>
          <li className={currentPage == '/home' || currentPage == '/' ? `${styles.currentPage}` : ''}>
            <Link href="/home">
              Home
            </Link>
          </li>
          <li className={currentPage == '/sobre' ? `${styles.currentPage}` : ''}>
            <Link href="/sobre">
              Sobre
            </Link>
          </li>
          <li className={currentPage == '/categorias' ? `${styles.currentPage}` : ''}>
            <Link href="/categorias">
              Categorias
            </Link>
          </li>
          <li className={currentPage == '/contato' ? `${styles.currentPage}` : ''}>
            <Link href="/contato">
              Contato
            </Link>
          </li>
        </ul>
      </div>
      <div className={`${styles.search}`}>
        <Input
          id="country-input" 
          type="text" 
          placeholder="Buscar" 
          onChange={(e) => {handleSearch(e.target.value);}} 
        /> 
        <button type="submit">
          <Image
            src="/lupa.svg"
            alt="Lupa"
            width={20}
            height={20}
            priority
          />
        </button>

      </div>
    </nav>
  )
  
}

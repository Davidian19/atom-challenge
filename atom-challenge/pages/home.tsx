import Image from 'next/image';
import styles from '@/styles/Home.module.css';
import News from './news';
import React, { useState } from 'react';

interface HomeProps {
  isSearch?: boolean;
  whoNews: string;
}

export default function Home({ isSearch,whoNews }: HomeProps) {

  return ( 
    <>
      {!isSearch ? (
        <>
          <div className={`${styles.homeMain}`}>
            <div className={`${styles.textsDiv}`}>
              <h1>Veja o guia definitivo para conquistar seus objetivos<br /> como DEV em 2022</h1>
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br />
                Nibh nibh eu in aliquet ut adipiscing neque. Sed volutpat<br />
                aenean sit vitae, sed tristique placerat hac.
              </span>
              <div className={`${styles.verMais}`}>
                <h4>Veja Mais</h4>
                <Image
                  src="/seta.svg"
                  alt="ver mais"
                  width={20}
                  height={20}
                  priority

                />
              </div>
            </div>
            <div className={`${styles.homeImage}`}>
              <Image
                src="/home.svg"
                alt="Tela do Computador"
                width={500}
                height={300}
                priority
              />
            </div>
          </div>
          <News isSearch={isSearch} whoNews={whoNews}/>
        </>
      ) : (
        <div>
          <News isSearch={isSearch} whoNews={whoNews}/>
        </div>
      )}
    </>
  );
}


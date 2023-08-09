import Image from 'next/image'
import styles from '@/styles/News.module.css'
import React from 'react'

interface NewsProps {
    isSearch?: boolean;
    whoNews: string;
}

const noticias: any[] = [
    {
        date: 'Janeiro 04, 2022',
        title: '10 dicas para conseguir a vaga desejada',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nibh eu in aliquet ut adipiscing neque. Sed volutpat aenean sit vitae.',
        imageSrc: '/image1.svg',
        imageAlt: 'Imagem da Notícia',
    },
    {
        date: 'Janeiro 04, 2022',
        title: 'Deixe seu código mais semântico com essas dicas',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nibh eu in aliquet ut adipiscing neque. Sed volutpat aenean sit vitae.',
        imageSrc: '/image2.svg',
        imageAlt: 'Imagem da Notícia',
    },
    {
        date: 'Janeiro 04, 2022',
        title: 'Use essas dicas nas suas aplicações mobile',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nibh eu in aliquet ut adipiscing neque. Sed volutpat aenean sit vitae.',
        imageSrc: '/image3.svg',
        imageAlt: 'Imagem da Notícia',
    },
    {
        date: 'Janeiro 04, 2022',
        title: 'Veja a evolução do Front-end na prática',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nibh eu in aliquet ut adipiscing neque. Sed volutpat aenean sit vitae.',
        imageSrc: '/image1.svg',
        imageAlt: 'Imagem da Notícia',
    },
]

export default function News({ isSearch, whoNews }: NewsProps) {
    const filtredNews = noticias.filter((noticia) =>
        noticia.title.toLowerCase().includes(whoNews.toLowerCase())
    );

    return(
        <>
            {!isSearch ? (
                <> 
                    <div className={`${styles.newsMain}`}>
                        <div className={`${styles.destaque}`}>
                            <div>
                                <Image
                                    src="/pcNews.svg"
                                    alt="ver mais"
                                    width={370}
                                    height={250}
                                    priority
                                />
                            </div>
                            <span className={`${styles.date}`}>Janeiro 04, 2022</span>
                            <h3>Começando no ReactJS em 2022</h3>
                            <span>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                Nibh nibh eu in aliquet ut adipiscing neque. Sed volutpat 
                                aenean sit vitae, sed tristique nibh nibh eu in aliquet ut 
                                adipiscing neque. Sed volutpat aenean sit vitae, sed tristique. 
                                Sed volutpat aenean.
                            </span>
                        </div> 

                        <div className={`${styles.others}`}>
                            <div>
                                <span className={`${styles.date}`}>Janeiro 04, 2022</span>
                                <h3>Conheça as principais técnicas para conseguir uma vaga internacional em programação</h3>
                                <span>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                    Nibh nibh eu in aliquet ut adipiscing neque. Sed volutpat 
                                    aenean sit vitae, sed tristique nibh nibh eu in aliquet ut 
                                    adipiscing neque. Sed volutpat aenean sit vitae, sed tristique. 
                                    Sed volutpat aenean.
                                </span>
                            </div>
                            <div className={`${styles.division}`}/>
                            <div>
                                <span className={`${styles.date}`}>Janeiro 04, 2022</span>
                                <h3>Veja a evolução do Front-end na prática</h3>
                                <span>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                    Nibh nibh eu in aliquet ut adipiscing neque. Sed volutpat 
                                    aenean sit vitae, sed tristique nibh nibh eu in aliquet ut 
                                    adipiscing neque. Sed volutpat aenean sit vitae, sed tristique. 
                                    Sed volutpat aenean.
                                </span>
                            </div>
                        </div> 
                    </div>
                    <ul className={`${styles.rowNews}`}>
                        {noticias.map((news) => (
                            <li key={news.title} className={`${styles.destaqueRows}`}>
                                <div>
                                    <Image
                                        src={news.imageSrc}
                                        alt={news.imageAlt}
                                        width={220}
                                        height={150}
                                        priority
                                    />
                                </div>
                                <span className={`${styles.date}`}>{news.date}</span>
                                <h3>{news.title}</h3>
                                <span>{news.description}</span>
                            </li>
                        ))}
                    </ul>
                </>
            ):(
                <>
                    <ul className={`${styles.rowNews}`}>
                        {filtredNews.map((news) => (
                            <li key={news.title} className={`${styles.destaqueRows}`}>
                                <div>
                                    <Image
                                        src={news.imageSrc}
                                        alt={news.imageAlt}
                                        width={220}
                                        height={150}
                                        priority
                                    />
                                </div>
                                <span className={`${styles.date}`}>{news.date}</span>
                                <h3>{news.title}</h3>
                                <span>{news.description}</span>
                            </li>
                        ))}
                    </ul>
                </>
            )}
        </>
    )
  
}

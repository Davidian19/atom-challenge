import styles from '@/styles/NotFound.module.css'
import React from 'react'
import { LoadingOutlined } from '@ant-design/icons';

export default function NotFound() {

    return(
        <div className={`${styles.notFound}`}>
            <LoadingOutlined className={`${styles.icon}`}/>
            <h1>No momento, esta página não está disponível...</h1>
        </div>
    )
  
} 

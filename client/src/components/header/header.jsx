import React from 'react';
import { ContentWrapper } from '../content-wrapper';
import WaveImage from './wave.svg'
import styles from './styles.module.css';

export const Header = () => {
  return (
    <div className={styles.header}>
        <ContentWrapper className={styles.content}>
            <h1 className={styles.title}>{ `Ковані ворота  \n дешеві ворота з профнастилом ` }</h1>
            <p className={styles.desc}>{`Ваші ворота доїдуть до Вас БЕЗКОШТОВНО \n высокого уровня путешествий`}</p>
        </ContentWrapper>
        <img src={ WaveImage } alt="" className={ styles.wave }/>
    </div>
  )
}

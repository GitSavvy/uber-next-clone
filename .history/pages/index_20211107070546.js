import Head from 'next/head'
import Image from 'next/image'
//import styles from '../styles/Home.module.css'
import tw from "tailwind-styled-components"

export default function Home() {
  return (

    <Wrapper>
    
      <div className={styles.map}>Map</div>
      <div className={styles.start}>Start</div>
    </div>
    </Wrapper>
  )
}

const Wrapper=tw.div``
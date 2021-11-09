
import  {useEffect}  from 'react'
import Head from 'next/head'
import Image from 'next/image'
//import styles from '../styles/Home.module.css'
import Map from './components/Map'






export default function Home() {

  return (

    <Wrapper>
    
      <Map id='map'>Map</Map>
      <ActionItems>Start</ActionItems>
      
    </Wrapper>
  )
}

const Wrapper=tw.div`
flex flex-col bg-red-300 h-screen`
const Map=tw.div`bg-red-500 flex-1`
const ActionItems=tw.div`flex-1 `
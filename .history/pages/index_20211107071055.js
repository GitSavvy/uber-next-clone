import Head from 'next/head'
import Image from 'next/image'
//import styles from '../styles/Home.module.css'
import tw from "tailwind-styled-components"

export default function Home() {
  return (

    <Wrapper>
    
      <Map>Map</Map>
      <ActionItems>Start</ActionItems>
      
    </Wrapper>
  )
}

const Wrapper=tw.div`
flex flex-col`
const Map=tw.div`bg-red-500 h-screen`
const ActionItems=tw.div`flex-1 `
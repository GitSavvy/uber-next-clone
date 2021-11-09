import Head from 'next/head'
import Image from 'next/image'
//import styles from '../styles/Home.module.css'
import tw from "tailwind-styled-components"
import mapboxgl from 'mapbox-gl'

mapboxgl.accessToken = 'pk.eyJ1Ijoic2F2dnkyMSIsImEiOiJja3ZwMGMxenQxb2p5MnhvdXo4dDJkaHZ2In0.o3mMN04sjgqafbvbGd8mGg';

export default function Home() {

  const map = new mapboxgl.Map({
    container: 'YOUR_CONTAINER_ELEMENT_ID',
    style: 'mapbox://styles/mapbox/streets-v11'
    });




  return (

    <Wrapper>
    
      <Map>Map</Map>
      <ActionItems>Start</ActionItems>
      
    </Wrapper>
  )
}

const Wrapper=tw.div`
flex flex-col bg-red-300 h-screen`
const Map=tw.div`bg-red-500 flex-1`
const ActionItems=tw.div`flex-1 `
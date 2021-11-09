
import  {useEffect}  from 'react'
import Head from 'next/head'
import Image from 'next/image'
//import styles from '../styles/Home.module.css'






export default function Home() {

  useEffect(() => {
    map.current = new mapboxgl.Map({
    container: 'map',
    //style: 'mapbox://styles/mapbox/streets-v11',
    style: 'mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph',
    center: [78.476681027237, 22.1991660760527],
    zoom: 3
    });
    });
    


  




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
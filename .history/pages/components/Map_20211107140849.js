import React from 'react'
import tw from "tailwind-styled-components"
import mapboxgl from 'mapbox-gl'
import  {useEffect}  from 'react'


mapboxgl.accessToken = 'pk.eyJ1Ijoic2F2dnkyMSIsImEiOiJja3ZwMGMxenQxb2p5MnhvdXo4dDJkaHZ2In0.o3mMN04sjgqafbvbGd8mGg';


const Map = () => {

    useEffect(() => {
      const  map = new mapboxgl.Map({
        container: 'map',
        //style: 'mapbox://styles/mapbox/streets-v11',
        style: 'mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph',
        center: [78.476681027237, 22.1991660760527],
        zoom: 3
        });




        const addToMap= () => {
          const marker1 = new mapboxgl.Marker()
          .setLngLat([88.33778, 22.54111])
          .addTo(map);
          }


    return (
      <Wrapper id='map'></Wrapper>
    )
}

export default Map

const Wrapper=tw.div`flex-1`
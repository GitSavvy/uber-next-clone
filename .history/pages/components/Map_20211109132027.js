import React from 'react'
import tw from "tailwind-styled-components"
//import mapboxgl from 'mapbox-gl'
import  {useEffect}  from 'react'


mapboxgl.accessToken = 'pk.eyJ1Ijoic2F2dnkyMSIsImEiOiJja3ZwMGMxenQxb2p5MnhvdXo4dDJkaHZ2In0.o3mMN04sjgqafbvbGd8mGg';


const Map = (props) => {
  console.log('props are -->',props)

    useEffect(() => {
      const  map = new mapboxgl.Map({
        container: 'map',
        //style: 'mapbox://styles/mapbox/streets-v11',
        style: 'mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph',
        center: [78.476681027237, 22.1991660760527],
        zoom: 3
        });

       // addToMap(map);
       console.log('pickUpCoordinates:',props.pickUpCoordinates)
       console.log('dropOffCoordinates:',props.dropOffCoordinates)
       
        if(props.pickUpCoordinates){
          addToMap(map,props.pickUpCoordinates)
        }
        if(props.dropOffCoordinates){
          addToMap(map,props.dropOffCoordinates)
        }

         } , [props.pickUpCoordinates,props.dropOffCoordinates]
        );

const addToMap= (map,coordinates) => {
  const marker1 = new mapboxgl.Marker()
  .setLngLat(coordinates).addTo(map);

  }

    return (
      <Wrapper id='map'></Wrapper>
    )
}

export default Map

const Wrapper=tw.div`flex-1`
import {useEffect} from 'react'
import {useState} from 'react'

import tw from "tailwind-styled-components"
//import Link from 'next/link'
import Map from './components/Map'



const Confirm = () => {

    const [ pickUpCoordinates,setPickUpCoordinates]  = useState()
    const [ dropOffCoordinates,setDropOffCoordinates] = useState()

    const getPickupCoorinates= () => {

        const pLocation='Kolkata';
        fetch(
            `https://api.mapbox.com/geocoding/v5/mapbox.places/${pLocation}.json?`+
            new URLSearchParams({
                access_token:'pk.eyJ1Ijoic2F2dnkyMSIsImEiOiJja3ZwMGMxenQxb2p5MnhvdXo4dDJkaHZ2In0.o3mMN04sjgqafbvbGd8mGg',limit:1
            })
        )
        .then(response => response.json())
        .then( data => {
           // console.log('Pick Up Location is =>',data.features[0].center)
            setPickUpCoordinates(data.features[0].center)
        })
    }
    const getDropOffCoordinates= () => {

        const dLocation='Mumbai';
        fetch(
            `https://api.mapbox.com/geocoding/v5/mapbox.places/${dLocation}.json?`+
            new URLSearchParams({
                access_token:'pk.eyJ1Ijoic2F2dnkyMSIsImEiOiJja3ZwMGMxenQxb2p5MnhvdXo4dDJkaHZ2In0.o3mMN04sjgqafbvbGd8mGg',limit:1
            })
        )
        .then(response => response.json())
        .then( data => {
            console.log('Drop Location is =>',data.features[0].center)
            setDropOffCoordinates(data.features[0].center)
        })
    }
    useEffect(() => {
      getPickupCoorinates();
      getDropOffCoordinates();
    }, [])



    return (
        <Wrapper>
            <Map>
            pickUpCoordinates {pickUpCoordinates}
            dropOffCoordinates {dropOffCoordinates}
            </Map>
            <RideContainer> ride Selector Confirm button
           

            </RideContainer>
        </Wrapper>
    )
}

export default Confirm

const Wrapper=tw.div`flex h-screen flex-col`
const RideContainer=tw.div`flex-1 `
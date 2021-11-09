import {useEffect} from 'react'
import tw from "tailwind-styled-components"
import Link from 'next/link'
import Map from './components/Map'



const Confirm = () => {


    const getCoorinates= () => {

        const location='Kolkata';
        fetch(
            `https://api.mapbox.com/geocoding/v5/mapbox.places/${location}.json?`+
            new URLSearchParams({
                access_token:'pk.eyJ1Ijoic2F2dnkyMSIsImEiOiJja3ZwMGMxenQxb2p5MnhvdXo4dDJkaHZ2In0.o3mMN04sjgqafbvbGd8mGg'
            })
        )
        .then(response => response.json())
        .then( data => {
            console.log(data)
        })
        
    }

    useEffect(() => {
      getCoorinates();
    }, [])



    return (
        <Wrapper>            
            <Map></Map>
            <RideContainer> ride Selector Confirm button </RideContainer>
        </Wrapper>
    )
}

export default Confirm

const Wrapper=tw.div`flex h-screen flex-col`
const RideContainer=tw.div`flex-1 `
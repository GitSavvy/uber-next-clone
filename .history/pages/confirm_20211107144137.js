import {useEffect} from 'react'
import tw from "tailwind-styled-components"
import Link from 'next/link'
import Map from './components/Map'



const Confirm = () => {


    const getCoorinates= () => {

        const location='Kolkata';
        fetch(
            `https://api.mapbox.com/geocoding/v5/mapbox.places/${location}.json`
        .then(response => response.json())
        .then( data => {
            console.log(data)
        })
        )
    }

    useEffect(() => {
        effect
        return () => {
            cleanup
        }
    }, [input])



    return (
        <Wrapper>            
            <Map></Map>
            <RideContainer> ride Selector Confirm button </RideContainer>
        </Wrapper>
    )
}

export default confirm

const Wrapper=tw.div`flex h-screen flex-col`
const RideContainer=tw.div`flex-1 `
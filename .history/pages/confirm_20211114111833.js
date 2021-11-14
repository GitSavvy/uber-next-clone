import {useEffect,useState} from 'react'
//import {} from 'react'

import tw from "tailwind-styled-components"
//import Link from 'next/link'
import Map from './components/Map'
//import { useRouter } from 'next/dist/client/router'
import { useRouter } from 'next/router'



const Confirm = () => {

    const router =useRouter()
    const {pickUpSearch,dropSearch} = router.query
    console.log('pickupSearch in confirm page',pickUpSearch)
    console.log('dropSearch in confirm page',dropSearch)


    const [ pickUpCoordinates,setPickUpCoordinates]  = useState()
    const [ dropOffCoordinates,setDropOffCoordinates] = useState()

    const getPickupCoorinates= (pickUpSearch) => {

       // const pLocation='Digha';
        fetch(
            `https://api.mapbox.com/geocoding/v5/mapbox.places/${pickUpSearch}.json?`+
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
    const getDropOffCoordinates= (dropSearch) => {

        //const dLocation='Calcutta';
        fetch(
            `https://api.mapbox.com/geocoding/v5/mapbox.places/${dropSearch}.json?`+
            new URLSearchParams({
                access_token:'pk.eyJ1Ijoic2F2dnkyMSIsImEiOiJja3ZwMGMxenQxb2p5MnhvdXo4dDJkaHZ2In0.o3mMN04sjgqafbvbGd8mGg',limit:1
            })
        )
        .then(response => response.json())
        .then( data => {
            //console.log('Drop Location is =>',data.features[0].center)
            setDropOffCoordinates(data.features[0].center)
        })
    }
    useEffect(() => {
      getPickupCoorinates(pickUpSearch);
      getDropOffCoordinates(dropSearch);
    console.log('dropSearch in confirm page',dropSearch)
    }, [pickUpSearch,dropSearch])


    console.log('pickUpCoordinates',pickUpCoordinates)
    console.log('dropOffCoordinates',dropOffCoordinates)

    return (
        <Wrapper>
            <Map
            pickUpCoordinates={pickUpCoordinates}
            dropOffCoordinates={dropOffCoordinates}
            />
            <RideContainer> ride Selector Confirm button</RideContainer>
        </Wrapper>
    )
}

export default Confirm

const Wrapper=tw.div`flex h-screen flex-col`
const RideContainer=tw.div`flex-1 `
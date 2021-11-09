import React from 'react'
import tw from "tailwind-styled-components"
import Link from 'next/link'
import Map from './components/Map'



const confirm = () => {
    return (
        <Wrapper>            
            <Map></Map>
        </Wrapper>
    )
}

export default confirm

const Wrapper=tw.div`flex h-screen`
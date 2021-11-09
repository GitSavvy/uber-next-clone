
import  {useEffect}  from 'react'
import Head from 'next/head'
import Image from 'next/image'
//import styles from '../styles/Home.module.css'
import tw from "tailwind-styled-components"
import Map from './components/Map'


export default function Home() {

  return (

    <Wrapper>

      <Map>Map</Map>
      <ActionItems>
        <Header>
          <UberLogo src='https://i.ibb.co/84stgjq/uber-technologies-new-20218114.jpg'></UberLogo>
          <Profile>
            <Name>Shashwat Gupta</Name>
            <UserImage src='https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260'></UserImage>
          </Profile>
          
          </Header>




      </ActionItems>
      
    </Wrapper>
  )
}

const Wrapper=tw.div`flex flex-col h-screen`
//const Map=tw.div`bg-red-500 flex-1`
const ActionItems=tw.div`flex-1 `
const Header=tw.div`flex justify-between`
const UberLogo=tw.img`h-28`
const Profile=tw.div`
flex`
const Name=tw.div``
const UserImage=tw.img`h-30 w-30`
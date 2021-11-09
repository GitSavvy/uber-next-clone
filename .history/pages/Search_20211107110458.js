import React from 'react'
import tw from "tailwind-styled-components"

const Search = () => {
    return (
        <Wrapper>

            <ButtonContainer>
                <BackButton src='https://img.icons8.com/ios-filled/50/000000/left.png' />
            </ButtonContainer>

            <InputContainer>
            <FromToIcons>
            <Circle src='https://img.icons8.com/ios-filled/50/9CA3AF/filled-circle.pnghttps://img.icons8.com/ios-filled/50/9CA3AF/filled-circle.png' />

            <Line src='https://img.icons8.com/ios/50/9CA3AF/vertical-line.png' />

            <Square src='https://img.icons8.com/windows/50/000000/square-full.png' />
            </FromToIcons>
            <InputBoxes>
                <Input placeholder='Enter Pick up Location'></Input>
                <Input placeholder='Where To ?'></Input>
            
            </InputBoxes>


            </InputContainer>




        </Wrapper>
    )
}

export default Search

const Wrapper= tw.div`bg-gray-200 h-screen`
const ButtonContainer= tw.div`bg-white`
const BackButton= tw.img`h-12 `
const InputContainer= tw.div`bg-white`
const FromToIcons= tw.div`w-10`
const Circle= tw.img`px-2`
const Line= tw.img`px-2`
const Square= tw.img`px-1`
const InputBoxes= tw.div`flex flex-col`
const Input= tw.input`h-10 bg-gray-200`


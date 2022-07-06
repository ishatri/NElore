import React from 'react'
import styled from 'styled-components'
import { GiEarthAmerica, GiPikeman, GiRomanShield, GiWheat } from 'react-icons/gi'

const StatsData = [
    {
        icon: (<GiEarthAmerica />),
        title: "Diverse Flora and Fauna",
        desc: "Over 30 National Parks of Northeast India are a delight to offbeat travelers who are constantly looking for unspoiled and unexplored places",
    },
    {
        icon: (<GiPikeman />),
        title: "Insane Adventure Sports",
        desc: "Northeast India is now growing into the hottest destination for adventure junkies in the country ",

    },
    {
        icon: (<GiRomanShield />),
        title: "Experience the unique culture",
        desc: "Northeast India, considered as one of most culturally diverse regions of the world, is a land inhabited by more than 200 fascinating tribes.",

    },
    {
        icon: (<GiWheat
        />),
        title: "Exclusive Cuisine",
        desc: " North-East is an exciting mélange of various people and also cultures. Their flavors and also dishes are as unique as their vibrant way of living. ",
    },
]

const Stats = () => {
    return (
        <StatsContainer>
            <Heading>
                Why visit North-East?
            </Heading>
            <Wrapper>
                {StatsData.map((item, index) => {
                    return (
                        <StatsBox key={index}>
                            <Icon>{item.icon}</Icon>
                            <Title>{item.title}</Title>
                            <Description>{item.desc}</Description>
                        </StatsBox>
                    )
                })}
            </Wrapper> </StatsContainer>
    )
}

export default Stats

const StatsContainer = styled.div`
width: 100%;
background: #fff;
color: #000;
display: flex;
flex-direction: column;
justify-content: center;
padding: 4rem calc((100vw - 1300px)/2);

`

const Heading = styled.h1`
text-align: start;
font-size: clamp(1.5rem, 5vw, 2rem);
margin-bottom: 3rem;
padding: 0 2rem;
`

const Wrapper = styled.div`
display: grid;
grid-template-columns: repeat(4, 1fr);
grid-gap: 10px;



@media screen and (max-width: 768px)
{
    grid-template-columns: 1fr;
}
@media screen and (max-width: 500px)
{
    grid-template-columns: 1fr;
}
`
const StatsBox = styled.div`
height: 100%;
width: 100%;
padding: 2rem;
`
const Icon = styled.div`
font-size: 3rem;
margin-bottom: 1rem; `

const Title = styled.div`
font-size: clamp(1rem, 1.5vw, 1rem);
margin-bottom: 0.5rem;
`

const Description = styled.div`
`
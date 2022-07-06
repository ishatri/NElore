import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import { FaRegLightbulb } from 'react-icons/fa'
import { IoMdCheckmarkCircleOutline } from 'react-icons/io'
import { useStaticQuery, graphql } from 'gatsby'


const Testimonials = () => {
    const data = useStaticQuery(graphql`
    query {
        allFile(filter: {ext: {regex: "/(jpg)|(png)|(jpeg)/"},
          name: {in: ["ved", "ishve"]}}) {
          edges {
            node {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
      `)
    return (
        <TestimonialsContainer>
            <Topline>
                Testimonials
            </Topline>
            <Description>
                What People are saying
            </Description>
            <ContentWrapper>
                <ColumnOne>
                    <Testimonial>
                        <IoMdCheckmarkCircleOutline css={`color: #f9b19b; font-size: 2rem; margin-bottom: 0.5rem;`} />
                        <h3> Ved Rajan
                        </h3>
                        <p> "Exploring the diverse culture and picturesque scenery of Northeast was the greatest experience of my life"</p>
                    </Testimonial>
                    <Testimonial>
                        <FaRegLightbulb css={`color: #3fffa8; font-size: 2rem; margin-bottom: 0.5rem;`} />
                        <h3> Ishve Bixby
                        </h3>
                        <p> "Northeast region is a testimony to India's great cultural heritage , I am absolutely blesssed to have experienced this divine`"</p>
                    </Testimonial>
                </ColumnOne>
                <ColumnTwo>
                    {data.allFile.edges.map((image, key) => (
                        <Images key={key} fluid={image.node.childImageSharp.fluid} />
                    ))}

                </ColumnTwo>
            </ContentWrapper>
        </TestimonialsContainer>
    )
}

export default Testimonials

const TestimonialsContainer = styled.div`
width: 100%;
background: #fcfcfc;
color: #000;
padding: 4rem calc((100vw - 1300px)/2)
height: 100%;
`

const Topline = styled.p`
color: #077bf1;
font-size: 1rem;
padding-left: 2rem;
margin-bottom: 0.75rem;
`

const Description = styled.p`
text-align: start;
padding-left: 2rem;
margin-bottom: 4rem;
font-size: clamp(1.5rem , 5vw, 2rem);
font-weight: bold;


`

const ContentWrapper = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
padding: 0 2rem;


@media screen and (max-width: 768px)
{
    grid-template-columns: 1fr;
}`

const ColumnOne = styled.div`
display: grid;
grid-template-rows:1fr 1fr;

`

const Testimonial = styled.div`
padding-top: 1rem;
padding-right: 2rem;


h3{
    margin-bottom: 1 rem;
    font-size: 1.5rem;
    font-style: italic;
}

p{
    color: #3b3b3b;
}
`

const ColumnTwo = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
margin-top: 2rem;
grid-gap: 10px;

@media screen and(max-width: 500px) {
    grid-template-columns: 1fr;
}`

const Images = styled(Img)`
border-radius: 10px;
height: 100%;
`

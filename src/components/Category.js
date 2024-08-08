import React from 'react'
import styled from 'styled-components'

const Category = () => {
  return (
    <div>
      <Container>
        <Wrap>
          <img src="/videos/disney.gif" alt="video/mp4" />
          <img src='/images/viewers-disney.png' alt='disney' />
        </Wrap>
        <Wrap>
          <img src="/videos/marvel.gif" alt="video/mp4" />
          <img src='/images/viewers-marvel.png' alt='marvel' />
        </Wrap>
        <Wrap>
          <img src="/videos/pixar.gif" alt="video/mp4" />
          <img src='/images/viewers-pixar.png' alt='pixar' />
        </Wrap>
        <Wrap>
        <img src="/videos/star-wars.gif" alt="video/mp4" />
        <img src='/images/viewers-star-wars.png' alt='starwars' />
        </Wrap>
        <Wrap>
        <img src="/videos/national-geographic.gif" alt="video/mp4" />
        <img src='/images/viewers-national-geographic.png' alt='disney' />
        </Wrap>
      </Container>
    </div>
  )
}

export default Category

const Container = styled.div`
  margin-top: 30px;
  padding: 30px 0px 26px;
  display: grid;
  gap: 25px;
  grid-template-columns: repeat(5,1fr);

  @media (max-width: 768px) {
    grid-template-columns: repeat(1,1fr);
}
`

const Wrap = styled.div`
  padding-top: 56.25%;
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
      rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  border: 3px solid rgba(249,249,249,0.1);
  img {
    inset: 0px;
    display: block;
    height: 100%;
    object-fit: cover;
    opacity: 1;
    position: absolute;
    transition: opacity 500ms ease-in-out 0s;
    width: 100%;
    z-index: 1;
  }
  video{
    width: 100%;
    position: absolute;
    top: 0;
    opacity: 0
    z-index: 0;
  }

&:hover{
  box-shadow: rgb(0 0 0 /80%) 0px 40px 58px -16px
              rgb(0,0,0,72%) 0px 
  transform:scale(1.05);
  border-color: rgba(249, 249, 249, 0.8);
  video{
  opacity: 1;
  } 
}`;

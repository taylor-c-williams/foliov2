/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled'

export function HeroTypeContainer({ children }) {
  const Container = styled.div`
    display: grid;
    grid-template-rows: 1fr 1fr 1fr;
    justify-content: flex-end;
    align-items: flex-start;
    margin-top: 60px;
    width: 64%;
    color: #000;
  `
  const TypographyRow = styled.div`
    @font-face {
      font-family: 'Medium';
      src: local('Medium'),
        url(../../assets/fonts/Medium.otf) format('opentype');
    }
    font-family: 'Medium', sans-serif;
    color: black;
    display: inline-block;
    // font outline:
    -webkit-text-fill-color: #ddfb02; /* Will override color (regardless of order) */
    -webkit-text-stroke-width: 2px;
    -webkit-text-stroke-color: #e4e7ad;
  `
  return (
    <>
      <Container>
        <TypographyRow css={{ fontSize: '9vw' }}>Taylor</TypographyRow>
        <TypographyRow css={{ fontSize: '8.6vw' }}>Callan</TypographyRow>
        <TypographyRow css={{ fontSize: '7.1vw' }}>Williams</TypographyRow>
      </Container>
    </>
  )
}

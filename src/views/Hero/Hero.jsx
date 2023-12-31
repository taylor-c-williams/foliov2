/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled'
import { HeroImageContainer } from './HeroImageContainer.jsx'
import { HeroTypeContainer } from './HeroTypeContainer.jsx'

export function Hero() {
  const Container = styled.div`
    display: flex;
    flex-direction: column;
  `

  return (
    <Container>
      <HeroImageContainer />
      <HeroTypeContainer />
    </Container>
  )
}

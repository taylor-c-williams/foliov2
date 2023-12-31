/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled'
import talgai from '../../assets/images/moshed3.gif'
import juno from '../../assets/images/juno.png'

export function HeroImageContainer() {
  const Container = styled.div`
    display: flex;
    justify-content: start;
    align-items: flex-start;
    width: 70%;
  `

  const Image = styled.img`
    width: 100%;
  `

  return (
    <>
      <Container>
        <Image
          src={juno}
          alt='juno'
          css={{
            height: '90%',
            position: 'relative',
            zIndex: -2,
            opacity: 0.9,
          }}
        />
        <Image
          src={talgai}
          alt='mountains'
          css={{
            marginLeft: -130,
            marginTop: -95,
            clipPath: 'polygon(100% 35%,100% 60%,0% 60%,0% 35%)',
            border: '1px solid #fff',
            width: '45%',
          }}
        />
      </Container>
      <div
        className='weather rain'
        css={{
          position: 'relative',
          marginTop: -190,
          marginLeft: 400,
          zIndex: -1,
          width: '50%',
          height: '100px',
          border: '0.25px dashed rgba(255, 255, 255, 0.75)',
          opacity: 0.5,
        }}></div>
    </>
  )
}

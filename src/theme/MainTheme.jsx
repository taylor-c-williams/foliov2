/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import styled from '@emotion/styled'

export function MainContainer({ children }) {
  const Container = styled.div`
    display: flex;
  `
  return <Container>{children}</Container>
}

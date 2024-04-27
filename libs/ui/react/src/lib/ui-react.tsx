import styled from 'styled-components'

/* eslint-disable-next-line */
export interface UiReactProps {}

const StyledUiReact = styled.div`
  color: pink;
`

export function UiReact(props: UiReactProps) {
  return (
    <StyledUiReact>
      <h1>Welcome to UiReact!</h1>
    </StyledUiReact>
  )
}

export default UiReact

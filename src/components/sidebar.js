import styled from 'styled-components'
import { breakpoints, colors } from '../utils/constants'

const StyledDiv = styled.div`
  background-color: ${colors.blue};
  height: 100vh;
  overflow-y: auto;
  @media(max-width: ${breakpoints.md}) {
    display: none;
  }
`

const Sidebar = props => {
  return (
    <StyledDiv {...props}/>
  )
}

export default Sidebar
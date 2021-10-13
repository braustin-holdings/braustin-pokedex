import styled from 'styled-components'
import { breakpoints } from '../utils/constants'

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: ${({ cols, children }) => cols ? cols : children.map(child => '1fr').join(' ')};
  @media (max-width: ${breakpoints.md}) {
    display: block;
  }
`

const Grid = props => {
  return <StyledGrid {...props} />
}

export default Grid
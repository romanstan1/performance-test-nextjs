import {lightgrey, mediumgrey, darkgrey, backgroundgrey, electricblue, hoverelectricblue} from '../../colors'
import styled from 'styled-components'

const StyledShipping = styled.div`
  padding: 40px 10%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${backgroundgrey};
  text-align: center;
  h3 {
    color: ${darkgrey};
    padding: 20px 0;
  }
  p {
    line-height: 32px;
    padding: 20px 0;
    color: ${mediumgrey};
  }
`
export default () =>
<StyledShipping>
  <h3>Free shipping and returns on every order</h3>
  <p>
    We have a 30-day, hassle-free return or exchange policy as well as a one-year,
    no scratch guarantee for our lenses;
    we'll replace your scratched lenses for free within the first 12 months.
  </p>
</StyledShipping>

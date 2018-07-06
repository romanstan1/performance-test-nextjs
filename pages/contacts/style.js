import styled from 'styled-components'
import {lightgrey, mediumgrey, darkgrey, backgroundgrey, offwhite} from '../../colors'

export const StyledContacts = styled.div`
  background: white;
  height: 100vh;
  > div {
    padding-bottom: 50px;
    height: calc(60vh - 64px);
    background: ${backgroundgrey};
  }
`;

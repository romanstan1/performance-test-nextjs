import React, {Component, Fragment} from 'react'
import {lightgrey, mediumgrey, darkgrey, backgroundgrey} from '../../colors'
import styled from 'styled-components'

const CheckConnection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content:space-between;
  align-items: center;
  margin: 50px 0 50px 0;
  line-height: 30px;
  color: ${darkgrey};
  h3 {
    padding: 10px 0;
  }
  h4 {
    font-weight: 400;
  }
`;

export default ({plural}) =>
<CheckConnection>
   <h3> Product{plural?'s':null} not available</h3> <h4>Check your internet connection</h4>
</CheckConnection>

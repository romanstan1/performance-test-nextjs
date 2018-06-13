import React, {Fragment} from "react";
import styled from 'styled-components'
import {lightgrey, mediumgrey, darkgrey, backgroundgrey} from '../../colors'

const StyledFooter = styled.footer`
  background: #fff;
  padding: 0px 0% 20px 0%;
  display: flex;
  flex-direction: column;
  justify-content:space-between;
  align-items: center;
  text-align: center;
  div.divider.footer {
    padding: 0 0 40px 0;
  }
  h3 {
    color: ${darkgrey};
    text-align: center;
    font-weight: 400;
    font-size: 16px;
  }
  input {
    display: block;
    height: 38px;
    line-height: 38px;
    padding-top: 2px;
    outline: none;
    text-indent: 10px;
    width: calc(100% - 150px);
    margin: 20px 75px;
    border: 1px solid ${lightgrey};
    margin-bottom: 30px;
    font-size: 13px;
    :focus {
      ::placeholder {
      color: white;
      }
    }
    ::placeholder {
      color: ${mediumgrey};
      font-family: "Raleway", sans-serif;
    }
  }
  h4 {
    color: ${mediumgrey};
    text-align: center;
    font-weight: 400;
    font-size: 13px;
    margin: 20px 80px;
    line-height: 24px;
  }
  div.content {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    span {
      color: #676f78;
      font-size: 12px;
      margin: 10px;
    }
  }
`;

export default () =>
  <StyledFooter>
    <div className="divider footer"/>
    <h3>Sign up to our newsletter</h3>
    <input type="text" placeholder="Enter email address"/>
    <h3>Get in touch!</h3>
    <h4>We’re available by phone (0203 567 9200)<br/> and chat every day, 9 a.m – 9 p.m.</h4>
    <div className="divider"/>
    <div className='content'>
      <span>Terms and conditions</span>
      <span>Privacy </span>
      <span>Cookie policy</span>
    </div>
  </StyledFooter>

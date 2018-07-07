import React, {Component, Fragment} from 'react'
import CTAButton from '../../components/CTAButton'
import {StyledContactPDP, ProductDetails} from './style'
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';
import Shipping from '../../components/Shipping'

export default ({handleAddToBasket, content}) =>
  <StyledContactPDP>
    <Nav/>

    <ProductDetails>
      <div className="image">
        <img src={content.productImageUrl} alt=""/>
      </div>
      <div className='text'>
        <h3>{content.productName}</h3>
        <div><h4>{content.productType} </h4> <h4>30 lenses</h4></div>
        <h5>£{content.price}</h5>
      </div>
      <div className="prescription">
        <p>Base Curve </p>
        <p>{content.prescriptions.bc}</p>
        <p>/</p>
        <p>Diameter </p>
        <p>{content.prescriptions.dia}</p>
        <p>/</p>
        <p>Sphere </p>
        <p>{content.prescriptions.pwr}</p>
      </div>
    </ProductDetails>

    <CTAButton onClick={handleAddToBasket}>
      Add To Basket
    </CTAButton>
    <br/>
    <br/>
    <Shipping/>
    <Footer/>
  </StyledContactPDP>

import React, {Component} from 'react'
import {Style, Shipping, Recommended} from './style'
import CTAButton from '../../components/CTAButton'
import Radio from '@material-ui/core/Radio';
import MenuItem from '@material-ui/core/MenuItem';
import {connect} from 'react-redux'
import {addToBasket} from './actions'
import Footer from '../../components/Footer'
import Nav from '../../components/Nav'
import Carousel from '../../components/Carousel'

// const recommendedBrands =  [
//   'Specsavers',
//   'Aurora',
//   'Specsavers'
// ]
// const recommendedPrices =  [
//   '79',
//   '129',
//   '89'
// ]

class ProductDisplay extends Component {
  // constructor(props) {
  //   super(props)
  //   // const routeDetails = props.match.params.id.split('-')
  //   this.state = {
  //     // brand: routeDetails[0],
  //     // price: routeDetails[1],
  //     // image: `${routeDetails[2]}.jpg`,
  //     color: 'jet black elclipse',
  //     added: false
  //   }
  // }
  state = {
    added: false
  }

  static async getInitialProps ({query}) {
    const route = query['0']
    // const params = query.slug.split('-')
    // return {route, id: params[0], brand: params[1], price: params[2]}
    return {route}
  }

  handleChange = e => {
    this.setState({ color: e.target.value })
  }

  handleAddToBasket = () => {
    const {brand, price, image} = this.state
    this.props.dispatch(addToBasket(brand, price, image, color))
    this.setState({added: true})
  }

  render() {
    const {added} = this.state
    const {id, brand, price} = this.props
    return (
      <Style>
        <Nav/>

        <div className='image-wrap'>
          <img src={'/static/all-plp/' + id + '-front-940x529.jpg'} alt=""/>
          <div className="text">
            {/* <div className="name">{brand}</div> */}
            {/* <div className="price">£{price}</div> */}
          </div>
        </div>


        {/* <Carousel id={id} images={images} brand={item.brand} price={item.price}/> */}

        {/* <div className='radios'>
          <Radio
            checked={this.state.color === 'jet black eclipse'}
            onChange={this.handleChange}
            value="jet black eclipse"
            name="radio-button-demo"
            color="default"
            classes={{ root: 'black'}}
          />
          <Radio
            checked={this.state.color === 'whiskey tortoise'}
            onChange={this.handleChange}
            value="whiskey tortoise"
            name="radio-button-demo"
            color="default"
            classes={{ root: 'whiskey'}}
          />
          <Radio
            checked={this.state.color === 'midnight blue'}
            onChange={this.handleChange}
            value="midnight blue"
            name="radio-button-demo"
            color='default'
            classes={{ root: 'midnight'}}
          />
        </div> */}
        {/* <div className='color'>{this.state.color}</div> */}

        <br/><br/>
        <CTAButton>
          <MenuItem onClick={this.handleAddToBasket}>
            {added? 'Successfully added!' : 'Add To Basket'}
          </MenuItem>
        </CTAButton>
        <br/><br/>

        <Shipping>
          <h3>Free shipping and returns on every order</h3>
          <p>
            We have a 30-day, hassle-free return or exchange policy as well as a one-year,
            no scratch guarantee for our lenses;
            we'll replace your scratched lenses for free within the first 12 months.
          </p>
        </Shipping>
        <div><br/><br/> Recommended here <br/><br/></div>
        <Footer/>
      </Style>
    )
  }
}

export default connect(state => ({
}))(ProductDisplay)

// {/* <Recommended>
//   <h3>Recommended</h3>
//
//   {
//     recommendedAssets.map((img, i) =>
//     <div className='image-wrap' key={img}>
//       <img src={img} alt=""/>
//       <div className="text">
//         {/* <div className="name">{recommendedBrands[i]}</div> */}
//         {/* <div className="price">£{recommendedPrices[i]}</div> */}
//       </div>
//     </div>
//   )
// }
//
// </Recommended> */}

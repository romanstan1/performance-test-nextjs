import {productMatrix} from './matrix'

export function lookUpProduct(barcode) {
  const product = productMatrix.find(product => product.barcode === barcode)
  if(product) return product
  else {
    return {
      productName: 'Lense Not Found',
      productImageUrl: null,
      barcode: null,
    }
  }
}

import React, { useContext } from 'react'
import { ProductContext } from 'vtex.product-context'

function withProductContext(Component) {
  return function ProductContextWrapper(props) {
    const { product, selectedItem } = useContext(ProductContext)
    return (
      <Component {...props} product={product} selectedItem={selectedItem} />
    )
  }
}

export default withProductContext

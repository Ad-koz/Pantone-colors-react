import React from 'react'
import { ProductsObj } from '../DataAPI/DataAPI';
import { ListItem, Card, ListItemText } from "@mui/material";


interface ProductProps {
    product: ProductsObj;
}

const ProductsTab = ({product}: ProductProps) => {
  return (
    <p>
      {product.id}
       
          {product.name}
      
  </p>
  )
}

export default ProductsTab
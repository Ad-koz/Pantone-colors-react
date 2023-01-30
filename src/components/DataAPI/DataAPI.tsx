import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios';
import ProductsTab from '../ProductsTab/ProductsTab';
import { Typography } from '@mui/material'

export interface ProductsObj 
  {
  id: number;
  name: string;
  year: number;
  color: string;
  pantone_value: string;
  }


const DataAPI = () => {

  const [products, setProducts] = useState<ProductsObj[] | []>([])
  useEffect(() => {
    
    fetch("https://reqres.in/api/products")
    .then((response) => response.json())
    .then((dane) => {
  
       setProducts(dane.data)
})
    }, [])

  return (
    <>
  
   {products.length !== 0 &&
    products.map((el, i) => {
      return <ProductsTab product = {el} key={i} />
    })}
   </>
   
  )
}

export default DataAPI
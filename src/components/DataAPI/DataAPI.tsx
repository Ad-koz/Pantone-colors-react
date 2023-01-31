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
  function refreshPage() {
    window.location.reload();
  }
  const [products, setProducts] = useState<ProductsObj[] | []>([]);
  const [query, setQuery] = useState("");
  const [keyword, setKeyword] = useState('');
  const [allProducts, setAllProducts] = useState([]);
  //const [searchInput, setSearchInput] = useState("")
  useEffect(() => {
    
    fetch("https://reqres.in/api/products")
    .then((response) => response.json())
    .then((dane) => {
  
       setProducts(dane.data)
       
})
    }, [])
    const updateKeyword = (e:React.ChangeEvent<HTMLInputElement>) => {
      e.preventDefault();
      const filtered = products.filter(product => {
       return `${product.name.toLowerCase()} ${product.id}`.includes(keyword);
       
      })
      setKeyword(e.target.value);
      setProducts(filtered);
      if (keyword.length > 0) {
        products.filter((product) => {
        return product.name.match(keyword);
    });
    }
   }
  return (
    <>
    <button onClick={refreshPage}>Click to clear the filter</button>
       <div>
      <input placeholder="Enter id" type="search" value={keyword}  onChange={updateKeyword} 
       onKeyPress={(event) => {
          if (!/[0-9]/.test(event.key)) {
            event.preventDefault();
          }
        }} />
      {
      products.filter(product => {
        if (query === '') {
          return product;
        } else if (product.name.toLowerCase().includes(query.toLowerCase())) {
          return product;
        }
      }).map((product, index) => (
        <div className="box" key={index}>
          <p>{product.name}</p>
          <p>{product.id}</p>
        </div>
      ))
    }
    </div>

   {/* {products.length !== 0 &&
    products.map((el, i) => {
      return <ProductsTab product = {el} key={i} />
    })} */}
   </>
   
  )
}

export default DataAPI
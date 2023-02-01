import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios';
import ProductsTab from '../ProductsTab/ProductsTab';
import { Typography } from '@mui/material'
import TabHead from '../TabHead/TabHead';
import Input from '../ClearButton/ClearButton';
import ClearButton from '../ClearButton/ClearButton';
import Pagination from '../Pagination/Pagination';
import PaginatedTab from '../PaginatedTab/PaginatedTab';


export interface ProductsObj 
  {
  id: number;
  name: string;
  year: number;
  color: string;
  pantone_value: string;
  }


const DataAPI = () => {
  function refreshPage () 
    { window.location.reload()}
  
  const [products, setProducts] = useState<ProductsObj[] | []>([]);
  const [query, setQuery] = useState("");
  const [keyword, setKeyword] = useState("");

 
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
        return product.name.includes(keyword);
    });
    }
   }
   const inputStyle = { marginTop: "30px"}
  
   //PAGINATION
  
  return (
    <>
    <ClearButton  
  ></ClearButton>
       <div>
       <input style={inputStyle} placeholder="Enter id" type="search" value={keyword}  onChange={updateKeyword}
       onKeyPress={(event) => {
          if (!/[0-9]/.test(event.key)) {
            event.preventDefault();
          }
        }} 
        />
        <TabHead></TabHead>
      {
      products.filter(product => {
        if (keyword === product.name) {
          return products;
        } else if (product.name.toLowerCase().includes(keyword.toLowerCase())) {
          return <ProductsTab product={product}></ProductsTab>;
        }
      }).map((product, index) => (
        <div className="box" key={index}>
          <ProductsTab product={product}></ProductsTab>
          
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
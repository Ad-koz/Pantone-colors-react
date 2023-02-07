import React from 'react'
import { useState, useEffect } from 'react'

import ProductsTab from '../ProductsTab/ProductsTab';
import { Typography } from '@mui/material'
import TabHead from '../TabHead/TabHead';
import Input from '../ClearButton/ClearButton';
import ClearButton from '../ClearButton/ClearButton';
import Pagination from '../Pagination/Pagination';
import { convertCompilerOptionsFromJson } from 'typescript';
import "./DataAPI.css";



export interface CurrentPageObj {
  currentPage: number;
  setCurrentPage: (value: number) => void;
}
export interface ProductsObj 
  {
  id: number;
  name: string;
  year: number;
  color: string;
  pantone_value: string;
  }
  export interface PostObj {
    postsPerPage: number;
    totalPosts: number
  }
  


const DataAPI = () => {

  const [products, setProducts] = useState<ProductsObj[] | []>([]);
  const [query, setQuery] = useState("");
  const [keyword, setKeyword] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(5);
  useEffect(() => {
    
    fetch("https://reqres.in/api/products")
    .then(response => {
      if(!response.ok) {
        return response.text().then(text => { throw new Error(text)
        })
       }
      else {
       return response.json();
     }    
  })
   
    .then((dane) => {
       setProducts(dane.data)
      })
    .catch(err => {
      console.log(err.message) 
    })
    }, []);

  const updateKeyword = (e:React.ChangeEvent<HTMLInputElement>) => {
      e.preventDefault();
      const filtered = products.filter(product => {
       return `${product.name} ${product.id}`.includes(keyword);
       
      })
      setKeyword(e.target.value);
      setProducts(filtered);
      if (keyword.length > 0) {
        products.filter((product) => {
        return product.name.includes(keyword);
    });
    }
   }
   
  
   //PAGINATION

   const lastPostIndex = currentPage * postsPerPage;
   const firstPostIndex = lastPostIndex - postsPerPage;
   const currentPosts = products.slice(firstPostIndex, lastPostIndex)
  

   
  return (
    <>
    <ClearButton/>
       <div className = "tab">
        <div className="form__group__field">
       <input className="form__field"  placeholder="Enter id" id='name' type="search" value={keyword}  onChange={updateKeyword}
       onKeyPress={(event) => {
          if (!/[0-9]/.test(event.key)) {
            event.preventDefault();
          }
        }} 
        />
        <label className="form__label"></label>
        </div>
        <TabHead/>
      {
      currentPosts.filter(product => {
        if (keyword === product.name) {
          return products;
        } else if (product.name.toLowerCase().includes(keyword.toLowerCase())) {
          return <ProductsTab  product={product}></ProductsTab>;
        }
      }).map((product, index) => (
        <div className="box" key={index}>
          <ProductsTab product={product}></ProductsTab>
          
        </div>
      ))
    }
    <Pagination 
    totalPosts={products.length} 
    postsPerPage = {postsPerPage}
    setCurrentPage = {setCurrentPage}
    currentPage = {currentPage}></Pagination>
    </div>
   </>
   
  )
}

export default DataAPI
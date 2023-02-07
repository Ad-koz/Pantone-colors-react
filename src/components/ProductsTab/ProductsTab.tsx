import { ProductsObj } from '../DataAPI/DataAPI';
import * as React from 'react';
import { useState } from 'react'
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import { Gradient } from '@mui/icons-material';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { usePagination } from '@table-library/react-table-library/pagination';
import Modal from '../Modal/Modal';
import "./ProductsTab.css"


interface ProductProps {
    product: ProductsObj;
}


const ProductsTab = ({product}: ProductProps) => {
 
  const tableStyles = {
    width: "100px",
    background: product.color
  }
  const [modal, setModal] = useState(false)
    const toggleModal = () => {
      setModal(!modal)
  }
  
 

  return (
        <>
        <div className = 'table_div'>
        <TableBody>
           <TableRow 
           onClick = {toggleModal}
           className = "btn-modal">
              <TableCell  component="th" scope="row"  sx={{background: product.color,  width: "100px" }}>
                {product.id}
              </TableCell>
              <TableCell align="right" sx={{background: product.color,  width: "100px" }}>{product.name} </TableCell>
              <TableCell align="right" sx={{background: product.color,  width: "100px" }}>{product.year}</TableCell>
            </TableRow>
        </TableBody>
      </div>

   {modal && (
    <div className="modal">
    <div className="overlay"></div>
    <div className="modal-content">
        <h2 className = "modal-title">Product informations</h2>
        <p>Id: {product.id}</p>
        <p>Name: {product.name}</p>
        <p>Year: {product.year}</p>
        <p>Pantone-value: {product.pantone_value}</p>
        <button 
        className = 'close-modal'
        onClick = {toggleModal}>close</button>
    </div>
</div>
   )}

        </>
       
   
  )
}

export default ProductsTab
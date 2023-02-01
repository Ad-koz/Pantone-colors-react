import { ProductsObj } from '../DataAPI/DataAPI';
import * as React from 'react';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import { Gradient } from '@mui/icons-material';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { usePagination } from '@table-library/react-table-library/pagination';


interface ProductProps {
    product: ProductsObj;
}

const ProductsTab = ({product}: ProductProps) => {
 
  const tableStyles = {
    width: "100px",
    background: product.color
  }
 

  return (
        
        <TableBody>
          
           <TableRow>
              <TableCell component="th" scope="row"  sx={{background: product.color,  width: "100px" }}>
                {product.id}
              </TableCell>
              <TableCell align="right" sx={{background: product.color,  width: "100px" }}>{product.name} </TableCell>
              <TableCell align="right" sx={{background: product.color,  width: "100px" }}>{product.year}</TableCell>
            </TableRow>
        </TableBody>
       
        
       
   
  )
}

export default ProductsTab
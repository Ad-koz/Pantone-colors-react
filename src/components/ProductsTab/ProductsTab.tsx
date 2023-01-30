import { ProductsObj } from '../DataAPI/DataAPI';
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


interface ProductProps {
    product: ProductsObj;
}

const ProductsTab = ({product}: ProductProps) => {
  return (
    
          
        
        <TableBody>
          
           
              <TableCell component="th" scope="row">
                {product.id}
              </TableCell>
              <TableCell align="right">{product.name}</TableCell>
              <TableCell align="right">{product.year}</TableCell>
            
          
        </TableBody>
   
  )
}

export default ProductsTab
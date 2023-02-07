import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import "./TabHead.css"



export default function TabHead() {
  return (
    <div className = 'head_div'>
    <TableHead >
          <TableRow>
            <TableCell sx={{width: "100px"}}>Product Id</TableCell>
            <TableCell align="right" sx={{width: "100px"}}>Name</TableCell>
            <TableCell align="right" sx={{width: "100px"}}>Year</TableCell>
          </TableRow>
        </TableHead>
    </div>
  );
}


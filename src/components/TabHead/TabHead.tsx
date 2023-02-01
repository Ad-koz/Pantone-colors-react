import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';



export default function TabHead() {
  return (
    <TableHead sx={{width: "100px"}}>
          <TableRow >
            <TableCell sx={{width: "100px"}}>Product Id</TableCell>
            <TableCell align="right" sx={{width: "100px"}}>Name</TableCell>
            <TableCell align="right" sx={{width: "100px"}}>Year</TableCell>
          </TableRow>
        </TableHead>
  );
}


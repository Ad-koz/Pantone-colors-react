import React from 'react';
import DataAPI from './components/DataAPI/DataAPI';
import ProductsTab from './components/ProductsTab/ProductsTab';
import { ListItem, Card, ListItemText } from "@mui/material";
import TabHead from './components/TabHead/TabHead';
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import Paper from '@mui/material/Paper';


function App() {
  return (
    <div className="App">
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TabHead></TabHead>
       <DataAPI></DataAPI>
       </Table>
    </TableContainer>
       
    
       
    </div>
  );
}

export default App;

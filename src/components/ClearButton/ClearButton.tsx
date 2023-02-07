import React from 'react'
import Button from '@mui/material/Button';
import "./ClearButton.css";

const ClearButton = () => {
  function refreshPage () 
    { window.location.reload()}
  return (
   <div className = 'button_div'>
    <Button  onClick={() => {
      refreshPage();}} variant="outlined">Clear filter</Button>
    </div>
  )
}

export default ClearButton
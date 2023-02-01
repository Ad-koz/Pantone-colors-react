import React from 'react'
import Button from '@mui/material/Button';

const ClearButton = () => {
  function refreshPage () 
    { window.location.reload()}
  return (
    <Button onClick={() => {
      refreshPage();}} variant="outlined">Clear filter</Button>
  )
}

export default ClearButton
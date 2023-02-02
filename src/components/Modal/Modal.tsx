import { Typography } from '@mui/material';
import React from 'react'
import { useState } from 'react'
import { ProductsObj } from '../DataAPI/DataAPI';

interface ProductProps {
    product: ProductsObj;
}

const Modal = ({product}: ProductProps) => {
    const [modal, setModal] = useState(false)
    const toggleModal = () => {
      setModal(!modal)
  }
  return (
    <>
   <button onClick = {toggleModal}
   className = "btn-modal"> open </button>

    <div className="modal">
        <div className="overlay"></div>
        <div className="modal-content">
            <h2>Product informations</h2>
            
        </div>
    </div>
    </>
  )
}

export default Modal
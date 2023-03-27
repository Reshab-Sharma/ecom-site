import React, { useState } from 'react'
import "./Modal.css";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Dialog from '@mui/material/Dialog';
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';

function Modal({setProductData,productData,addProduct,modalOpen,setModalOpen,editProductData,enableEditModal,editProduct,loading}) {
    
  
  const handleToClose = () => {
    setModalOpen(false);
  };
  
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <div>
        <Dialog open={modalOpen} onClose={handleToClose} fullScreen={fullScreen}>
        <DialogTitle>{enableEditModal ? 'Edit Product' :  "Add Products"}</DialogTitle>
        <DialogContent>
           
            <div className='ModalTopContainer'>
            <Input  onChange={(e)=>setProductData({...productData,title:e.target.value})}  id="my-input" aria-describedby="my-helper-text" type="text" name="title" defaultValue={(enableEditModal && editProductData?.title) ? editProductData?.title :  null} placeholder='Enter product name'/>
            <Input  onChange={(e)=>setProductData({...productData,brand:e.target.value})}  id="my-input" aria-describedby="my-helper-text" type="text" name="title" defaultValue={enableEditModal && editProductData?.brand ?editProductData?.brand: null} placeholder='Enter product Brand name'/>
            <Input  onChange={(e)=>setProductData({...productData,description:e.target.value})} id="my-input" aria-describedby="my-helper-text" type="text" name="Description" defaultValue={enableEditModal && editProductData?.description ?editProductData?.description: null} placeholder='Enter product description'/>
            <Input  onChange={(e)=>setProductData({...productData,price:e.target.value})} id="my-input" aria-describedby="my-helper-text"  type="text" name="Price" defaultValue={enableEditModal && editProductData?.price ?editProductData?.price: null} placeholder='Enter product price'/>
            <Input  onChange={(e)=>setProductData({...productData,stock:e.target.value})} id="my-input" aria-describedby="my-helper-text" type="text" name="Stock" defaultValue={enableEditModal && editProductData?.stock ?editProductData?.stock: null} placeholder='Enter product stocks'/>
            <Input  onChange={(e)=>setProductData({...productData,discountPercentage:e.target.value})} id="my-input" aria-describedby="my-helper-text" type="text" name="Discount" defaultValue={enableEditModal && editProductData?.discountPercentage ?editProductData?.discountPercentage: null} placeholder='Enter product Discount'/>
             <Input  onChange={(e)=>setProductData({...productData,category:e.target.value})} id="my-input" aria-describedby="my-helper-text" type="text" name="category" defaultValue={enableEditModal && editProductData?.category ?editProductData?.category: null} placeholder='Enter product category'/>
            <Input  onChange={(e)=>setProductData({...productData,rating:e.target.value})} id="my-input" aria-describedby="my-helper-text" type="text" name="rating" defaultValue={enableEditModal && editProductData?.rating ?editProductData?.rating: null} placeholder='Enter product rating'/>
            </div>
             <div style={{marginTop:"2rem"}}>

            <label style={{marginRight:"1rem"}} htmlfor="images">Product Banner</label>
            <input type="file" name="images" defaultValue={null}/>
             </div>
            

        
        </DialogContent>
        <DialogActions>
          <Button onClick={handleToClose} 
                  color="primary" autoFocus>
                    close
          </Button>
          {
            loading ? 
            <p>loading...</p>
            :

          <Button onClick={()=> enableEditModal ? editProduct(editProductData?.id) :addProduct()} 
                  color="primary" autoFocus>
           {enableEditModal ? "Update" : "Add"}
          </Button>
          }

        </DialogActions>
      </Dialog>
    </div>
  )
}

export default Modal
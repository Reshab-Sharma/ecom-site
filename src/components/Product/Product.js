import React from 'react'
import "./Product.css";
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import banner6 from "../../assets/banner6.jpg" 

function Product({product,setModalOpen,setEditProductData,setEnableEditModal,handleDelete}) {
const handleClick=()=>{
  setModalOpen(true);
  setEnableEditModal(true);
  setEditProductData(product);
}
  return (
    <div className='ProductCard'>
        <div className='ProductCardBannerContainer'>
          
        <img className='ProductCardBanner' src={product?.images?.length > 0 ? product?.images[0] : banner6  } alt="product Banner"/>
        <p className='ProductDiscount'>{product?.discountPercentage}% off</p>
        </div>
        <p className='ProductCardBrandName'>{product?.brand}</p>
        <p className='ProductCardName'>{product?.title}</p>
        <p className='ProductPrice'>${product?.price}</p>
        <div className='ProductCardStocks'>
        <p className='ProductStock'>Only {product?.stock} available</p>
        </div>
        <p className='ProductDesc'>{product?.description}</p>
        <Rating name="half-rating" defaultValue={product?.rating} precision={0.5} />
         <Box sx={{ '& > :not(style)': { m: 1 } }}>
      <Fab color="primary" aria-label="delete" size="small" onClick={()=>handleDelete(product?.id)}>
        <DeleteIcon />
      </Fab>
      <Fab color="secondary" aria-label="edit" size="small">
        <EditIcon  onClick={handleClick} />
      </Fab>
      </Box>
        

    </div>
  )
}

export default Product
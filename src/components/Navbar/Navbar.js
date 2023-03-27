import React from 'react'
import "./Navber.css";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

function Navbar({handleClickToOpen,setEnableEditModal}) {
  const addProductHandler = ()=>{
    setEnableEditModal(false);
    handleClickToOpen();

  }
  return (
    <div className='NavbarContainer'>
    <div className='innerContainer'>

            <p className='Logo'>Logo</p>
            <input className='searchInput'  type='text' placeholder='search products'/>
            <ShoppingCartOutlinedIcon style={{color:"white"}}/>
    </div>
            <div className='addSectionContainer'>
              <h3 className='addSectionContainerHeading'>Add your own product</h3>
              <button className='addSectionContainerButton' onClick={addProductHandler}>Here you go</button>
            </div>
      
    </div>
  )
}

export default Navbar
import React,{useEffect,useState}  from 'react'
import "./Products.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Pagination from '@mui/material/Pagination';
import Product from '../Product/Product'
import Modal from '../Modal/Modal';

function Products({modalOpen,setModalOpen,setEnableEditModal,enableEditModal}) {
    const[productsResponse, setProductsResponse] = useState();
    const[skipProduct, setSkipProduct] = useState(0);
    const[addedProduct, setAddedproduct] = useState();
    const[editProductData, setEditProductData] = useState();
    const[updateProduct,setUpdateProduct] = useState();
    const[deleteProduct,setDeleteProduct] = useState();
    const[loading,setLoading] = useState(false);
    const [productData, setProductData] = useState({
      title:"",
      description:"",
      price:"",
      stock:"",
      rating:"",
      images:"",
      brand:"",
      category:"",
    })
     useEffect(()=>{
       async function getAllProducts(){
                let localStorageResponse =  JSON.parse(window.localStorage.getItem('Data'));
                if(!localStorageResponse || skipProduct){
                  await  fetch(`https://dummyjson.com/products?limit=30&skip=${skipProduct}`)
                 .then(res => res.json())
                 .then(data=>  window.localStorage.setItem("Data",JSON.stringify(data)))
                 .catch(err=>console.log(err))
                  
                }

              if(deleteProduct){
                localStorageResponse =  JSON.parse(window.localStorage.getItem('Data'));
                localStorageResponse.products.forEach((element,index) => {
                  if(element.id == deleteProduct){
                    localStorageResponse.products.splice(index,1);
                  }
                });
                window.localStorage.setItem("Data",JSON.stringify(localStorageResponse))

                setProductsResponse(localStorageResponse);
                setDeleteProduct();
                toast.success("product Deleted successfully");

                }
                if(addedProduct){
                localStorageResponse =  JSON.parse(window.localStorage.getItem('Data'));
               localStorageResponse.products.push(addedProduct);
                window.localStorage.setItem("Data",JSON.stringify(localStorageResponse))
                setProductsResponse(localStorageResponse);
                setAddedproduct();
                setLoading(false)
                toast.success("product added successfully");

              } else if(updateProduct){
                  localStorageResponse =  JSON.parse(window.localStorage.getItem('Data'));
                   localStorageResponse.products.forEach((element,index) => {
                  if(element.id == updateProduct?.id){
                    localStorageResponse.products.splice(index,1);
                  }
                });
               localStorageResponse.products.push(updateProduct);
                window.localStorage.setItem("Data",JSON.stringify(localStorageResponse))

                setProductsResponse(localStorageResponse);
                setLoading(false)
                setUpdateProduct();
                toast.success("product updated successfully");


              }
                 
                else {
                localStorageResponse =  JSON.parse(window.localStorage.getItem('Data'));
                setProductsResponse(localStorageResponse)
                }
            
            

        }
        getAllProducts()
        },[skipProduct,addedProduct,updateProduct,deleteProduct])


        const addProduct = ()=>{

            setLoading(true);

             fetch('https://dummyjson.com/products/add', {
             method: 'POST',
             headers: { 'Content-Type': 'application/json' },
             body: JSON.stringify(productData)
              })
              .then(res => res.json())
              .then(data=>setAddedproduct(data) )
              .catch(err=>console.log(err))

              }

              const handlePagination = (event,value)=>{
              setSkipProduct((value - 1) * 30);
              }
              
              
              const editProduct = (id)=>{
                setLoading(true)
                fetch(`https://dummyjson.com/products/${id}`, {
               method: 'PUT', /* or PATCH */
               headers: { 'Content-Type': 'application/json' },
               body: JSON.stringify(
                productData
              )
            })
             .then(res => res.json())
             .then(data => setUpdateProduct(data)); 

              }

              const handleDelete = (id) =>{
                
                setDeleteProduct(id)
                             }
  
    return (
      <>
      <div>

    <div className='ProductsContainer'>
      <Modal loading={loading} editProduct={editProduct} enableEditModal={enableEditModal} editProductData={editProductData} setModalOpen={setModalOpen} modalOpen={modalOpen} setProductData={setProductData} productData={productData} addProduct={addProduct}/>
        {
         productsResponse?.products?.reverse().map((product, index)=>{
         return <Product  setModalOpen={setModalOpen} setEnableEditModal={setEnableEditModal} setEditProductData={setEditProductData}  product={product} handleDelete={handleDelete} key={index}/>
        })  
        }
    </div>
    <div className='paginationContainer'>
    <Pagination count={4} variant="outlined" color="primary" onChange={handlePagination}/>
    <ToastContainer />
    </div>
      </div>
      </>
  )
}

export default Products
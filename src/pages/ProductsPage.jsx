import React, { useState } from 'react';
import ProductSideBar from '../components/products/ProductSideBar';
import ProductsList from '../components/products/ProductsList';
import '../styles/ProductsPage.css';

const ProductsPage = () => {
  const [isSideBar, setIsSideBar] = useState(true);
  const [page, setPage] = useState(1);

  function changeSideBarStatus(){
    setIsSideBar(!isSideBar);
  };

  return (
    <>
      <div className="productsPage">
        <ProductSideBar isSideBar={isSideBar} setPage={setPage} />
        <ProductsList changeSideBarStatus={changeSideBarStatus} page={page} setPage={setPage} />
      </div>
    </>
    
  )
}

export default ProductsPage
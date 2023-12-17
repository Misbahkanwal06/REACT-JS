import React from 'react'
import ProductCards from './ProductCards';

function Productsection( ) {
  return (
   <>
   <div className="container my-3">
    <h1 className='text-center'>OUR PRODUCTS</h1>
    <div className="row my-5 ">
  
      <ProductCards   category="shirts"/>
      <ProductCards  category="shirts"/>
      <ProductCards  category="shirts"/>
      <ProductCards  category="shirts"/>
      <ProductCards  category="shirts"/>
      <ProductCards  category="shirts"/>
      <ProductCards  category="shirts"/>
    
    </div>
   </div>
   </>
  )
}

export default Productsection;

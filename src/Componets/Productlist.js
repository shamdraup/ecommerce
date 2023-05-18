import React, { useState} from 'react'
import ProductCard from './ProductCard'
import '../Styles/productlist.css'
import Pagination from '@mui/material/Pagination';


const Productlist = ({data}) => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage=6;
    
    function handlePageChange(_event,pageNumber) {
        setCurrentPage(pageNumber);
    }
      const maxPage = Math.ceil(data.length / itemsPerPage);
      const startIndex = (currentPage - 1) * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;
      const p= data.slice(startIndex, endIndex);
    return (
        <div className='container'>
            <div className='product'>
            {
                p && p.length>0 ?p.map((prod,index) => (
                    <ProductCard key={index} data={prod} />
                )):(<h2>No Products To Show</h2>)
            }
        </div>
        <div className='page'>
        <Pagination count={maxPage} page={currentPage} variant="outlined" color="primary"  onChange={handlePageChange}  />
        </div>
        </div>
    )
}

export default Productlist
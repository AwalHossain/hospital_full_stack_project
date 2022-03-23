
import { useEffect, useState } from 'react';
import Pagination from "react-js-pagination";
import Service from '../Service/Service';

const Services = () => {
    // Custom hook being used here
//  const [info] = useServiceces()
 const [currentPage, setCurrentPage] = useState(1)
 const [info, setInfo] = useState([])

 useEffect(()=>{
    fetch(`https://sleepy-peak-11374.herokuapp.com/api/getAllServices?page=${currentPage}`)
    .then(res=>res.json())
    .then(data => setInfo(data))

},[currentPage])

const resultPerPage = info.resultPerPage
const productsCount = info.productsCount
const service = info.service

const setCurrentPageNo=(e)=>{
    setCurrentPage(e)

}
    return (
        // Services
        <div>
             <div className="text-center my-5 ">
                <h2 className="fw-bold">Why Choosing Our Services</h2>
                <p className="p-2">We handpick the best coaches and health experts from <br /> across the country to make sure you get the most personalized health care you deserve between those doctor visits.</p>
           </div>
            <div className="container ">
                <div className="row g-4 row-cols-lg-3 row-cols-md-2 row-cols-1 cad">

                {
                    service?.map(loadData => <Service
                        key={loadData.id}
                        data={loadData}></Service>)
                }
                </div>
                <div className="paginationBox">
              <Pagination
                activePage={currentPage}
                itemsCountPerPage={resultPerPage}
                totalItemsCount={productsCount}
                onChange={setCurrentPageNo}
                nextPageText="Next"
                prevPageText="Prev"
                firstPageText="1st"
                lastPageText="Last"
                itemClass="page-item"
                linkClass="page-link"
                activeClass="pageItemActive"
                activeLinkClass="pageLinkActive"
              />
            </div>

            </div>
              

        </div>
    );
};

export default Services;
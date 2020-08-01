import React, { useState, useEffect } from 'react';
import Pics from './Pics';
import Pagination from './Pagination';
import axios from 'axios';
import { API_KEY } from '../config';
import { BASE_URL } from '../constants';
import PicType from './PicType';

const Gallary = ({ lat, lon }) => {
  const [pics, setPics] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [picsPerPage, setPicsPerPage] = useState(250);
  const [totalPages, setTotalPages] = useState(0);
  const [pageNo, setPageNo] = useState(1);
  const [totalPics, setTotalPics] = useState(0);
  const [imgeType, setImageType] = useState('');

  useEffect(() => {
    const fetchPics = async () => {
      setLoading(true);
      try {
        let res = await axios.get(
          `${BASE_URL}?method=flickr.photos.search&api_key=${API_KEY}&lat=${lat}&lon=${lon}&format=json&page=${currentPage}`
        );
        //   console.log(JSON.parse(res.data.slice(14, -1)));
        res = JSON.parse(res.data.slice(14, -1));
        console.log(res);
        setPageNo(res.photos.page);
        setTotalPages(res.photos.pages);
        setPicsPerPage(res.photos.perpage);
        setPics(res.photos.photo);
        setTotalPics(res.photos.total);
        setLoading(false);
      } catch (e) {
        console.log('Something Went Wrong!');
      }
    };

    fetchPics();
  }, [currentPage, lat, lon]);

  console.log(pics);

  //   Get current posts

  console.log(pageNo, totalPages, picsPerPage);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  console.log('count ', pics.length);

  return (
    <div>
      <div className='info-table ml-2'>
        {/* <h1 className=' mb-3 title'>Gallary </h1> */}
        <h6 className='text-white'>
          {!loading && `Showing Results for lat ${lat} lon ${lon}`}
        </h6>
        <PicType setImageType={setImageType} />
      </div>
      <hr className='hr'></hr>

      <p className='text-white'>
        {!loading && pics.length == 0 && `No Result Found!!`}
      </p>
      <Pics pics={pics} loading={loading} imageType={imgeType} />
      {!loading && (
        <Pagination
          picsPerPage={picsPerPage}
          totalPics={totalPics}
          paginate={paginate}
          totalPages={totalPages}
        />
      )}
    </div>
  );
};

export default Gallary;

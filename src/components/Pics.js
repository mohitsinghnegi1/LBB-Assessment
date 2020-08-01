import React from 'react';

const Pics = ({ pics, loading, imageType }) => {
  if (loading) {
    return (
      <div className='text-white'>
        <div class='spinner-border text-light ' role='status'>
          <span class='sr-only'>Loading...</span>
        </div>
        <span className='pl-2'>Loading Pics...</span>
      </div>
    );
  }
  console.log(pics);
  return (
    <div className='mb-4'>
      {pics.map((pic, i) => (
        <a
          target='_blank'
          href={`https://farm${pic.farm}.staticflickr.com/${pic.server}/${pic.id}_${pic.secret}${imageType}.jpg`}
          download>
          <img
            key={i}
            src={`https://farm${pic.farm}.staticflickr.com/${pic.server}/${pic.id}_${pic.secret}${imageType}.jpg`}
            alt='IMG'
            className='img-fluid gallary-img'
          />{' '}
        </a>
      ))}
    </div>
  );
};

export default Pics;

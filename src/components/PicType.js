import React from 'react';

const PicType = ({ setImageType }) => {
  return (
    <div className='circles text-white'>
      <div onClick={() => setImageType('_q')} title='small square 75x75'>
        s
      </div>
      <div
        onClick={() => setImageType('_t')}
        title='thumbnail, 100 on longest side'>
        t
      </div>
      <div
        onClick={() => setImageType('_c')}
        title='medium 800, 800 on longest side†'>
        c
      </div>
      <div
        onClick={() => setImageType('_b')}
        title='large, 1024 on longest side*'>
        b
      </div>
      <div
        onClick={() => setImageType('_z')}
        title='medium 640, 640 on longest side'>
        z
      </div>
      {/* <div
        onClick={() => setImageType('_n')}
        title='small, 320 on longest side'>
        n
      </div> */}
    </div>
  );
};
export default PicType;

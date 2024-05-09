import React from 'react';

const SkeletonLoader = () => {
    return (
        <div className="card card-compact w-72  shadow-xl bg-white skeleton">
      <figure className='w-72 h-44 skeleton '>
        
      </figure>
      <div className="card-body ">
        <h2 className="card-title h-6 w-40 skeleton "></h2>
        <p className='w-20 h-4 skeleton '></p>
        
        <div className="card-actions justify-end ">
          <button className=" w-28 h-10  skeleton  rounded-xl"></button>
        </div>
      </div>
    </div>
    );
};

export default SkeletonLoader;
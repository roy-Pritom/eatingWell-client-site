import React from 'react';

const ErrorPage = () => {
    return (
        <div className=" d-flex justify-content-center align-items-center mt-5">
          <div className='fs-2 shadow-lg p-5 rounded text-danger d-flex  justify-content-center align-items-center  gap-2 gap-md-5'>
          <div className="">
          <h2 className='fw-bold mb-2'>404 Not Found</h2>
          <p>Something went <br /><span className='fw-bold'>Wrong!!</span></p>
          </div>
          <div className="">
            <img src="https://img.freepik.com/free-vector/man-thinking-concept-illustration_114360-7920.jpg?t=st=1681201234~exp=1681201834~hmac=d0c1be2c5feeb2cf783482ce8d6c188d77391c1bd92d8fc13bdf25953e91e71e" className='w-75 h-75' alt="" />
          </div>
        </div>
      </div>
    );
};

export default ErrorPage;
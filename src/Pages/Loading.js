import React from 'react';

const Loading = () => {
    return (

        <div className='h-screen flex justify-center items-center'>
            <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-gray-900"></div>
        </div >
    );
};

export default Loading;
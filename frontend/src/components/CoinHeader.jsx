import React from 'react';

const CoinHeader = () => {
    return (
        <div className="grid grid-cols sm:grid-cols-5 font-light p-2 rounded border-gray-200 mt-9 -mb-2" style={{ fontFamily: "" }}>
            <div className="flex items-center gap-1 w-full">
                <span className="ml-8 text-2xl font-bold" style={{ fontFamily: 'Montserrat, sans-serif' }}>Name</span> 
            </div>
            <div className="w-full text-center text-2xl font-bold" style={{ fontFamily: 'Montserrat, sans-serif' }}>Current Price</div> 
            <div className="flex ml-6 gap-1 text-center text-2xl font-bold " style={{ fontFamily: 'Montserrat, sans-serif' }}>24h Change</div> 
            <div className="text-center text-2xl font-bold ml-10" style={{ fontFamily: 'Montserrat, sans-serif' }}>Market Cap</div> 
        </div>
    );
}

export default CoinHeader;

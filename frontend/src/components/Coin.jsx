import React from 'react';
import { Link } from 'react-router-dom';

const Coin = ({ coin }) => {
    return (
        <Link to={`/coin/${coin.id}`}>
            <div className="grid grid-cols sm:grid-cols-5 font-light p-2 rounded border-gray-200 border-b hover:bg-blue-700 h-full">
                <div className="col-span-5 text-center mb-2">
                </div>
                <div className="flex item-center gap-1 w-full">
                    <img className="w-10" src={coin.image} alt={coin.name} />
                    <div className="flex flex-col">
                        <p className='ml-2 font-semibold text-2xl'>{coin.name}</p>
                        <span className="text-xs">({coin.symbol})</span>
                    </div>
                </div>
                <div className='w-full text-center font-semibold text-2xl '>{currencyFormat(coin.current_price)}</div>
                <div className={`flex gap-1 font-semibold text-2xl ml-15 ${coin.price_change_percentage_24h < 0 ? 'text-red-600' : 'text-green-500'}`}>
                    {coin.price_change_percentage_24h < 0 ? <TrendingDown /> : <TrendingUp />}
                    {coin.price_change_percentage_24h}
                </div>
                <div className='font-semibold text-2xl'>{currencyFormat(coin.market_cap)}</div>
            </div>
        </Link>
    );
}

export default Coin;

export function currencyFormat(num) {
    return '$' + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
}

export const TrendingDown = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path fillRule="evenodd" d="M1.72 5.47a.75.75 0 0 1 1.06 0L9 11.69l3.756-3.756a.75.75 0 0 1 .985-.066 12.698 12.698 0 0 1 4.575 6.832l.308 1.149 2.277-3.943a.75.75 0 1 1 1.299.75l-3.182 5.51a.75.75 0 0 1-1.025.275l-5.511-3.181a.75.75 0 0 1 .75-1.3l3.943 2.277-.308-1.149a11.194 11.194 0 0 0-3.528-5.617l-3.809 3.81a.75.75 0 0 1-1.06 0L1.72 6.53a.75.75 0 0 1 0-1.061Z" clipRule="evenodd" />
        </svg>
    );
};

export const TrendingUp = () => {
    return (
       
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path fillRule="evenodd" d="M15.22 6.268a.75.75 0 0 1 .968-.431l5.942 2.28a.75.75 0 0 1 .431.97l-2.28 5.94a.75.75 0 1 1-1.4-.537l1.63-4.251-1.086.484a11.2 11.2 0 0 0-5.45 5.173.75.75 0 0 1-1.199.19L9 12.312l-6.22 6.22a.75.75 0 0 1-1.06-1.061l6.75-6.75a.75.75 0 0 1 1.06 0l3.606 3.606a12.695 12.695 0 0 1 5.68-4.974l1.086-.483-4.251-1.632a.75.75 0 0 1-.432-.97Z" clipRule="evenodd" />
      </svg>
    );
};

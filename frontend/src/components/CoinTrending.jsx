import { Link } from 'react-router-dom'; 

const CoinTrending = ({coin}) => {
    return (
        <Link to={`/coin/${coin.id}`}> 
            <div className="font-light mb-2 p-2 border-white   shadow-sm hover:shadow-sm border-2 rounded hover:bg-blue-700">
                <div className="flex items-center gap-1">
                    <span className="font-semibold">{coin.score + 1}.</span>
                    <img className="w-6" src={coin.small} alt={coin.name} />
                    <p>{coin.name}</p>
                    <small className="text-xs">({coin.symbol})</small>
                </div>
            </div>
        </Link> 
    );
}

export default CoinTrending;

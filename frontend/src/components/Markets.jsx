import { useState } from 'react';
import useAxios from "../hooks/useAxios";
import Coin from './Coin';
import Skeleton from "./Skeleton";

const Markets = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const { response, loading } = useAxios(`coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=${currentPage}&sparkline=false&locale=en`);

    const coinsPerPage = 5;
    const totalPages = Math.ceil(response?.length / coinsPerPage);

    const handleNextPage = () => {
        setCurrentPage(prevPage => Math.min(prevPage + 1, totalPages));
    };

    const handlePrevPage = () => {
        setCurrentPage(prevPage => Math.max(prevPage - 1, 1));
    };

    if (loading) {
        return (
            <div className="wrapper-container mt-8">
                {[...Array(5)].map((_, index) => (
                    <Skeleton key={index} className="h-8 w-full mt-2" />
                ))}
            </div>
        );
    }

    return (
<>
        <section className="mt-8 text-white ">

            <div className="text-xl">
            {response && response.slice((currentPage - 1) * coinsPerPage, currentPage * coinsPerPage).map(coin => <Coin key={coin.id} coin={coin} />)}
            </div>
            <div className="mt-4">
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg mr-10 text-3xl"
                    onClick={handlePrevPage}
                    disabled={currentPage === 1}
                >
                    Previous
                </button>
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg text-3xl"
                    onClick={handleNextPage}
                    disabled={currentPage === totalPages}
                >
                    Next
                </button>
            </div>
        </section>
        </>
    );
}

export default Markets;

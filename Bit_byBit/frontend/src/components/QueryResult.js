import { useContext, useEffect, useState } from 'react';
import { genContext } from '../contexts/GeneralContext';
import { LocationContext } from '../contexts/LocationContext';

const QueryResult = () => {

    const { query, pincode } = useContext(genContext)
    const { Lat, Long, fetchLocation, setLat, setLong } = useContext(LocationContext)
    const [Queryres, setQueryres] = useState(null);
    const [mapquery, setMapquery] = useState(null);
    const apiKey = process.env.REACT_APP_CLOUDKEY;

    const fetchPincode = async () => {
        const apiUrl = `https://api.data.gov.in/resource/5c2f62fe-5afa-4119-a499-fec9d604d5bd?api-key=579b464db66ec23bdd0000012c82f90b833142086b093c8ea264fc7d&format=json&filters%5Bpincode%5D=${pincode}`
        try {
            const response = await fetch(apiUrl);

            const data = await response.json();
            console.log(data)

            if (data.records && data.records.length > 0) {
                const latitude = parseFloat(data.records[0].latitude);
                const longitude = parseFloat(data.records[0].longitude);

                // Update state with the numeric values
                setLat(latitude);
                setLong(longitude);
            } else {
                console.error('Invalid or empty response from the API');
            }

        } catch (error) {
            console.error('Error fetching data:', error);
        }

    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {
        if (!Lat) {
            fetchLocation()
        }
        else {
            const fetchservice = async () => {
                try {
                    const url = `/api/nearby/?latitude=${Lat}&longitude=${Long}&query=${query}&pincode=${pincode}`;
                    const response = await fetch(url, {
                        method: 'GET',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                    });

                    if (!response.ok) {
                        throw new Error(`HTTP error! Status: ${response.status}`);
                    }

                    const json = await response.json();
                    setQueryres(json.results);
                    console.log(json.results)
                } catch (error) {
                    console.error('Error fetching hospitals:', error);
                }
            };
            fetchservice();

        }
    }, [Lat, Long])


    return (
        <div className="bg-cover bg-repeat-y bg-[url('https://i.ibb.co/tJkCLrK/16404766-v870-tang-37.png')]">
            <div>
                <div className='overflow-hidden mt-11'>
                    <div className="bg-green-900 h-[150px] max-h-[150px] bg-opacity-75 text-white flex justify-center items-center">
                        <div className="max-w-5xl mx-auto text-center px-4 md:px-8">
                            <h1 className="text-4xl md:text-5xl font-bold mb-2">Discover Nearby {query ? `${query.replace(/_/g, ' ')}` : ''}</h1>
                            <p className="text-lg md:text-xl">Explore Extraordinary Healthcare Facilities Near You...</p>
                        </div>
                    </div>

                    <br />
                    <br />
                </div>
                <div className='w-full'>
                    <div className={`w-[90%] m-auto`}>
                        <div className="max-w-6xl mx-auto mt-8">
                            {Queryres ? (
                                Queryres.length > 0 ? (
                                    <div className="mb-4">
                                        <button onClick={() => fetchPincode()} className='block bg-greeen text-white hover:bg-green-800  rounded-xl p-4'><div className='font-bold'>Results Not Correct?</div><div className='text-[11px]'>Search with pincode instead!</div></button>

                                    </div>
                                ) : (
                                    <div className='h-[calc(100vh-269px)] md:h-[calc(100vh-299px)] w-full flex justify-center items-center text-center'>Nothing Found</div>
                                )
                            ) : (
                                <div className='h-[calc(100vh-269px)] md:h-[calc(100vh-299px)] w-full flex justify-center items-center text-center'>
                                    Loading...
                                </div>
                            )}

                            {Queryres && Queryres.length > 0 && (
                                <div className="grid grid-cols-1">
                                    {Queryres.map((queryres) => (
                                        <div onClick={(e) => {
                                            e.preventDefault();  setMapquery(queryres.poi.name); window.scrollTo({
                                                top: document.body.scrollHeight,
                                                behavior: 'smooth',
                                            });
                                        }} key={queryres.id} className="p-10 transition-transform transform hover:scale-105 hover:cursor-pointer hover:shadow-lg hover:bg-gray-300 bg-white bg-opacity-80 rounded mb-4 shadow-md">
                                            <h2 className="text-4xl text-center font-bold mb-8">{queryres.poi.name}</h2>
                                            <p className="text-gray-600 text-center font-bold">{queryres.address.freeformAddress}</p>
                                            <div className="transition-all flex items-center mt-2 justify-center py-[4px]">
                                                <img src="https://i.ibb.co/hfPjc91/image.png" alt="" />
                                                <div className="transition-all ml-2 text-[15px] font-sans font-semibold text-[#3a3a3a]">{(`${(queryres.dist).toFixed(3)} m away`)}</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                        {mapquery && <div className='flex justify-center items-center pb-10 '>
                            <iframe
                                className='border border-black rounded-md shadow-lg'
                                width="600"
                                height="450"
                                loading="lazy"
                                referrerpolicy="no-referrer-when-downgrade"
                                src={`https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=${mapquery.replace(/[^a-z0-9]/gi, '')}`}>
                            </iframe>
                        </div>}


                    </div>
                </div>
            </div>
        </div >
    );
}

export default QueryResult;
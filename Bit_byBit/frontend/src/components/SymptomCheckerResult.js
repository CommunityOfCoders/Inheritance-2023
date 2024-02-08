import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { genContext } from '../contexts/GeneralContext';

const ResultsPage = () => {
    const [bad, setBad] = useState(true);
    const { yearOfBirth: age, gender } = useContext(genContext);
    const symptoms = localStorage.getItem('symptoms');
    const [token, setToken] = useState();
    const [display, setDisplay] = useState(null);
    let username = "i3C8Y_UWATERLOO_CA_AUT";
    let encodedPassword = "UNYkk7S+VPiPcQDSeZ9hpQ==";

    const getToken = async () => {
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer " + username + ":" + encodedPassword);

        var raw = "";

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };
        const response = await fetch("https://authservice.priaid.ch/login", requestOptions)
        const json1 = await response.json();
        console.log(json1)
        await setToken(json1.Token);
        console.log(token)

        if (!display) {
            try {
                console.log(token);
                const response = await fetch(`https://healthservice.priaid.ch/diagnosis?symptoms=${symptoms}&gender=${gender}&year_of_birth=${age}&token=${json1.Token}&format=json&language=en-gb`);
                const json = await response.json();

                
                if (symptoms.length === 0 || !gender || !age) {
                    setBad(false)
                }

                console.log(json)
                if (json.length > 0) {
                    setDisplay(json);
                }
            } catch (error) {
                console.error('Error fetching results:', error);
            }
        }
    }

    useEffect(() => {
        getToken();
    }, []);

    return (
        <div>
            <nav className="bg-greeen p-4 text-white">
                <div className="container mx-auto">
                    <button className="px-4 py-2 bg-white text-blue-500 rounded">
                        <Link className='w-full h-full' to='/symptom'>Retake the Test</Link>
                    </button>
                </div>
            </nav>
            {bad ? (
                <div className="container mx-auto mt-8">
                    <h1 className="text-3xl text-center font-bold sm:mb-11 mb-4">Test Results</h1>

                    <div className="overflow-x-auto">
                        {!display ? (<>Loading</>):(
                            <table className="min-w-full bg-white border border-gray-300">
                            <thead>
                                <tr className="bg-gray-200">
                                    <th className="py-2 px-4 border-b">Disease</th>
                                    <th className="py-2 px-4 border-b">Alternate Name</th>
                                    <th className="py-2 px-4 border-b">Accuracy</th>
                                    <th className="py-2 px-4 border-b">Doctor Specialization</th>
                                </tr>
                            </thead>
                            <tbody>
                                {display && display.map((item, index) => (
                                    <tr key={index} className="hover:bg-gray-100">
                                        <td className="py-2 px-4 border-b text-center ">{`${item.Issue.Name}\n`}</td>
                                        <td className='py-2 px-4 border-b text-center'>{`${item.Issue.ProfName}`}</td>
                                        <td className="py-2 px-4 border-b text-center">{item.Issue.Accuracy.toFixed(2)}</td>
                                        <td className="py-2 px-4 border-b text-center">{item.Specialisation.map(spec => spec.Name).join(', ')}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        )}
                        
                    </div>
                </div>
            ) : (<div>Nothing to display</div>)}

        </div>
    );
};

export default ResultsPage;

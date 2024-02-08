const apiUrl = 'https://api.tomtom.com/search/2/nearbySearch/.json';
const apiKey = "xpWlsI0Gv2VOiAtzPbi5C6PLilIjWtit";  // Replace 'your_api_key' with your actual API key

const radius = 50000;
let categorySet = null;
// const categorySet = '7321'; //Hospitals
// const categorySet = '9373'; //Doctors
// const categorySet = '9663'; //Healthcare Services(Pathology vagere ig)
// const categorySet = '9663004'; //BloodBanks
// const categorySet = '7322'; //PoliceStations
// const categorySet = '7391'; //"Accident & Emergency Unit",// "First Aid Station","First Aid Post","Urgent Care","Emergency Call Station","Ambulance Service","First Aid","Medical Service","Accident and Emergency","Emergency Department",
// const categorySet = '7326'; //Pharmacy
const view = 'IN';
const relatedPois = 'all';

const getQuery = async (req, res) => {
    const { latitude:lat, longitude:long, query:query, pincode:pincode } = req.query;
    switch(query)
    {
        case 'Hospitals':
            categorySet = 7321;
            break;
        
        case 'Doctors':
            categorySet = 9373;
            break;
        
        case 'Pharmacies':
            categorySet = 7326;
            break;

        case 'Other_Services':
            categorySet = 9663;
            break;

        case 'Blood_Banks':
            categorySet = 9663004;
            break;

        case 'Police_Station':
            categorySet = 7322;
            break;

        case 'Emergency_Services':
            categorySet = 7391;
            break;
        
        default:
            categorySet = 7321;
            break;
    }
    console.log(lat)
    console.log(long)
    console.log(req.query)
    const url = `${apiUrl}?lat=${lat}&lon=${long}&radius=${radius}&categorySet=${categorySet}&view=${view}&relatedPois=${relatedPois}&key=${apiKey}`;

    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Accept': '*/*',
            },
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const json = await response.json();
        res.status(200).json(json);
        // console.log(json);
    } catch (error) {
        console.error('Error:', error.message);
        res.status(400).json({ error: 'Internal Server Error' });
    }
};

module.exports = { getQuery };

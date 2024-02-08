import { useContext } from 'react';
import { genContext } from '../contexts/GeneralContext';
import SignupPage from '../components/SignupPage'

const Signup = () => {

    const {open} = useContext(genContext)

    return ( 
        <div className="h-screen max-h-screen bg-[url('https://images.pexels.com/photos/2171077/pexels-photo-2171077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover -z-[100]">
            <div className="flex justify-center items-center h-[calc(100vh-118px)]">
                <div className={`overflow-y-auto h-full ${open? "w-[calc(100vw-224px)]":"w-screen"} duration-300`}>
                    <div className='flex justify-center items-center h-full'>
                        <SignupPage />
                    </div>
                </div>
            </div>


        </div>
     );
}
 
export default Signup;
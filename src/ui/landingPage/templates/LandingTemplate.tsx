import { Outlet } from 'react-router-dom';
import Footer from '../organisms/Footer';
import Navbar from '../organisms/Navbar';

const LandingTemplate = () => {
    return (
        <>
            <Navbar />
            <div className='landing-page-div'>
                <div className='landing-page-container'>
                    <Outlet />
                </div>
            </div>
            <Footer />
        </>
    );
};

export default LandingTemplate;

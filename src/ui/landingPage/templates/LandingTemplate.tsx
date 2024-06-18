import Navbar from '../organisms/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../organisms/Footer'

const LandingTemplate = () => {
    return (
        <>
            <Navbar />
            <div className="landing-page-div">
                <div className="landing-page-container">
                    <Outlet />
                </div>
            </div>
            <Footer />
        </>
    )
}

export default LandingTemplate
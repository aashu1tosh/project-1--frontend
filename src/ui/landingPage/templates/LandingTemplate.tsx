import Footer from '@ui/landingPage/organisms/Footer'
import Navbar from '@ui/landingPage/organisms/Navbar'
import { Outlet } from 'react-router-dom'

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
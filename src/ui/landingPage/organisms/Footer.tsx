import { image } from "@config/constant/image"

const Footer = () => {
    return (
        <div className="landing-footer">
            
            <div>
                <div className="footer-logo">
                    <img src={image?.logo} alt="" />
                </div>

                <div className="footer-links">
                    <li>Home</li>
                    <li>Documentation</li>
                    <li>Purchase</li>
                </div>
            </div>

            <div className="copyright-section">
                <p>&copy; theFront, Aashutosh Parajuli. All rights reserved</p><br />

                <p>When you visit or interact with our sites, services or tools, we or our authorised service providers may use cookies for storing information to help provide you with a better, faster and safer experience and for marketing purposes.</p>
            </div>

        </div>
    )
}

export default Footer
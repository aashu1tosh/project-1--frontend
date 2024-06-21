import { image } from '@config/constant/image';
import { footerLabel } from '@data/localization/landingPage/footer';
import { useLanguage } from '@hooks/useLang';

const Footer = () => {
    const { language } = useLanguage();
    return (
        <div className='landing-footer'>
            <div>
                <div className='footer-logo'>
                    <img src={image?.logo} alt='' />
                </div>

                <div className='footer-links'>
                    <li>{footerLabel?.home[language]}</li>
                    <li>{footerLabel?.documentation[language]}</li>
                    <li>{footerLabel?.purchase[language]}</li>
                </div>
            </div>

            <div className='copyright-section'>
                <p>&copy; {footerLabel?.allRights[language]}</p>
                <br />

                <p>{footerLabel?.footerContent[language]}</p>
            </div>
        </div>
    );
};

export default Footer;

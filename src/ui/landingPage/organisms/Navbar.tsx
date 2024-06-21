import { image } from '@config/constant/image';
import { navbarLabel } from '@data/localization/landingPage/navbar';
import { useLanguage } from '@hooks/useLang';
import { LanguageEnum } from '@type/global.types';
import { useEffect, useState } from 'react';
// import ThemeToggleButton from "@ui/common/atom/ThemeToggleButton"
import { Link } from 'react-router-dom';

const Navbar = () => {
    const { language, changeLanguage } = useLanguage();
    const [sticky, setSticky] = useState<boolean>(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            window.scrollY > 20 ? setSticky(true) : setSticky(false);
        });
    }, []);

    const handleLanguageChange = () => {
        if (language === LanguageEnum.en) {
            changeLanguage(LanguageEnum.ne);
        } else {
            changeLanguage(LanguageEnum.en);
        }
    };
    return (
        <nav id={`landing-page`} className={sticky ? 'dark-nav' : ''}>
            <div className='navbar-logo'>
                <Link to='/'>
                    <img src={image?.logo} alt='Logo' />
                </Link>
            </div>

            <div className='navbar-links'>
                <li>
                    <Link to='/login'>{navbarLabel?.login[language]}</Link>
                </li>
                <li>{navbarLabel?.signup[language]}</li>
                {/* <li> {language === 'en' ?  : ""}</li> */}
                <li onClick={handleLanguageChange}>
                    <div className='flag-container'>
                        <img
                            src={
                                language === LanguageEnum.en
                                    ? image?.usa
                                    : image?.nepal
                            }
                            alt=''
                        />
                    </div>
                </li>
                {/* <li><ThemeToggleButton /></li> */}
            </div>
        </nav>
    );
};

export default Navbar;

import { landingLabel } from '@data/localization/landingPage/main';
import { useLanguage } from '@hooks/useLang';
import { FaCode } from 'react-icons/fa';

const ToolsCard = () => {
    const { language, } = useLanguage();
    return (
        <div>
            {/* <FaCode /> */}
            <div>
                <FaCode size={25} />
            </div>

            <h1>{landingLabel.buildForDevelopers[language]}</h1>
            <p>{landingLabel.buildForDesc[language]}</p>
        </div>
    )
}

export default ToolsCard
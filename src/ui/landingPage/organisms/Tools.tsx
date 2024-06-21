import { landingLabel } from '@data/localization/landingPage/main';
import { useLanguage } from '@hooks/useLang';
import ToolsCard from '../molecules/ToolsCard';

const Tools = () => {
    const { language } = useLanguage();
    return (
        <div className='landing-tools'>
            <div>
                <h1>{landingLabel?.buildReact[language]}</h1>
                <p>{landingLabel?.buildBeautiful[language]}</p>

                <div className='tools-card-container'>
                    <ToolsCard />
                    <ToolsCard />
                    <ToolsCard />
                </div>
            </div>
        </div>
    );
};

export default Tools;

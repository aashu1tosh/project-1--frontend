import { landingLabel } from "@data/localization/landingPage/main";
import { useLanguage } from "@hooks/useLang";
import SlantedCard from "@ui/landingPage/molecules/SlantedCard";

const Hero = () => {
    const { language, } = useLanguage();
    return (
        <div className="landing-hero">
            <div className="hero-content">
                <h1>{landingLabel?.welcomeTo[language]}</h1>
                <h1>{landingLabel?.whereWe[language]}</h1>
                <h1>{landingLabel?.yourIdeas[language]}</h1>
                <h1>{landingLabel?.into[language]} <span className="site-text">{landingLabel?.success[language]}</span></h1>
            </div>

            <div className="hero-image-section">
                <div className="slanted-div">
                    <SlantedCard />
                    <SlantedCard />
                </div>

                <div className="slanted-div">
                    <SlantedCard />
                    <SlantedCard />
                    <SlantedCard />
                </div>

                <div className="slanted-div">
                    <SlantedCard />
                    <SlantedCard />
                </div>

            </div>
        </div>
    )
}

export default Hero
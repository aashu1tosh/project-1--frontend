import { landingLabel } from "@data/localization/landingPage/main";
import { useLanguage } from "@hooks/useLang";
import { FaSwatchbook } from "react-icons/fa";
import FeatureCard from "@ui/landingPage/molecules/FeatureCard";

const Features = () => {
    const { language } = useLanguage();
    return (
        <div className="landing-features">
            <h1>{landingLabel?.features[language]}</h1>

            <div>
                <FeatureCard
                    icon={<FaSwatchbook />}
                    title={landingLabel?.themable[language]}
                    description={landingLabel?.themableDesc[language]}
                />

                <FeatureCard
                    icon={<FaSwatchbook />}
                    title={landingLabel?.themable[language]}
                    description={landingLabel?.themableDesc[language]}
                />

                <FeatureCard
                    icon={<FaSwatchbook />}
                    title={landingLabel?.themable[language]}
                    description={landingLabel?.themableDesc[language]}
                />

                <FeatureCard
                    icon={<FaSwatchbook />}
                    title={landingLabel?.themable[language]}
                    description={landingLabel?.themableDesc[language]}
                />

                <FeatureCard
                    icon={<FaSwatchbook />}
                    title={landingLabel?.themable[language]}
                    description={landingLabel?.themableDesc[language]}
                />

                <FeatureCard
                    icon={<FaSwatchbook />}
                    title={landingLabel?.themable[language]}
                    description={landingLabel?.themableDesc[language]}
                />
            </div>
        </div>
    );
};

export default Features;

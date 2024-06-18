import { FaSwatchbook } from 'react-icons/fa'
import FeatureCard from '../molecules/FeatureCard'

const Features = () => {
    return (
        <div className='landing-features'>
            <h1>Features</h1>

            <div>
                <FeatureCard
                    icon={<FaSwatchbook />}
                    title="Themable"
                    description="Customize any part of our components to match your design needs."
                />

                <FeatureCard
                    icon={<FaSwatchbook />}
                    title="Themable"
                    description="Customize any part of our components to match your design needs."
                />

                <FeatureCard
                    icon={<FaSwatchbook />}
                    title="Themable"
                    description="Customize any part of our components to match your design needs."
                />


                <FeatureCard
                    icon={<FaSwatchbook />}
                    title="Themable"
                    description="Customize any part of our components to match your design needs."
                />


                <FeatureCard
                    icon={<FaSwatchbook />}
                    title="Themable"
                    description="Customize any part of our components to match your design needs."
                />

                <FeatureCard
                    icon={<FaSwatchbook />}
                    title="Themable"
                    description="Customize any part of our components to match your design needs."
                />

            </div>
        </div>
    )
}

export default Features
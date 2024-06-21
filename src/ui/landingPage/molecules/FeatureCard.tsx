interface IFeatureCard {
    icon: React.ReactNode;
    title: string;
    description: string;
}

const FeatureCard: React.FC<IFeatureCard> = ({ icon, title, description }) => {
    return (
        <div className='feature-card'>
            <div style={{ fontSize: '30px' }}>{icon}</div>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
};

export default FeatureCard;

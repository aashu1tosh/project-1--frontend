import SlantedCard from "../molecules/SlantedCard"

const Hero = () => {
    return (
        <div className="landing-hero">
            <div className="hero-content">
                <h1>Welcome to theFront</h1>
                <h1>Where We</h1>
                <h1>Turn your ideas</h1>
                <h1>into <span className="site-text">success</span></h1>


                {/* <p>theFront will make your product look modern and professional while saving you precious time.</p> */}
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
import ToolsCard from '../molecules/ToolsCard'

const Tools = () => {
    return (
        <div className='landing-tools'>
            <div>
                <h1>Build accessible React app with speed</h1>
                <p>Build a beautiful, modern website with flexible, fully customizable, atomic MUI components.</p>

                <div className='tools-card-container'>
                    <ToolsCard />
                    <ToolsCard />
                    <ToolsCard />
                </div>
            </div>


        </div>
    )
}

export default Tools
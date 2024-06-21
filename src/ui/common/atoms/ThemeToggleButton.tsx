// import './ThemeToggleButton.css'
const ThemeToggleButton = () => {
    return (
        <label className='rocker rocker-small'>
            <input type='checkbox' />
            <span className='switch-left'></span>
            <span className='switch-right'></span>
        </label>
    );
};

export default ThemeToggleButton;

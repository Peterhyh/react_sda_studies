import NavBar from '../components/NavBar'

const HomePage = () => {
    return (
        <div className='home-container'>
            <div className='navbar-container'>
                <NavBar />
            </div>

            <h1 className='home-title'>
                SDA Studies
            </h1>
        </div>
    );
};

export default HomePage
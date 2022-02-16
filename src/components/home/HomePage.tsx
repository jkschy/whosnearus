import Navbar from "../navbar/Navbar";
import Map from "../general/Map";

const HomePage = () => {
    return (
        <Navbar openKey={['Home']}>
            <Map/>
        </Navbar>
    )
}

export default HomePage;
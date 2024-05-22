import Banner from "../Components/Banner";
import Swipper from "../Components/Swipper";
import Cover from "../Shared/Cover";
import img from '../assets/assets/home/06.png'

const Home = () => {
    return (
        <div>
             
            <div >
            <Banner></Banner>
            </div>
            <h1 className=" font-bold text-3xl">Our Menu</h1>
            <Swipper></Swipper>
           <Cover
           img={img}
           title={'Our Menu'}
           paragraph={'We provide best quality food'}
           ></Cover>
        </div>
    );
};

export default Home;
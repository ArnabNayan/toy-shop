import { useLoaderData } from "react-router-dom";
import Banner from "../components/home/Banner";
import Toys from "../components/home/Toys";


const Home = () => {
    const data=useLoaderData()
    
    return (
        <div>
            <Banner></Banner>
            <Toys data={data}></Toys>
        </div>
    );
};

export default Home;



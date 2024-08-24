import { useLoaderData } from "react-router-dom";
import Banner from "../components/home/Banner";
import Toys from "../components/home/Toys";
import About from "../components/home/About";
import Features from "../components/home/Features";
import Features1 from "../components/home/Features1";
import Gallery from "../components/home/Gallery";
import Newtoy from "../components/home/Newtoy";
import Company from "../components/home/Company";
import Review from "../components/home/Review";


const Home = () => {
    const data=useLoaderData()
    
    return (
        <div  className="overflow-x-hidden">
            <Banner></Banner>
            <Toys data={data}></Toys>
            <About></About>
            <Features></Features>
            <Features1></Features1>
            <Gallery></Gallery>
            <Newtoy></Newtoy>
            <Company></Company>
            <Review></Review>
        </div>
    );
};

export default Home;



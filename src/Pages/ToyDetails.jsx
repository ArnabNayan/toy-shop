import { FaStar } from "react-icons/fa";
import Rating from "react-rating";
import { Link, useLoaderData } from "react-router-dom";


const ToyDetails = () => {
    const toy=useLoaderData()
    const {title, description, image_url, rating ,price,discount} = toy;
    return (
        <div className="hero min-h-screen">
        <div className="hero-content  flex-col lg:flex-row border bg-base-100 border-cyan-500 p-4 rounded-lg shadow-xl">
          <img src={image_url}className="max-w-lg rounded-lg shadow-2xl" />
          <div>
          <p className="absolute top-20  lg:left-1 lg:top-52 ml-10 lg:ml-60  px-4 text-lg font-serif bg-orange-400 text-white ">{discount}</p>
            <h1 className="text-5xl font-bold font-serif text-black">{title}</h1>
            <p className="py-2 text-xl text-black  font-sherif">{description}</p>
            <p className="py-2 text-xl text-black font-sherif">Price:{price} tk</p>
           
            <p className="text-xl">
                    <Rating
                        initialRating={rating}
                        readonly
                        emptySymbol={<FaStar color="lightgray" />}
                        fullSymbol={<FaStar color="orange" />}
                    />    
                     </p>
           
         <div className="flex items-center justify-center mt-48 ">
           <button className="btn bg-cyan-600  rounded-lg px-10 text-lg font-serif text-white"><Link to="/">Back</Link></button>
         </div>
     
          </div>
        </div>
         
      </div>
      
    );
};

export default ToyDetails;
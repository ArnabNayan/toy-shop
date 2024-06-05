import { Link, useLoaderData } from "react-router-dom";


const ToyDetailsDashboard = () => {
    const toy=useLoaderData()
    const {title, description, image_url, rating ,price,discount,category} = toy;
    return (
        <div className="hero min-h-screen">
        <div className="hero-content  flex-col lg:flex-row border bg-base-100 border-cyan-500 p-4 rounded-lg shadow-xl">
          <img src={image_url}className="max-w-lg rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold font-serif text-black">{title}</h1>
            <p className="py-2 text-xl text-black  font-sherif">{description}</p>
            <p className="py-2 text-xl text-black font-sherif">Price:{price} tk</p>
            <p className="py-2 text-xl text-black font-sherif">{discount}</p>
            <p className="py-2 text-xl text-black font-sherif">{category}</p>
            <p className="py-2 text-xl text-black font-sherif">{rating}</p>
           
         <div className="flex items-center justify-center mt-48 ">
           <button className="btn bg-cyan-600  rounded-lg px-10 text-lg font-serif text-white"><Link to="/dashboard/all-toys">Back</Link></button>
         </div>
     
          </div>
        </div>
         
      </div>
    );
};

export default ToyDetailsDashboard;
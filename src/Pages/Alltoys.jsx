
import { useEffect, useState } from "react";
import ToyCardDashboard from "../components/Dashboard/ToyCardDashboard";


const Alltoys = () => {
    
    const [toys,setToys]=useState([])
    useEffect(()=>{
        fetch("https://toy-shop-server-1bae.onrender.com/toysDatabase")
        .then(res=>res.json())
        .then(data=>setToys(data))
    },[])

    const handleDelete=(id)=>{
      setToys(toys.filter((toy)=>toy._id!==id))
    }
    return (
        <div>
            <h1 className="text-center text-2xl lg:text-4xl text-teal-700 mt-8 font-semibold ">.......Our Toy Items.......</h1> 
            <div className="grid grid-cols-1 lg:grid-cols-3 mt-6 gap-6">
                {
                    toys.map(toy=>(
                        
                        <ToyCardDashboard key={toy._id}toy={toy}onDelete={handleDelete}></ToyCardDashboard>
                    ))
                }
            </div>
        </div>
    );
};

export default Alltoys;
// import { FaStar } from "react-icons/fa";
// import Rating from "react-rating";
import useAuth from "../hooks/useAuth";

import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
// import axios from "axios";
import toast from "react-hot-toast";
import useAxiosSecure from "../hooks/useAxiosSecure";
import useCart from "../hooks/useCart";


// eslint-disable-next-line react/prop-types
const ShopCard = ({toy}) => {
    // eslint-disable-next-line react/prop-types
    const { title, description, image_url,discount,price,_id} = toy;
    const {user}=useAuth()
    const location = useLocation();
    
    const navigate=useNavigate()
    const axiosSecure=useAxiosSecure()
    const [,refetch]=useCart()
    const handleAddtoCart=toys=>{
      console.log(toys)
      if(user && user.email){
        //set card data to the database
        console.log(user.email,toy)
        const cartItem={
            toyId:_id,
            email:user.email,
            title,
            image_url,
            price
        }
        // axios.post('https://toy-shop-server-1bae.onrender.com/carts',cartItem)
        // .then(res=>{
        //     console.log(res.data)
        //     if(res.data.insertedId){
        //         toast.success(`${title} added to your cart`)
        //     }
        // })

        axiosSecure.post('/carts',cartItem)
        .then(res=>{
            console.log(res.data)
            if(res.data.insertedId){
                toast.success(`${title} added to your cart`)
            }
            refetch()
        })
      }else{
        Swal.fire({
            title: "You are not logged in?",
            text: "Please login first",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, login!"
          }).then((result) => {
            if (result.isConfirmed) {
              navigate('/login',{state:{from:location}})
            }
          });
      }
    }
    return (
        <div className="card w-96 h-full bg-base-100 shadow-xl ">
            <figure className="h-80 w-full" >
                <img className="h-full w-full object-cover hover:scale-110" src={image_url} alt="toy" />
            </figure>
            <p data-aos="fade-up"
        data-aos-duration="2000" className="absolute right-0 mr-4 px-4 text-md font-serif bg-orange-400 text-white ">{discount}</p>
            <div className="card-body p-4 flex flex-col justify-between">
                <div>
                    <h2 data-aos="fade-up"
        data-aos-duration="2000" className="card-title font-bold font-serif text-xl">{title}</h2>
                    <p data-aos="fade-up"
        data-aos-duration="2000" className="font-serif text-lg">{description}</p>
                </div>
                <div>
                {/* <p className="text-lg">
                    <Rating
                        initialRating={rating}
                        readonly
                        emptySymbol={<FaStar color="lightgray" />}
                        fullSymbol={<FaStar color="orange" />}
                    />  
                     </p> */}
                    <div className="card-actions flex flex-col items-center">
                        <button data-aos="fade-up"
        data-aos-duration="2000" onClick={()=>handleAddtoCart(toy)} className="btn bg-cyan-600 font-bold font-serif px-5 text-md text-white">Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShopCard;
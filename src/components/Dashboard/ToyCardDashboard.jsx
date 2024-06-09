import toast from "react-hot-toast";
import { FaStar } from "react-icons/fa";
import Rating from "react-rating";
import { Link } from "react-router-dom";


// eslint-disable-next-line react/prop-types
const ToyCardDashboard = ({toy,onDelete}) => {
    // eslint-disable-next-line react/prop-types
    const {_id,title,description,image_url,rating,category,price,discount}=toy;
    const handleDelete=async()=>{
      await fetch(`http://localhost:5000/toysDatabase/${_id}`,{
        method:"DELETE",
        headers:{
          "Content-type":"application/json",
        },
        
        
        })
        .then((res)=>res.json())
        .then(()=>{
          toast.success("Product deleted successfully")
          onDelete(_id)
      })
    }
    return (
        <div className="card w-96  h-full  bg-base-100  shadow-xl">
      <figure className="h-80 w-full"><img className="h-full w-full object-cover" src={image_url} alt="toy" /></figure>
      <p className="absolute right-0 mr-4 px-4 text-lg font-serif bg-orange-400 text-white ">{discount}</p>
      <div className="card-body">
        <h2 className="card-title font-bold font-serif text-2xl">{title}</h2>
        <p className="font-serif text-lg">{description}</p>
        <p className="font-serif text-lg"> Category:{category}</p>
        <p className="font-serif text-lg"> {price}tk</p>
        <p className="text-xl">
                    <Rating
                        initialRating={rating}
                        readonly
                        emptySymbol={<FaStar color="lightgray" />}
                        fullSymbol={<FaStar color="orange" />}
                    />    
                     </p>
        <div className="card-actions justify-end">
          <Link to={`toydetails/${_id}`} className="btn bg-cyan-600 text-white font-bold font-serif px-2 text-lg">Details</Link>
          <Link to={`edit/${_id}`} className="btn bg-green-600 text-white font-bold font-serif px-2 text-lg">Edit</Link>
          <button onClick={handleDelete} className="btn bg-rose-600 text-white font-bold font-serif px-2 text-lg">Delete</button>
        </div>
      </div>
    </div>
    );
};

export default ToyCardDashboard;
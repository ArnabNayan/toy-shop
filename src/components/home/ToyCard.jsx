

// eslint-disable-next-line react/prop-types
// const ToyCard = ({toy}) => {
//     // eslint-disable-next-line react/prop-types
//     const {title,description,image_url,rating}=toy
//     return (
//         <div className="card w-96 bg-red-500 shadow-xl">
//         <figure><img className="" src={image_url} alt="toy" /></figure>
//         <div className="card-body">
//           <h2 className="card-title font-bold font-serif text-2xl">{title}</h2>
//           <p className="font-serif text-lg">{description}</p>

import { FaStar } from "react-icons/fa";
import Rating from "react-rating";
import { Link } from "react-router-dom";

          
//           <p className="font-serif text-lg ">Ratings:{rating}</p>
//           <div className="card-actions justify-end">
//             {/* <Link to={`/foods/${id}`} className="btn bg-amber-500 font-bold font-serif px-5 text-lg">Details</Link> */}
//             <button className="btn bg-cyan-600 font-bold font-serif px-5 text-lg text-white">Details</button>
//           </div>
//         </div>
//       </div>
//     );
// };

// export default ToyCard;

// eslint-disable-next-line react/prop-types
const ToyCard = ({ toy }) => {
    // eslint-disable-next-line react/prop-types
    const { _id,title, description, image_url, rating ,discount} = toy;
    return (
        <div className="card w-96 h-full bg-base-100 shadow-xl ">
            <figure className="h-80 w-full" >
                <img className="h-full w-full object-cover" src={image_url} alt="toy" />
            </figure>
            <p className="absolute right-0 mr-4 px-4 text-lg font-serif bg-orange-400 text-white ">{discount}</p>
            <div className="card-body p-4 flex flex-col justify-between">
                <div>
                    <h2 className="card-title font-bold font-serif text-2xl">{title}</h2>
                    <p className="font-serif text-lg">{description}</p>
                </div>
                <div>
                    <p className="text-xl">
                    <Rating
                        initialRating={rating}
                        readonly
                        emptySymbol={<FaStar color="lightgray" />}
                        fullSymbol={<FaStar color="orange" />}
                    />    
                     </p>
                   
                    <div className="card-actions justify-end">
                        <Link to={`/toys/${_id}`} className="btn bg-cyan-600 font-bold font-serif px-5 text-lg text-white">Details</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ToyCard;

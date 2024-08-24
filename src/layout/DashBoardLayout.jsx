// import { FaAd, FaHome, FaList, FaMotorcycle, FaPaypal, FaShoppingCart, FaStar, FaUsers } from "react-icons/fa";
// import { Link, Outlet } from "react-router-dom";
// import useCart from "../hooks/useCart";
// import useAdmin from "../hooks/useAdmin";


// const DashBoardLayout = () => {
//   const [cart]=useCart()
//   // const isAdmin=true;
//   const [isAdmin] = useAdmin()
//     return (
//         <div className="grid grid-cols-12 min-h-screen">
//         <div className="col-span-2 bg-teal-700 text-white flex flex-col">
//           <div className="bg-cyan-600 h-24 flex items-center justify-center">
//           <h1 className="lg:text-5xl font-bold ">
//             <span className="text-yellow-400 fade-in">Toy</span>
//            <span className="text-lime-400 fade-in-delayed">Nest</span>
//          </h1>
//           </div>
//           <ul className="flex-grow space-y-3 p-1">
//             {/* <li className="font-serif font-bold w-full">
//               <Link to={""} className="block p-4 border border-white text-center hover:bg-teal-500">Dashboard</Link>
              
//             </li> */}

//            {
//             isAdmin? 
//             <>
//              <li className="font-serif font-bold w-full">
//               <Link to={"/dashboard/adminHome"} className="block p-4 border border-white rounded-md text-center hover:bg-teal-500"><FaHome className="-mb-5 ms-2"></FaHome>Admin Home</Link>
//             </li>
//             <li className="font-serif font-bold w-full">
//               <Link to={"all-toys"} className="block p-4 border border-white rounded-md text-center hover:bg-teal-500"><FaMotorcycle className="-mb-5 ms-2"></FaMotorcycle>All Toys</Link>
//             </li>
//             <li className="font-serif font-bold w-full">
//               <Link to={"add-toy"} className="block p-4 border border-white text-center rounded-md hover:bg-teal-500 "><FaAd className="-mb-5 ms-2"></FaAd>Add Toy</Link>
//             </li>
//             <li className="font-serif font-bold w-full ">
              
//               <Link to={"manageorders"} className="block p-4 border border-white text-center rounded-md hover:bg-teal-500"><FaList className="-mb-5 ms-2"></FaList>Manage Orders</Link>
//             </li>
            
//             <li className="font-serif font-bold w-full ">
              
//               <Link to={"users"} className="block p-4 border border-white rounded-md text-center hover:bg-teal-500"><FaUsers className="-mb-5 ms-2"></FaUsers>All Users</Link>
//             </li>
//             </>:
//             <>
//                <li className="font-serif font-bold w-full">
//               <Link to={"/dashboard/userHome"} className="block p-4 border border-white rounded-md text-center hover:bg-teal-500"><FaHome className="-mb-5 ms-2"></FaHome>User Home</Link>
//             </li>
//             <li className="font-serif font-bold w-full">
//               <Link to={"paymentHistory"} className="block p-4 border border-white rounded-md text-center hover:bg-teal-500"><FaPaypal className="-mb-5 ms-2"></FaPaypal>Payment History</Link>
//             </li>
//             {/* <li className="font-serif font-bold w-full">
//               <Link to={"add-toy"} className="block p-4 border border-white text-center rounded-md hover:bg-teal-500 ">Add Toy</Link>
//             </li> */}
//             <li className="font-serif font-bold w-full ">
              
//               <Link to={"cart"} className="block p-4 border border-white text-center rounded-md hover:bg-teal-500"><FaShoppingCart className="-mb-5 ms-2"></FaShoppingCart> My Cart ({cart.length})</Link>
//             </li>
//             <li className="font-serif font-bold w-full ">
              
//               <Link to={"review"} className="block p-4 border border-white rounded-md text-center hover:bg-teal-500"><FaStar className="-mb-5 ms-2"></FaStar>Add Review</Link>
//             </li>
           
//             </>
//            }
//             {/* <div className="divider"></div> */}
//             <li className="font-serif font-bold w-full">
//               <Link to={"/"} className="block p-4 border border-white rounded-md text-center hover:bg-teal-500"><FaHome className="-mb-5 ms-2"></FaHome> Home</Link>
//             </li>
//           </ul>
//         </div>
//         <div className="col-span-10 p-10 bg-gray-100">
//           <Outlet />
//         </div>
//       </div>
//     );
// };

// export default DashBoardLayout;

import { FaAd, FaHome, FaList, FaMotorcycle, FaPaypal, FaShoppingCart, FaStar, FaUsers } from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";
import useCart from "../hooks/useCart";
import useAdmin from "../hooks/useAdmin";

const DashBoardLayout = () => {
  const [cart] = useCart();
  const [isAdmin] = useAdmin();

  return (
    <div className="grid grid-cols-12 min-h-screen">
      <div className="col-span-12 md:col-span-2 bg-teal-700 text-white flex flex-col">
        <div className="bg-cyan-600 h-24 flex items-center justify-center">
          <h1 className="text-3xl md:text-5xl font-bold">
            <span className="text-yellow-400 fade-in">Toy</span>
            <span className="text-lime-400 fade-in-delayed">Nest</span>
          </h1>
        </div>
        <ul className="flex-grow space-y-3 p-1">
          {isAdmin ? (
            <>
              <li className="font-serif font-bold w-full">
                <Link to="/dashboard/adminHome" className="block p-4 border border-white rounded-md text-center hover:bg-teal-500">
                  <FaHome className="inline-block mb-1 mr-2" /> Admin Home
                </Link>
              </li>
              <li className="font-serif font-bold w-full">
                <Link to="all-toys" className="block p-4 border border-white rounded-md text-center hover:bg-teal-500">
                  <FaMotorcycle className="inline-block mb-1 mr-2" /> All Toys
                </Link>
              </li>
              <li className="font-serif font-bold w-full">
                <Link to="add-toy" className="block p-4 border border-white text-center rounded-md hover:bg-teal-500">
                  <FaAd className="inline-block mb-1 mr-2" /> Add Toy
                </Link>
              </li>
              <li className="font-serif font-bold w-full">
                <Link to="manageorders" className="block p-4 border border-white text-center rounded-md hover:bg-teal-500">
                  <FaList className="inline-block mb-1 mr-2" /> Manage Orders
                </Link>
              </li>
              <li className="font-serif font-bold w-full">
                <Link to="users" className="block p-4 border border-white rounded-md text-center hover:bg-teal-500">
                  <FaUsers className="inline-block mb-1 mr-2" /> All Users
                </Link>
              </li>
            </>
          ) : (
            <>
              <li className="font-serif font-bold w-full">
                <Link to="/dashboard/userHome" className="block p-4 border border-white rounded-md text-center hover:bg-teal-500">
                  <FaHome className="inline-block mb-1 mr-2" /> User Home
                </Link>
              </li>
              <li className="font-serif font-bold w-full">
                <Link to="paymentHistory" className="block p-4 border border-white rounded-md text-center hover:bg-teal-500">
                  <FaPaypal className="inline-block mb-1 mr-2" /> Payment History
                </Link>
              </li>
              <li className="font-serif font-bold w-full">
                <Link to="cart" className="block p-4 border border-white text-center rounded-md hover:bg-teal-500">
                  <FaShoppingCart className="inline-block mb-1 mr-2" /> My Cart ({cart.length})
                </Link>
              </li>
              <li className="font-serif font-bold w-full">
                <Link to="review" className="block p-4 border border-white rounded-md text-center hover:bg-teal-500">
                  <FaStar className="inline-block mb-1 mr-2" /> Add Review
                </Link>
              </li>
            </>
          )}
          <li className="font-serif font-bold w-full">
            <Link to="/" className="block p-4 border border-white rounded-md text-center hover:bg-teal-500">
              <FaHome className="inline-block mb-1 mr-2" /> Home
            </Link>
          </li>
        </ul>
      </div>
      <div className="col-span-12 md:col-span-10 p-4 md:p-10 bg-gray-100">
        <Outlet />
      </div>
    </div>
  );
};

export default DashBoardLayout;


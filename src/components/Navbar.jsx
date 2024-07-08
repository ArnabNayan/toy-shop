// import { Link } from "react-router-dom";
// import useAuth from "../hooks/useAuth";
// import { FaShoppingCart } from "react-icons/fa";


// const Navbar = () => {
//   const {user,logOut}=useAuth()
//   const handleLogOut=async()=>{
//     await logOut()
//    }
//     return(
//         <div className="navbar bg-cyan-600 z-[1] ">
//         <div className="navbar-start ">
//           <div className="dropdown">
//             <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
//             </div>
//             <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-cyan-600 rounded-box w-52 text-lg text-white font-medium">
//             <li><Link to="/">Home</Link></li>
//           <li><Link to="/blog">Blog</Link></li>
//           <li><Link to="/about">About Us</Link></li>
//           <li><Link to="/contact">Contact</Link></li>
//           <li><Link to="/shop">Shop</Link></li>
//           <li><Link to="/dashboard">Dashboard</Link></li>
         
//             </ul>
//           </div>
//           <h1 className="lg:text-6xl font-bold ">
//             <span className="text-yellow-400 fade-in">Toy</span>
//            <span className="text-lime-400 fade-in-delayed">Nest</span>
//          </h1>
//         </div>
//         <div className="navbar-center hidden lg:flex">
//           <ul className="menu menu-horizontal px-1 text-lg text-white font-medium">
//           <li><Link to="/">Home</Link></li>
//           <li><Link to="/blog">Blog</Link></li>
//           <li><Link to="/about">About Us</Link></li>
//           <li><Link to="/contact">Contact</Link></li>
//           <li><Link to="/shop">Shop</Link></li>
//           <li><Link to="/dashboard">Dashboard</Link></li>
//           <li><Link to="/">
//           <div className="indicator flex items-center relative">
//           <span className="indicator-item badge badge-warning absolute top-0 right-0">0+</span> 
//         <button className="btn border-teal-600 bg-cyan-400  text-white flex items-center p-1">
//           <FaShoppingCart ></FaShoppingCart>
//         </button>
//        </div>
//           </Link>
//           </li>
//           </ul>
//         </div>
//         <div className="navbar-end space-x-2">
        
//         {user && ( 
//           <button
//             onClick={handleLogOut}
//             className="btn bg-emerald-700 font-serif font-bold px-2 lg:px-4 text-sm lg:text-xl  text-white"
//           >
//             SignOut
//           </button>
//         )}
//         {!user && ( 
//           <Link to="/login" className="btn bg-emerald-700 text-sm lg:text-lg text-white">
//             Login
//           </Link>
//         )}

//           <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
//         <div className="w-10 rounded-full">
//         <img src={user?.photoURL||"public/placeholder.jpg"} />
//         </div>
//       </div>
//         </div>
//       </div>
//           )
//         }   


// export default Navbar;


import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { FaShoppingCart } from "react-icons/fa";
import useCart from "../hooks/useCart";
import useAdmin from "../hooks/useAdmin";

const Navbar = () => {
  const { user, logOut } = useAuth();
  const [isAdmin]=useAdmin()
 const [cart]=useCart()
  const handleLogOut = async () => {
    await logOut();
  };

  return (
    <div className="navbar bg-cyan-600 z-[1]">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-cyan-600 rounded-box w-52 text-lg text-white font-medium"
          >
            <li><Link to="/">Home</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/shop">Shop</Link></li>
            <li><Link to="/dashboard">Dashboard</Link></li>
            <li>
            <Link to="/dashboard/cart">
              <div className="indicator flex items-center relative">
                <span className="indicator-item badge badge-warning absolute top-0 right-0">+{cart.length}</span>
                <button className="btn border-teal-600 bg-cyan-400 text-white flex items-center justify-center px-4 lg:-mb-4">
                  <FaShoppingCart size={5} />
                </button>
              </div>
            </Link>
          </li>
          </ul>
        </div>
        <h1 className="lg:text-5xl font-bold">
          <span className="text-yellow-400 fade-in">Toy</span>
          <span className="text-lime-400 fade-in-delayed">Nest</span>
        </h1>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-md text-white font-medium">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/shop">Shop</Link></li>
         
          {
            user && isAdmin &&  <li><Link to="/dashboard/adminHome">Dashboard</Link></li>
          }
          {
            user && !isAdmin &&  <li><Link to="/dashboard/userHome">Dashboard</Link></li>
          }
          <li>
            <Link to="/dashboard/cart">
              <div className="indicator flex items-center relative">
                <span className="indicator-item badge badge-warning absolute top-0 right-0">+{cart.length}</span>
                <button className="btn border-teal-600 bg-cyan-400 text-white flex items-center justify-center px-4 -mb-6">
                  <FaShoppingCart size={12} />
                </button>
              </div>
            </Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end space-x-2">
        {user && (
          <button
            onClick={handleLogOut}
            className="btn bg-emerald-700 font-serif font-bold px-2 lg:px-4 text-sm lg:text-lg text-white"
          >
            SignOut
          </button>
        )}
        {!user && (
          <Link to="/login" className="btn bg-emerald-700 text-sm lg:text-lg text-white">
            Login
          </Link>
        )}
        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full">
            <img src={user?.photoURL || "public/placeholder.jpg"} alt="User avatar" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

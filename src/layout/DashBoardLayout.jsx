import { Link, Outlet } from "react-router-dom";


const DashBoardLayout = () => {
    return (
        <div className="grid grid-cols-12 min-h-screen">
        <div className="col-span-2 bg-teal-700 text-white flex flex-col">
          <div className="bg-cyan-600 h-24 flex items-center justify-center">
          <h1 className="lg:text-6xl font-bold ">
            <span className="text-yellow-400 fade-in">Toy</span>
           <span className="text-lime-400 fade-in-delayed">Nest</span>
         </h1>
          </div>
          <ul className="flex-grow space-y-3 ">
            <li className="font-serif font-bold w-full">
              <Link to={""} className="block p-4 border border-white text-center hover:bg-teal-500">Dashboard</Link>
            </li>
            <li className="font-serif font-bold w-full">
              <Link to={"all-toys"} className="block p-4 border border-white text-center hover:bg-teal-500">All Toys</Link>
            </li>
            <li className="font-serif font-bold w-full">
              <Link to={"add-toy"} className="block p-4 border border-white text-center hover:bg-teal-500">Add Toy</Link>
            </li>
            <li className="font-serif font-bold w-full">
              <Link to={"/"} className="block p-4 border border-white text-center hover:bg-teal-500">Home</Link>
            </li>
          </ul>
        </div>
        <div className="col-span-10 p-10 bg-gray-100">
          <Outlet />
        </div>
      </div>
    );
};

export default DashBoardLayout;
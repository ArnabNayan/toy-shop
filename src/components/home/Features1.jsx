import { FaCloud, FaPaperPlane, FaTruck } from "react-icons/fa";
import { Link } from "react-router-dom";


const Features1 = () => {
    return (
        <div data-aos="fade-up"
        data-aos-duration="2000" className="relative flex flex-col md:flex-row items-center bg-cyan-500 text-white p-10 md:p-20">
        {/* Animated Cloud - Left */}
        <div className="absolute top-5 left-10 animate-cloud">
          {/* <img src="https://example.com/cloud-left.png" alt="Cloud" className="w-24 h-24" /> */}
          <FaCloud className="h-10 w-10 lg:h-24 lg:w-24 text-white"></FaCloud>
        </div>
  
        {/* Animated Cloud - Right */}
        <div className="absolute top-10 right-10 animate-cloud">
        <FaCloud className="h-10 w-10 lg:h-24 lg:w-24 text-white"></FaCloud>
        </div>
  
        {/* Left Image */}
        <div className="w-full md:w-1/2">
          <div className="rounded-full overflow-hidden border-8 border-purple-500">
            <img data-aos="fade-up"
      data-aos-duration="2000"
              src="https://c4.wallpaperflare.com/wallpaper/1024/320/1015/children-the-game-colorful-designer-toy-hd-wallpaper-preview.jpg"
              alt="Kids Playing"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
  
        {/* Right Content */}
        <div className="w-full md:w-1/2 md:pl-10 mt-10 md:mt-0 text-center md:text-left">
          <h2 data-aos="fade-up"
      data-aos-duration="2000" className="text-4xl font-bold">Playthings That Build Learning Skills</h2>
          <p data-aos="fade-up"
      data-aos-duration="2000" className="mt-4 text-lg">
            We like to give your child a happier time and enjoyable time that make themselves happy and help themselves to grow up their body and mind with a good vibes.So quickly contact us for more information.
          </p>
        <Link  to="/contact">  <button data-aos="fade-up"
      data-aos-duration="2000" className="mt-8 px-6 py-3 bg-white text-cyan-600 font-semibold rounded-full hover:bg-gray-200">
            Contact Us
          </button></Link>
        </div>
  
        {/* Toy Vehicle */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2">
        <FaTruck className="h-10 w-10 lg:h-20 lg:w-20 text-white animate-pulse"></FaTruck>
        </div>
  
        {/* Paper Airplane */}
        <div className="absolute bottom-10 right-10 animate-bounce">
        <FaPaperPlane className="h-8 w-8 lg:h-24 lg:w-24 text-white"></FaPaperPlane>
        </div>
      </div>
    );
};

export default Features1;
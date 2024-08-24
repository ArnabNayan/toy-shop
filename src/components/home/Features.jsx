import { Link } from "react-router-dom";



const Features = () => {
    return (
      //   <section className="flex flex-wrap items-center justify-between p-8 bg-slate-100">
      //   {/* Left Image with Circle */}
      //   <div className="relative w-full lg:w-1/2 p-4">
      //     <div className="bg-yellow-200 p-6 rounded-lg">
      //       <img
      //         src="https://thestationers.pk/cdn/shop/collections/1.webp?v=1698174872"
      //         alt="Kids laughing"
      //         className="rounded-lg"
      //       />
      //     </div>
      //     {/* Circular Element */}
       
      //   <div className="relative w-32 h-32">
      //   <div className="absolute inset-0 flex items-center justify-center animate-spin-slow">
      //     <p className="w-24 h-24 rounded-full flex items-center justify-center text-sm tracking-wider bg-cyan-600 text-white">
      //       About Us
      //     </p>
      //   </div>
      // </div>
      // </div>
     
  
      //   {/* Text Section */}
      //   <div className="w-full lg:w-1/2 p-4 my-auto">
      //     <h2 className="text-4xl font-bold text-gray-800">
      //       We help you take care of the kids
      //     </h2>
      //     <p className="mt-4 text-gray-600">
      //       Not only do we sell toys, but we also try to make sure that your
      //       children are safe, playing, learning, and having fun!
      //     </p>
        
      //   </div>
  
      //   {/* Right Image */}
      //   <div className="w-full lg:w-1/2 p-4 text-right">
      //     <div className="bg-red-200 p-6 rounded-lg">
      //       <img
      //         src="https://t4.ftcdn.net/jpg/08/71/56/09/360_F_871560941_8rr27mI0yrmTho63ez7ukWGaw9a8ofdQ.jpg"
      //       />
      //     </div>
      //   </div>
       
      // </section>
      
     
      <div className="flex flex-col md:flex-row justify-between items-center mx-auto max-w-7xl p-2 bg-slate-100">
        
      {/* Left Image */}
      <div className="relative w-full md:w-1/2 p-4">
        <img data-aos="fade-up-left"
      data-aos-duration="2000"
          src="https://m.media-amazon.com/images/I/51i+znyBZ4L._AC_UF1000,1000_QL80_.jpg"
          alt="Happy Kids"
          className="rounded-lg w-full hover:scale-110"
        />
      </div>

      {/* Center Content */}
      <div className="relative text-center md:text-left p-4 lg:mt-24">
        <h2 data-aos="fade-up"
      data-aos-duration="2000" className="text-2xl md:text-4xl text-slate-900 fonr-serif font-bold">
          We help you take care of the kids
        </h2>
        <p data-aos="fade-up"
      data-aos-duration="2000" className="mt-4 text-slate-400 font-serif font-semibold">
          Not only do we sell toys, but we also try to make sure that your
          children are safe playing, learning, and having fun!
        </p>

        {/* Rotating About Us Button */}
        <div className="mt-8 flex justify-center md:justify-start">
         <Link data-aos="fade-up"
      data-aos-duration="2000" to="/about"> <button className="bg-cyan-600 btn hover:bg-cyan-300 text-white font-serif p-2 rounded-md m-2 text-sm lg:text-md">
            About Us
          </button></Link>
        </div>
      </div>

      {/* Right Image */}
      <div className="relative w-full md:w-1/2  p-4 ">
        <img data-aos="fade-up-right"
      data-aos-duration="2000"
          src="https://makemeiconic.com/cdn/shop/products/Australian-gifts-souvenirs-wood-toys-_Australian-vehicles__5.jpg?v=1608440374&width=1000"
          className="rounded-lg w-full hover:scale-110"
        />
      </div>
    </div>
      
      
    );
};

export default Features;
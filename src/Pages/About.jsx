import { FaCloud, FaGift, FaRainbow, FaShieldAlt, FaSun,FaFacebookF, FaTwitter, FaInstagram, FaStar, FaRocket, FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";


const About = () => {
  const teamMembers = [
    {
      name: 'Wend Williams',
      role: 'Sales Manager',
      image: 'https://img.freepik.com/premium-photo/3d-illustration-young-businessman-with-book-his-hands_1057-42908.jpg',
      social: null,
    },
    {
      name: 'Garry Freemont',
      role: 'CEO',
      image: 'https://img.freepik.com/premium-photo/funny-cartoon-businessman-standing-floor-3d-rendering_1142-59687.jpg',
      social: [
        { icon: <FaFacebookF />, link: 'https://facebook.com' },
        { icon: <FaTwitter />, link: 'https://twitter.com' },
        { icon: <FaInstagram />, link: 'https://instagram.com' },
      ],
    },
    {
      name: 'Sandy Walker',
      role: 'Creative Director',
      image: 'https://img.freepik.com/free-photo/funny-cartoon-businessman-with-thumbs-up-houses-background_1057-46033.jpg?w=360',
      social: null,
    },
    {
      name: 'Vicky Warmheart',
      role: 'Sales Manager',
      image: 'https://img.freepik.com/free-photo/cartoon-businessman-with-mustache-glasses-gray-background-3d-rendering_1142-40584.jpg',
      social: null,
    },
  ];
    return (
        <div>
          <div className="hero h-60 lg:min-h-screen " style={{backgroundImage: 'url(https://t4.ftcdn.net/jpg/05/30/10/03/360_F_530100389_sCIZyhoqhhiv6XP2uTx3xFYuLeMIvFfJ.jpg)'}}>
  <div className="hero-overlay bg-opacity-70"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-2xl">
      {/* <h1 className="mb-5 text-2xl lg:text-7xl font-bold font-serif bg-cyan-800 p-10 lg:p-28  bg-opacity-65">Shop Now</h1> */}
      <h1 className="mb-5 text-2xl lg:text-5xl font-bold font-serif bg-cyan-800 p-10 lg:p-28  bg-opacity-65 ">
            <span className=" fade-in">About</span>
           <span className=" fade-in-delayed"> Us</span>
         </h1>
      
    </div>
  </div>
</div>
<div data-aos="fade-up"
        data-aos-duration="2000" className="flex flex-col lg:flex-row justify-between items-center bg-gray-50 p-8">
      {/* Left section with image */}
      <div className="relative w-full lg:w-1/2 flex justify-center items-center mb-8 lg:mb-0">
        {/* Circular image */}
        <img data-aos="fade-up"
        data-aos-duration="2000"
          src="https://st2.depositphotos.com/3243153/11791/i/950/depositphotos_117913950-stock-photo-kids-playing-with-colorful-toy.jpg"
          className="rounded-full w-3/4 lg:w-3/4"
        />

        {/* Sun Icon */}
        <div className="absolute top-0 right-4 animate-spin">
          <FaSun className="text-yellow-500 h-10 w-10 lg:h-20 lg:w-20" />
        </div>

        {/* Rainbow Icon */}
        <div className="absolute bottom-0 right-8">
          <FaRainbow className="text-indigo-500 h-10 w-10 lg:h-20 lg:w-20" />
        </div>

        {/* Cloud Icon */}
        <div className="absolute top-16 left-0 animate-cloud">
          <FaCloud className="text-gray-500 h-10 w-10 lg:h-20 lg:w-20" />
        </div>
      </div>

      {/* Right section with text */}
      <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left">
        <div className="space-y-2">
          <h2 data-aos="fade-up"
        data-aos-duration="2000" className="text-cyan-600 text-sm font-bold">ABOUT US</h2>
          <h1 data-aos="fade-up"
        data-aos-duration="2000" className="text-2xl lg:text-4xl font-serif font-bold">
            Unleash endless adventures - your toy kingdom awaits!
          </h1>
          <p data-aos="fade-up"
        data-aos-duration="2000"className="text-gray-500 font-serif">
            When an unknown printer took a galley of type and scrambled it to make a type specimen book...
          </p>
        </div>

        {/* Cards Section */}
        <div data-aos="fade-up"
        data-aos-duration="2000" className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-6">
          <div className="bg-white p-4 rounded-lg shadow-md flex-1">
            <div className="text-2xl text-yellow-600"><FaGift /></div>
            <h3 data-aos="fade-up"
        data-aos-duration="2000"className="mt-2 font-semibold">Variety of Toys</h3>
            <p data-aos="fade-up"
        data-aos-duration="2000" className="text-gray-500 text-sm">Variety of toys for your child</p>
          </div>
          <div data-aos="fade-up"
        data-aos-duration="2000" className="bg-white p-4 rounded-lg shadow-md flex-1">
            <div className="text-2xl text-red-500"><FaShieldAlt /></div>
            <h3 data-aos="fade-up"
        data-aos-duration="2000" className="mt-2 font-semibold">Safety Standards</h3>
            <p data-aos="fade-up"
        data-aos-duration="2000" className="text-gray-500 text-sm">We manage safety standards of the toy element</p>
          </div>
        </div>
      </div>
    </div>
    <div data-aos="fade-up"
        data-aos-duration="2000" className="container mx-auto py-12">
      <h2 data-aos="flip-up"
        data-aos-duration="2000" className="text-center text-cyan-600 text-4xl font-bold mb-8">Our Team</h2>
      <div className="flex flex-wrap justify-center gap-8">
        {teamMembers.map((member, index) => (
          <div data-aos="fade-up"
        data-aos-duration="2000"
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-hidden w-64 text-center"
          >
            <img src={member.image} alt={member.name} className="w-full h-64 object-cover" />
            <div className="p-6">
              <h3 data-aos="fade-up"
        data-aos-duration="2000" className="text-lg font-semibold">{member.name}</h3>
              <p data-aos="fade-up"
        data-aos-duration="2000"className="text-gray-500">{member.role}</p>
            </div>
            {member.social ? (
              <div className="bg-blue-500 text-white py-4">
                <p data-aos="fade-up"
        data-aos-duration="2000"className="text-white mb-2">Connect with {member.name}</p>
                <div className="flex justify-center space-x-4">
                  {member.social.map((social, i) => (
                    <a
                      key={i}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg hover:text-blue-300"
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            ) : null}
          </div>
        ))}
      </div>
    </div>
    <div data-aos="fade-up"
        data-aos-duration="2000"className="flex flex-col lg:flex-row items-center justify-between bg-slate-100 p-8 lg:p-16">
      {/* Left Section - Image with children */}
      <div className="relative flex-shrink-0 w-full lg:w-1/2 flex justify-center lg:justify-start">
        <img
          src="https://c4.wallpaperflare.com/wallpaper/155/100/42/children-the-game-colorful-designer-toy-hd-wallpaper-thumb.jpg"
          className="w-3/4 lg:w-full rounded-full"
        />
        {/* Additional Icons and Elements */}
         {/* Star Icon */}
         <FaStar className="absolute top-4 left-10 lg:left-32 text-yellow-500 w-10 h-10 lg:w-16 lg:h-16 animate-spin" />
        {/* Rocket Icon */}
        <FaRocket className="absolute top-8 right-4 lg:right-32 text-red-500 w-10 h-10 lg:w-16 lg:h-16 animate-cloud" />
        {/* Heart Icon */}
        <FaHeart className="absolute bottom-0 right-10 lg:right-32 text-pink-500 w-16 h-16 lg:w-24 lg:h-24 animate-pulse" />
      </div>

      {/* Right Section - Text Content */}
      <div data-aos="fade-up"
        data-aos-duration="2000"className="w-full lg:w-1/2 mt-8 lg:mt-0 lg:ml-16">
        <h2 data-aos="fade-up"
        data-aos-duration="2000" className="text-cyan-600 text-sm font-bold uppercase tracking-wider">What We Do</h2>
        <h1 data-aos="fade-up"
        data-aos-duration="2000" className="mt-2 text-4xl lg:text-5xl font-bold leading-tight text-gray-800">
          We provide & offer premium toys
        </h1>
        <p data-aos="fade-up"
        data-aos-duration="2000"className="mt-4 text-gray-500">
          We appreciate your trust. Our clients choose us and our products because they know we are the best.
        </p>
        <Link to="/contact"><button data-aos="fade-up"
        data-aos-duration="2000" className="mt-8 px-6 py-3 bg-cyan-600 text-white rounded-full font-semibold hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-green-400">
          Contact Now
        </button></Link>
      </div>
    </div>
        </div>
    );
};

export default About;
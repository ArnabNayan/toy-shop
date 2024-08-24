
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
const Contact = () => {
    return (
        <div>
                <div className="hero h-60 lg:min-h-screen " style={{backgroundImage: 'url(https://t4.ftcdn.net/jpg/05/30/10/03/360_F_530100389_sCIZyhoqhhiv6XP2uTx3xFYuLeMIvFfJ.jpg)'}}>
  <div className="hero-overlay bg-opacity-70"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-2xl">
      {/* <h1 className="mb-5 text-2xl lg:text-7xl font-bold font-serif bg-cyan-800 p-10 lg:p-28  bg-opacity-65">Shop Now</h1> */}
      <h1 className="mb-5 text-2xl lg:text-5xl font-bold font-serif bg-cyan-800 p-10 lg:p-28  bg-opacity-65 ">
            <span className=" fade-in">Contact</span>
           <span className=" fade-in-delayed"> Us</span>
         </h1>
      
    </div>
  </div>
</div>
        <div data-aos="fade-up"
        data-aos-duration="2000" className="bg-gray-50 p-8">
        {/* Get in Touch Section */}
        <div className="text-center mb-10">
          <h2 data-aos="fade-up"
        data-aos-duration="2000" className="text-3xl text-cyan-600 font-serif font-bold">Get in Touch</h2>
          <p data-aos="fade-up"
        data-aos-duration="2000" className="text-gray-500 font-serif mt-2">
           Always at your service,get in touch with us for more info about new trending toys and make your child life enjoyable with our toys
          </p>
        </div>
  
        <div data-aos="fade-up"
        data-aos-duration="2000"className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
      {/* Contact Information Section */}
      <div data-aos="fade-up"
        data-aos-duration="2000" className="flex flex-col lg:flex-row justify-center space-y-6 lg:space-y-0 lg:space-x-8 mb-12">
        <div className="bg-white p-6 rounded-lg shadow-md flex items-center space-x-4">
          <FaPhoneAlt className="text-teal-500 text-2xl" />
          <div>
            <p data-aos="flip-up"
        data-aos-duration="2000"className="font-semibold">Phone Number</p>
            <p data-aos="flip-up"
            data-aos-duration="2000" className="text-gray-500">01834-898933</p>
            <p data-aos="flip-up"
        data-aos-duration="2000" className="text-gray-500">01631-234567</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md flex items-center space-x-4">
          <FaEnvelope className="text-teal-500 text-2xl" />
          <div>
            <p data-aos="flip-up"
        data-aos-duration="2000" className="font-semibold">Mail ID</p>
            <p data-aos="flip-up"
        data-aos-duration="2000" className="text-gray-500">toyup225@gmail.com</p>
            <p data-aos="flip-up"
        data-aos-duration="2000" className="text-gray-500">toyup220@gmail.com</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md flex items-center space-x-4">
          <FaMapMarkerAlt className="text-teal-500 text-2xl" />
          <div>
            <p data-aos="flip-up"
        data-aos-duration="2000" className="font-semibold">Address Place</p>
            <p data-aos="flip-up"
        data-aos-duration="2000"className="text-gray-500">1251 Town Street</p>
            <p data-aos="flip-up"
        data-aos-duration="2000"className="text-gray-500">Hall Town, TN 38118</p>
          </div>
        </div>
      </div>

      {/* Open Hours and Send Message Section */}
      <div data-aos="fade-up"
        data-aos-duration="2000" className="flex flex-col lg:flex-row justify-center space-y-6 lg:space-y-0 lg:space-x-8">
        {/* Open Hours */}
        <div className="w-full lg:w-1/2 bg-white p-6 rounded-lg shadow-md">
          <h3 data-aos="fade-up"
        data-aos-duration="2000" className="text-xl font-semibold mb-4">Open Hours</h3>
          <ul className="text-gray-500 space-y-2">
            <li data-aos="fade-up"
        data-aos-duration="2000">Monday: 8:00 am - 12:00 pm</li>
            <li data-aos="fade-up"
        data-aos-duration="2000">Tuesday: 11:00 am - 12:00 pm</li>
            <li data-aos="fade-up"
        data-aos-duration="2000">Wednesday: 7:00 am - 03:00 pm</li>
            <li data-aos="fade-up"
        data-aos-duration="2000">Thursday: 7:00 am - 03:00 pm</li>
            <li data-aos="fade-up"
        data-aos-duration="2000">Friday: 7:00 am - 03:00 pm</li>
            <li data-aos="fade-up"
        data-aos-duration="2000">Saturday: 7:00 am - 03:00 pm</li>
            <li data-aos="fade-up"
        data-aos-duration="2000"className="text-red-500">Sunday: Off Day</li>
          </ul>
        </div>

        {/* Send Message */}
        <div className="w-full lg:w-1/2 bg-white p-6 rounded-lg shadow-md">
          <h3 data-aos="fade-up"
        data-aos-duration="2000" className="text-xl font-semibold mb-4">Send Message</h3>
          <form data-aos="fade-up"
        data-aos-duration="2000" className="space-y-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
              <input
                type="text"
                placeholder="Phone Number"
                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>
            <input
              type="email"
              placeholder="Email Address"
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
            <input
              type="text"
              placeholder="Subject"
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
            <textarea
              placeholder="Write your comment here."
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              rows="4"
            ></textarea>
            <button data-aos="fade-up"
        data-aos-duration="2000"
              type="submit"
              className="w-full bg-teal-500 text-white p-3 rounded-md font-semibold hover:bg-teal-600"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
      <div data-aos="fade-up"
        data-aos-duration="2000" className="mt-3 relative z-10 w-full  mx-auto p-4">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3690.517727343152!2d91.83002267360656!3d22.334071979662234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30ad2757e8082d3f%3A0xe6fbe28ab2619cca!2sNew%20Mkt%20Cir%2C%20Chittagong!5e0!3m2!1sen!2sbd!4v1723729826459!5m2!1sen!2sbd" width="100%" height="450" style={{border:0}} allowfullscreen="" loading="lazy"referrerPolicy="no-referrer-when-downgrade"
    aria-hidden="false"
    tabIndex="0"
    className="rounded-lg" ></iframe>
      </div>
        </div>
        </div>
    );
};

export default Contact;

import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


  
 

const Banner = () => {

    return (
        <>
           <Swiper 
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
    >

        <SwiperSlide>
       
            <div 
                className="bg-cover backdrop-brightness-20 bg-center h-64 lg:h-screen w-full "
                style={{
                    backgroundImage:
                        "url('https://cdn.marvel.com/content/1x/a33.jpg')",
                }}
            >  
            <div className="w-full h-full items-center left-0  top-0 bg-gradient-to-r from-[black] to-[gray) 100%">
                
                

               <div className='lg:pt-40 pt-20'> 
               <div style={{ textAlign: 'center' }}>
              
</div>
               
                <h1  className='flex justify-center text-2xl   lg:text-6xl lg:ms-8 lg:mt-28 text-slate-400 font-serif'>Get The Best Toy For Your Kid </h1></div>
                <p  className='text-sm lg:text-3xl text-blue-300  lg:mt-5 font-serif lg:ms-8 flex justify-center'>Make playtime enjoyable with our  finest toys and games</p>
               <div className="flex justify-center items-center mt-10 lg:mt-10">
               <button className="btn bg-cyan-600 font-serif font-bold text-sm px-2 lg:px-4  lg:text-xl text-white"
          >
            Visit us
          </button>
               </div>
                </div>
            </div>



            </SwiperSlide>
        <SwiperSlide>
        <div 
                className="bg-cover backdrop-brightness-20 bg-center h-64 lg:h-screen w-full "
                style={{
                    backgroundImage:
                        "url('https://img.freepik.com/premium-photo/three-teddy-bears-sit-table-front-blue-background_836919-296.jpg')",
                }}
            >  
            <div className="w-full h-full items-center left-0  top-0 bg-gradient-to-r from-[black] to-[gray) 100%">
                
                

               <div className='lg:pt-40 pt-20'> 
               <div style={{ textAlign: 'center' }}>
              
</div>
               
                <h1  className='flex justify-center text-2xl lg:text-6xl lg:ms-8 lg:mt-28 text-slate-400 font-serif'>Get The Best Toy For Your Kid </h1></div>
                <p  className='text-sm lg:text-3xl text-blue-300  lg:mt-5 font-serif lg:ms-8 flex justify-center'>Make playtime enjoyable with our  finest toys and games</p>
                <div className="flex justify-center items-center mt-10 lg:mt-10">
               <button className="btn bg-cyan-600 font-serif font-bold text-sm px-2 lg:px-4  lg:text-xl text-white"
          >
            Visit us
          </button>
               </div>
                </div>
            </div>

        </SwiperSlide>
        <SwiperSlide>
        <div 
                className="bg-cover backdrop-brightness-20 bg-center h-64 lg:h-screen w-full "
                style={{
                    backgroundImage:
                        "url('https://static.vecteezy.com/system/resources/previews/029/754/345/non_2x/yellow-plastic-truck-and-bulldozer-toy-isolated-on-blue-background-with-copy-space-for-text-or-banner-photo.jpg')",
                }}
            >  
            <div className="w-full h-full items-center left-0  top-0 bg-gradient-to-r from-[black] to-[gray) 100%">
                
                

               <div className='lg:pt-40 pt-20'> 
               <div style={{ textAlign: 'center' }}>
              
</div>
               
                <h1  className='flex justify-center text-2xl lg:text-6xl lg:ms-8 lg:mt-28 text-slate-300 font-serif'>Get The Best Toy For Your Kid </h1></div>
                <p  className='text-sm lg:text-3xl text-blue-300  lg:mt-5 font-serif lg:ms-8 flex justify-center'>Make playtime enjoyable with our  finest toys and games</p>
                <div className="flex justify-center items-center mt-10 lg:mt-10">
               <button className="btn bg-cyan-600 font-serif font-bold text-sm px-2 lg:px-4  lg:text-xl text-white"
          >
            Visit us
          </button>
               </div>
                </div>
            </div>
        </SwiperSlide>
       
        {/* <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div> */}
      </Swiper>
        </>
    );
};



export default Banner;
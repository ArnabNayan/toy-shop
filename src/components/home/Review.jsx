// import { useEffect, useState } from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/pagination';
// import { Pagination } from 'swiper/modules';
// import useAxiosPublic from '../../hooks/useAxiosPublic';
// import StarRating from '../StarRating';


// const Review = () => {
//     const [reviews, setReviews] = useState([]);
//     const axiosPublic = useAxiosPublic();

//     useEffect(() => {
//         const fetchReviews = async () => {
//             try {
//                 const response = await axiosPublic.get('/reviews');
//                 setReviews(response.data);
//             } catch (error) {
//                 console.error('Failed to fetch reviews:', error);
//             }
//         };

//         fetchReviews();
//     }, [axiosPublic]);

//     return (
//         <div className=' mt-4'>
//             <h1 className="text-center text-xl lg:text-4xl text-cyan-600 mt-5 font-serif font-semibold ">.....What Customer Says About Us?.....</h1>
//             <div className='bg-slate-100 p-4 mt-2'>
//             <Swiper
              
//               slidesPerView={3}
//               spaceBetween={30}
//               pagination={{ clickable: true }}
//               modules={[Pagination]}
//               className="mySwiper"
//           >
//               {reviews.map((review, index) => (
//                   <SwiperSlide key={review._id} className={`bg-${index % 2 === 0 ? 'red-500' : 'teal-500'} p-4 rounded-lg`}>
//                       <div className='text-white '>
//                           <img src={review.image} alt={review.name} className="w-16 h-16 rounded-full mb-2" />
//                           <h3 className="text-lg font-serif font-semibold">{review.name}</h3>
//                           <p>{review.feedback}</p>
//                           <p className=" font-serif text-md lg:text-lg mb-2"><StarRating rating={review.rating} /></p>
//                       </div>
//                   </SwiperSlide>
//               ))}
//           </Swiper>
//             </div>
            
//         </div>
//     );
// };

// export default Review;

import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import StarRating from '../StarRating';

const Review = () => {
    const [reviews, setReviews] = useState([]);
    const axiosPublic = useAxiosPublic();

    useEffect(() => {
        const fetchReviews = async () => {
            try {
                const response = await axiosPublic.get('/reviews');
                setReviews(response.data);
            } catch (error) {
                console.error('Failed to fetch reviews:', error);
            }
        };

        fetchReviews();
    }, [axiosPublic]);

    return (
        <div className='mt-4'>
            <h1 data-aos="zoom-in"
        data-aos-duration="2000" className="text-center text-xl lg:text-4xl text-cyan-600 mt-5 font-serif font-semibold">
                .....What Customer Says About Us?.....
            </h1>
            <div className='bg-slate-100 p-4 mt-2'>
                <Swiper
                    slidesPerView={1} // Default for very small screens
                    spaceBetween={20} // Adjusted for smaller devices
                    pagination={{ clickable: true }}
                    modules={[Pagination]}
                    breakpoints={{
                        640: { // When screen width is >= 640px
                            slidesPerView: 1,
                        },
                        768: { // When screen width is >= 768px
                            slidesPerView: 2,
                        },
                        1024: { // When screen width is >= 1024px
                            slidesPerView: 3,
                        },
                    }}
                    className="mySwiper"
                >
                    {reviews.map((review, index) => (
                        <SwiperSlide data-aos="fade-up"
                        data-aos-duration="2000" key={review._id} className={`bg-${index % 2 === 0 ? 'red-500' : 'teal-500'} p-4 rounded-lg`}>
                            <div className='text-white'>
                                <img src={review.image} alt={review.name} className="w-16 h-16 rounded-full mb-2 mx-auto" />
                                <h3 className="text-lg font-serif font-semibold text-center">{review.name}</h3>
                                <p className="text-center">{review.feedback}</p>
                                <p className="font-serif text-md lg:text-lg mb-2 text-center"><StarRating rating={review.rating} /></p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default Review;

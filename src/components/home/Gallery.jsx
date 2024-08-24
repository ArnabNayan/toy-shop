import Marquee from "react-fast-marquee";

const Gallery = () => {
    return (
        <div>
            <h1 data-aos="zoom-in"
        data-aos-duration="2000" className="text-center text-xl lg:text-4xl text-cyan-600 mt-5 font-serif font-semibold ">.....Our Photo Gallery.....</h1>
            <div data-aos="fade-up"
        data-aos-duration="3000" className="mt-5 bg-slate-100">
            <Marquee>
               <img className="h-60 w-60 lg:h-80 lg:w-80" src="https://www.jbhifi.com.au/cdn/shop/products/666026-Product-0-I-638357722808979231.jpg?v=1700175546" alt="" />
               <img className="h-60 w-60 lg:h-80 lg:w-80" src="https://ae01.alicdn.com/kf/Sf8c7749448964fe5b1df4a0ba33c2912K/Pokemon-Ultra-Rare-Flash-Card-Pikachu-Charizard-Arceus-Mewtwo-Game-Battle-Collection-Card-English-Version-Vmax.jpg" alt="" />
               <img className="h-60 w-60 lg:h-80 lg:w-80" src="https://images-eu.ssl-images-amazon.com/images/I/71LBTWrbZXL._AC_UL600_SR600,600_.jpg" alt="" />
               <img className="h-60 w-60 lg:h-80 lg:w-80" src="https://ae01.alicdn.com/kf/S469aa221237d4d15ae649752f3f2eb41t/Airplane-Remote-Control-Children-Toys-RC-Plane-for-Beginner-Toys-for-Boys-Men-s-Children-s.jpg" alt="" />
               <img className="h-60 w-60 lg:h-80 lg:w-80" src="https://image.isu.pub/181227135128-5c7105f621474d708ce434a1b5fee3ff/jpg/page_1.jpg" alt="" />
               <img className="h-60 w-60 lg:h-80 lg:w-80" src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5892/5892915_sd.jpg" alt="" />
               <img className="h-60 w-60 lg:h-80 lg:w-80" src="https://m.media-amazon.com/images/I/911pBdTk1VL.jpg" alt="" />
               <img className="h-60 w-60 lg:h-80 lg:w-80" src="https://media.karousell.com/media/photos/products/2022/9/5/animate_street_fighter_card_1662374820_be666711_progressive.jpg" alt="" />
               <img className="h-60 w-60 lg:h-80 lg:w-80" src="https://i.etsystatic.com/36004013/r/il/743258/5029278874/il_300x300.5029278874_6fy2.jpg" alt="" />
               <img className="h-60 w-60 lg:h-80 lg:w-80" src="https://m.media-amazon.com/images/I/91eZu2Z7eXL.jpg" alt="" />
            </Marquee>
            </div>
        </div>
    );
};

export default Gallery;


const Newtoy = () => {
    const toysData = [
        {
          id: 1,
          name: "Toy Car",
          price: 250,
          image: "https://img.freepik.com/premium-photo/wooden-toy-car-3d-rendering-illustration-images-wallpaper_796580-717.jpg"
        },
        {
          id: 2,
          name: "Doll",
          price: 200,
          image: "https://miro.medium.com/v2/resize:fit:500/1*xrvvhEPi6AGxGQt_m8zEZQ.jpeg"
        },
        {
          id: 3,
          name: "Puzzle",
          price: 300,
          image: "https://www.urbannaturestore.ca/cdn/shop/products/Jardiniere_Gardeners_Calendar_1000pc_Puzzle_2__79344_406e73c5-f712-4223-ab45-d71999d7b744_480x.jpg?v=1625652039"
        },
        {
          id: 4,
          name: "Lego Set",
          price: 320,
          image: "https://cdn.vox-cdn.com/thumbor/nO1NkmgokDaoi8z24mMOwpl-LJU=/0x37:1500x1307/1400x1400/filters:focal(750x670:751x671)/cdn.vox-cdn.com/uploads/chorus_asset/file/25109239/lion_knights_castle.jpg"
        },
        {
          id: 5,
          name: "Action Figure",
          price: 200,
          image: "https://rukminim2.flixcart.com/image/850/1000/jk4bngw0/action-figure/u/u/t/action-figure-imodish-original-imaf7fyxeym3qyxt.jpeg?q=90&crop=false"
        },
        {
          id: 6,
          name: "Stuffed Animal",
          price: 300,
          image: "https://cdn.pixabay.com/photo/2024/08/03/11/31/ai-generated-8941975_640.png"
        },
        {
          id: 7,
          name: "Board Game",
          price: 280,
          image: "https://image.made-in-china.com/2f0j00UTkcrwNMMeoA/Multiplayer-Interactive-Children-Board-Game-Flying-Chess-Toy-Chess-Game.jpg"
        },
        {
          id: 8,
          name: "RC Helicopter",
          price: 320,
          image: "https://i5.walmartimages.com/asr/55d93089-ac4e-4023-857b-cbbd8945f5d9_1.6dfdd2359d903b51b53c3bd335151c2d.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF"
        }
      
      ];
    return (
        <div className="mt-3">
            <h1 data-aos="zoom-in"
        data-aos-duration="2000" className="text-center text-xl lg:text-4xl text-cyan-600 mt-5 font-serif font-semibold ">.....New Arrival!!.....</h1>
         <h2 data-aos="fade-up"
      data-aos-duration="2000" className='text-md lg:text-2xl text-slate-400 font-serif text-center mt-3'>We give your children happy moment<br /> with the best toys</h2>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 mt-5">
            {
                toysData.map((toy)=>(
                    <div data-aos="fade-up"
                    data-aos-duration="2000" key={toy.id} className="card card-compact bg-base-100 w-96 shadow-xl ">
   <figure className="h-80 w-full lg:w-80">
    <img className="hover:scale-110"
      src={toy.image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 data-aos="fade-up"
        data-aos-duration="2000" className="card-title font-serif font-bold">{toy.name}</h2>
    <p data-aos="fade-up"
        data-aos-duration="2000" className="font-serif font-medium">Price:{toy.price}</p>
   
  </div>
</div>
                ))
            }
        </div>
        </div>
      
    );
};

export default Newtoy;
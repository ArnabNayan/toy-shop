import ToyCard from "./ToyCard";


// eslint-disable-next-line react/prop-types
const Toys = ({data}) => {
    return (
        <div>
             <h1 className="text-center text-xl lg:text-5xl text-cyan-600 mt-8 font-semibold ">.......Our Toy Items.......</h1>
             
             <div className="grid lg:grid-cols-3 mt-8 gap-6">
                {
                    // eslint-disable-next-line react/prop-types
                    data.slice(0,6).map(toy=>(
                        <div key={toy._id} className="flex items-center justify-center">
                          <ToyCard toy={toy}></ToyCard>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Toys;
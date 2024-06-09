

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ShopCard from '../components/ShopCard';

import { useLoaderData } from 'react-router-dom';



const Shop = () => {
   const data = useLoaderData()
    const categories = Array.from(new Set(data.map(item => item.category)));

    return (
        <div>
            <div className="hero h-60 lg:min-h-screen " style={{backgroundImage: 'url(https://t4.ftcdn.net/jpg/05/30/10/03/360_F_530100389_sCIZyhoqhhiv6XP2uTx3xFYuLeMIvFfJ.jpg)'}}>
  <div className="hero-overlay bg-opacity-70"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-2xl">
      {/* <h1 className="mb-5 text-2xl lg:text-7xl font-bold font-serif bg-cyan-800 p-10 lg:p-28  bg-opacity-65">Shop Now</h1> */}
      <h1 className="mb-5 text-2xl lg:text-7xl font-bold font-serif bg-cyan-800 p-10 lg:p-28  bg-opacity-65 ">
            <span className=" fade-in">Shop</span>
           <span className=" fade-in-delayed"> Now</span>
         </h1>
      
    </div>
  </div>
</div>

            <h1 className="text-center text-xl lg:text-5xl text-cyan-600 mt-14 font-semibold">.......Order your toy.......</h1>
            <Tabs>
                <TabList className="font-serif font-semibold text-cyan-600 mt-6">
                    {categories.map(category => (
                        <Tab key={category}>{category}</Tab>
                    ))}
                </TabList>

                {categories.map(category => (
                    <TabPanel key={category}>
                        <div className="grid lg:grid-cols-3 mt-8 gap-6">
                            {data.filter(item => item.category === category).map(toy => (
                                <div key={toy._id} className="flex items-center justify-center">
                                    <ShopCard toy={toy} />
                                </div>
                            ))}
                        </div>
                    </TabPanel>
                ))}
            </Tabs>
        </div>
    );
};

export default Shop;



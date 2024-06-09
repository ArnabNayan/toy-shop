
import toast from "react-hot-toast";


const Addtoy = () => {

    const handleSubmit=async(e)=>{
        e.preventDefault()
        const form=e.target;
        const title=form.title.value;
        const description=form.description.value;
        const price=form.price.value;
        const category=form.category.value;
        const image_url=form.image_url.value;
        const rating=form.rating.value;
        const discount=form.discount.value;
        const data={title,description,price,category,image_url,rating,discount}
        // console.log(data)
        await fetch("http://localhost:5000/toysDatabase",{
            method:"POST",
            headers:{
                "Content-type":"application/json",
            },
            body:JSON.stringify(data),
        }).then((res)=>res.json())
           .then(()=>{
          
            toast.success("Product added successfully")
            form.reset()
           })
        

    }
    return (
        <div>
       <h1 className="text-center text-5xl text-teal-700 mt-8 font-semibold ">.......Add Toy Item.......</h1> 
  
        <div className="my-16">
          <form onSubmit={handleSubmit}>
            <div className="mt-2">
              <input
                className="bg-gray-100 p-4 w-full border border-black rounded-lg"
                type="text"
                name="title"
                placeholder="Title"
              />
            </div>
            <div className="mt-2">
              <input
                className="bg-gray-100 p-4 w-full border border-black rounded-lg"
                type="text"
                name="description"
                placeholder="Description"
              />
            </div>
            <div className="mt-2">
              <input
                className="bg-gray-100 p-4 w-full border border-black rounded-lg"
                type="number"
                name="price"
                placeholder="Price"
              />
            </div>
            <div className="mt-2">
              <input
                className="bg-gray-100 p-4 w-full border border-black rounded-lg"
                type="text"
                name="category"
                placeholder="Category"
              />
            </div>
            <div className="mt-2">
              <input
                className="bg-gray-100 p-4 w-full border border-black rounded-lg"
                type="text"
                name="image_url"
                placeholder="Image URL"
              />
            </div>
            <div className="mt-2">
              <input
                className="bg-gray-100 p-4 w-full border border-black rounded-lg"
                type="text"
                name="rating"
                placeholder="Rating"
              />
            </div>
            <div className="mt-2">
              <input
                className="bg-gray-100 p-4 w-full border border-black rounded-lg"
                type="text"
                name="discount"
                placeholder="Discount"
              />
            </div>
            <div className="mt-2 flex justify-center items-center">
              <input
                className="btn mt-4 w-full bg-teal-700 text-white  p-4"
                type="submit"
                value="Add Toy"
              />
            </div>
          </form>
        </div>
      </div>

    );
};

export default Addtoy;
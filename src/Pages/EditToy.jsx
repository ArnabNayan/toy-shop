import { useState } from "react";
import toast from "react-hot-toast";
import { useLoaderData } from "react-router-dom";


const EditToy = () => {
    const toy=useLoaderData()
    const [title,setTitle]=useState(toy.title);
    const [description,setDescription]=useState(toy.description);
    const [price,setPrice]=useState(toy.price);
    const [category,setCategory]=useState(toy.category);
    const [iamge_url,setImageUrl]=useState(toy.image_url);
    const [rating,setRating]=useState(toy.rating);
    const [discount,setDiscount]=useState(toy.discount);
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
        await fetch(`http://localhost:5000/toysDatabase/${toy._id}`,{
            method:"PATCH",
            headers:{
                "Content-type":"application/json",
            },
            body:JSON.stringify(data),
        }).then((res)=>res.json())
           .then(()=>{
            toast.success("Product edited successfully")
            form.reset()
           })
        

    }
    return (
        <div>
        <h1 className="text-center text-5xl text-teal-700 mt-8 font-semibold ">.......Edit Toy Item.......</h1> 
   
         <div className="my-16">
           <form onSubmit={handleSubmit}>
             <div className="mt-2">
               <input
                 className="bg-gray-100 p-4 w-full border border-black rounded-lg"
                 type="text"
                 name="title"
                 placeholder="Title"
                 value={title}
              onChange={(e) => setTitle(e.target.value)}
               />
             </div>
             <div className="mt-2">
               <input
                 className="bg-gray-100 p-4 w-full border border-black rounded-lg"
                 type="text"
                 name="description"
                 placeholder="Description"
                 value={description}
              onChange={(e) => setDescription(e.target.value)}
               />
             </div>
             <div className="mt-2">
               <input
                 className="bg-gray-100 p-4 w-full border border-black rounded-lg"
                 type="number"
                 name="price"
                 placeholder="Price"
                 value={price}
              onChange={(e) => setPrice(e.target.value)}
               />
             </div>
             <div className="mt-2">
               <input
                 className="bg-gray-100 p-4 w-full border border-black rounded-lg"
                 type="text"
                 name="category"
                 placeholder="Category"
                 value={category}
              onChange={(e) => setCategory(e.target.value)}
               />
             </div>
             <div className="mt-2">
               <input
                 className="bg-gray-100 p-4 w-full border border-black rounded-lg"
                 type="text"
                 name="image_url"
                 placeholder="Image URL"
                 value={iamge_url}
              onChange={(e) => setImageUrl(e.target.value)}
               />
             </div>
             <div className="mt-2">
               <input
                 className="bg-gray-100 p-4 w-full border border-black rounded-lg"
                 type="text"
                 name="rating"
                 placeholder="Rating"
                 value={rating}
              onChange={(e) => setRating(e.target.value)}
               />
             </div>
             <div className="mt-2">
               <input
                 className="bg-gray-100 p-4 w-full border border-black rounded-lg"
                 type="text"
                 name="discount"
                 placeholder="Discount"
                 value={discount}
              onChange={(e) => setDiscount(e.target.value)}
               />
             </div>
             <div className="mt-2 flex justify-center items-center">
               <input
                 className="btn mt-4 w-full bg-teal-700 text-white  p-4"
                 type="submit"
                 value="Edit Toy"
               />
             </div>
           </form>
         </div>
       </div>
 
    );
};

export default EditToy;
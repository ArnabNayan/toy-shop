import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import GoogleLogin from "../googleLogin/GoogleLogin";
import toast from "react-hot-toast";
import useAxiosPublic from "../hooks/useAxiosPublic";



const Registration = () => {
    const [pass,setPass]=useState(true)
   
    const {createUser,user,updateUserProfile}=useAuth()
    const location=useLocation()
    const navigate=useNavigate()
    const axiosPublic=useAxiosPublic()
    const from=location?.state?.from?.pathname||'/';
    const handleSubmit=async(e)=>{
      e.preventDefault();
      const form=e.target;
      const name=form.name.value;
      const email=form.email.value;
      const password=form.password.value;
      const confirm_password=form.confirm_password.value;
      const photoURL = form.photoURL.value;
      if(password!==confirm_password){
         setPass(false)
      }
      console.log(name,email,password,confirm_password,photoURL)
      if(password==confirm_password){
       
        try {
        
          await createUser(email, password);
          await updateUserProfile(name, photoURL);
         const userInfo={
          name:name,
          email:email,
          photoURL:photoURL
         }
          axiosPublic.post('/users',userInfo)
          .then(res=>{
            if(res.data.insertedId){
              toast.success("User registered successfully");
              form.reset();
              navigate(from);
            }
          })
         
      } catch (error) {
          console.error("Error creating user:", error);
      }
        if(user){
          navigate(from)
        }
      }
    }
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col gap-8 ">
          <div className="text-center lg:text-left">
            <h1 className="text-2xl lg:text-4xl font-bold text-cyan-600">Register From Here!</h1>
          </div>
          <div className="card shrink-0 w-full max-w-md shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit} className="card-body">
            <div className="form-control">
                <label className="label">
                  <span className="label-text text-md">Name</span>
                </label>
                <input type="text" placeholder="name" className="input input-bordered"name="name" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-md">Email</span>
                </label>
                <input type="email" placeholder="email" className="input input-bordered"name="email" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-md">photoURL</span>
                </label>
                <input type="text" placeholder="photoURL" className="input input-bordered" name="photoURL"required />
                
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-md">Password</span>
                </label>
                <input type="password" placeholder="password" className="input input-bordered" name="password"required />
                
              </div>
             
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-md">Confirm Password</span>
                </label>
                <input type="password" placeholder="confirm password" className="input input-bordered"name="confirm_password" required />
                
              </div>
           
             {
                !pass && (
                    <div className="my-2">
                        <h1 className="text-red-500">Password does not match</h1>
                    </div>
                )
             }
              <div className="form-control mt-6">
                <button className="btn bg-cyan-600 text-white text-lg">
                  Register
                   </button>
              </div>
              <div className="form-control mt-6">
                <GoogleLogin></GoogleLogin>
              </div>
              <div className="mt-6">
              <p>
                Already Have an Account?{" "}
                <Link to="/login" className="text-red-500">
                  Login
                </Link>
              </p>
            </div>
            </form>
          </div>
        </div>
      </div>

    );
};

export default Registration;
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import GoogleLogin from "../googleLogin/GoogleLogin";
import { useEffect } from "react";


const Login = () => {
    const {user,signIn}=useAuth()
    const location=useLocation()
    const navigate=useNavigate()
    const from=location?.state?.from?.pathname || '/'
    const handleSubmit=async(e)=>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        await signIn(email,password)
        console.log(email, password);
    }
    useEffect(()=>{
        if(user){
           navigate(from,{replace:true})
        }
    },[from,navigate,user])
    return (
        <div className="hero min-h-screen bg-base-200">
            
        <div className="hero-content flex flex-col gap-8">
         <div className="text-center">
           <h1 className="lg:text-5xl text-2xl font-bold text-cyan-600">Login From Here!</h1>
          </div>
          <div className="card shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-lg">Email</span>
                </label>
                <input type="email" placeholder="email" className="input input-bordered"name="email" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-lg">Password</span>
                </label>
                <input type="password" placeholder="password" className="input input-bordered" name="password"required />
                
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-cyan-600 text-white text-xl">Login</button>
              </div>
              <div className="form-control mt-6">
                <GoogleLogin></GoogleLogin>
              </div>
              <div className="mt-6">
              <p>
                New here?{" "}
                <Link to="/registration" className="text-red-500">
                  Register
                </Link>
              </p>
            </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default Login;
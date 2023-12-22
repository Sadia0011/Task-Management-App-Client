import {  useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../Providers/AuthProvider";
const SignIn = () => {
  const { signIn,googleSignIn } = useContext(AuthContext)
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);

    // sign in user
    signIn(email, password)
      .then((result) => {
        console.log(result.user);
        toast("Successfully logged in");
        setTimeout(() => {
          navigate(location?.state ? location.state : "/");
        }, 2000);
      })
      .catch((error) => {
        console.error(error);
        toast.error("email or password don't match.please try again");
      });
  };
  //   // google sign in
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then(result => {
        console.log(result);
  
        const userInfo = {
          displayName: result.user?.displayName,
          photoURL: result.user?.photoURL,
          email: result.user?.email,
        };
  
        // Assuming you want to send user information to the server
        return fetch("http://localhost:5000/user", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userInfo),
        });
      })
      .then(response => {
        if (response.ok) {
          console.log('User information posted to MongoDB');
        } else {
          throw new Error('Failed to post user information to MongoDB');
        }
  
        toast("Successfully logged in");
        setTimeout(() => {
          navigate(location?.state ? location.state : "/");
        }, 2000);
      })
      .catch(error => {
        console.error(error);
        toast.error("An error occurred during Google sign-in. Please try again.");
      });
  };
  
  
  
  return (
    <div>
          <div className="hero-content flex-col ">
      <div className="text-center ">
        <h1 className="text-5xl font-bold text-blue-400">Login now!</h1>
      </div>
      <div className="card flex-shrink-0 w-full bg-slate-200 max-w-sm shadow-2xl">
        <div className="card-body ">
          <form onSubmit={handleLogin}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">
                  Email<sup className="text-blue-400">*</sup>
                </span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="border-blue-400 input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">
                  Password<sup className="text-blue-400">*</sup>
                </span>
              </label>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="password"
                className="border-blue-400 input input-bordered"
                required
              />
              <span className="absolute bottom-52 right-12">
                <span onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? (
                    <AiOutlineEye></AiOutlineEye>
                  ) : (
                    <AiOutlineEyeInvisible></AiOutlineEyeInvisible>
                  )}
                </span>
              </span>
              {/* <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label> */}
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-blue-400 border-blue-400 text-white">
                Login
              </button>
            </div>
          </form>
        </div>
        <button
          onClick={handleGoogleSignIn}
          className=" text-blue-400 font-semibold flex justify-center items-center gap-2"
        >
          Login with Google{" "}
          <span className="text-2xl">
            <FcGoogle></FcGoogle>
          </span>
        </button>

        <p className="p-3 text-center">
          New here? Please
          <Link to="/reg">
            <button className="btn btn-link text-blue-400">Register</button>
          </Link>
        </p>
      </div>
      <ToastContainer />
    </div>
    </div>
  );
};

export default SignIn;
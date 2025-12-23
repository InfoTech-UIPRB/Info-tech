import React from "react";
import { useRef,  useState, useEffect, useContext } from "react";
import { data, Link, useLocation, useNavigate } from "react-router-dom";
import axios from 'axios'
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Infotech from "../assets/Images/png_logo_infotech.png";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const currentPage = useLocation();


    const handleSubmit = async (e) => {
        e.preventDefault()
        await axios.get(`http://localhost:5000/test?email=${email}`)
        .then(resp => {
            console.log(resp)
            if(resp.data)
            {
                navigate("/")
            }
        })
        .catch(error => {
            console.log(error)
        });
    };

    return (
        <>
            <NavBar />
                <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
  <div className="sm:mx-auto sm:w-full sm:max-w-sm">
    <img src={Infotech} alt="Your Company" className="mx-auto h-10 w-auto" />
    <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-white">Sign in to your account</h2>
  </div>

  <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
    <form onSubmit={handleSubmit} class="space-y-6">
      <div>
        <label for="email" className="block text-sm/6 font-medium text-gray-100">Email address</label>
        <div class="mt-2">
          <input id="email" type="email" name="email" value={email} onChange={(event) => setEmail(event.target.value)} required autocomplete="email" className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6" />
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between">
          <label for="password" className="block text-sm/6 font-medium text-gray-100">Password</label>
          <div class="text-sm">
            <a href="#" className="font-semibold text-indigo-400 hover:text-indigo-300">Forgot password?</a>
          </div>
        </div>
        <div class="mt-2">
          <input id="password" type="password" name="password" required autocomplete="current-password" className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6" />
        </div>
      </div>

      <div>
        <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm/6 font-semibold text-white hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">Sign in</button>
      </div>
    </form>

    <p class="mt-10 text-center text-sm/6 text-gray-400 ">
      Not a member?
      <Link
        to = "https://infotech.fillout.com/t/dtBhkArfxLus"
        target="_blank"
        className="rounded-sm text-yellow-300 px-2 hover:text-white transition font-medium"
      >
      <span href="#">Join</span>
      </Link>
    </p>
  </div>
</div>
            <Footer />
        </>
    )
};

export default Login;
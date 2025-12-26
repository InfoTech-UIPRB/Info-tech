import React from "react";
import { useRef,  useState, useEffect, useContext } from "react";
import { data, useNavigate } from "react-router-dom";
import axios from 'axios'
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();


    const handleSubmit = async (e) => {
        e.preventDefault()
        await axios.get(`http://localhost:5000/test?email=${email}`)
        .then(resp => {
            console.log(resp)
            if(resp.data)
            {
                navigate("/Dashboard")
            }
        })
        .catch(error => {
            console.log(error)
        });
    };

    return (
        <>
            <NavBar />
                <form onSubmit={handleSubmit} className="text-white">
                    <label> Email:</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                    <button className="border-white" type="submit"> Submit</button>
                </form>
            <Footer />
        </>
    )
};

export default Login;
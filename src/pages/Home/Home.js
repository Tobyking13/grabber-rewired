import React from "react";
import { useNavigate } from "react-router-dom";
import spoonacularJSON from "../../utils/spoonacularJSON.json";
import "./Home.css";
import Cube from "../../components/HomeComponents/Cube";

if(localStorage.getItem('grabber-results') === null) {localStorage.setItem('grabber-results', JSON.stringify(spoonacularJSON));}
if(localStorage.getItem('unsplashImage') == null) {localStorage.setItem('unsplashImage',"https://raw.githubusercontent.com/benjistealth/grabber-rewired/main/src/assets/images/pipie.JPG");}

function Home() {
    const navigate = useNavigate();

    function Login() {
        navigate("/Login");
    };

    function Signup() {
        navigate("/SignUp");
    };

    function Guest() {
        navigate("/RecipeSearchGuest");
    };

    return (
        <div className="container content home-main">
            <div className="spiel row content">
                <h1 className="home-title has-text-centered">
                    Come on in and search for some tasty snacks ! 😋
                </h1>
            </div>
            <div className="container">
            < Cube />
            </div>
            <div className="container row is-centered px-2">
            <h4 className="content pt-6 has-text-centered">User Registration / Login</h4>
                <button className="btn mt-2 button are-medium is responsive is-link is-outlined hom-log-sig" type="button" onClick={Login}>Login</button>
                <button className="btn mt-2 button are-medium is responsive is-link is-outlined hom-log-sig" type="button" onClick={Signup}>Register</button>
                <button className="btn mt-2 button are-medium is responsive is-link is-outlined hom-log-sig" type="button" onClick={Guest}>Continue as Guest</button>
            </div>
        </div>
    );
}

export default Home;

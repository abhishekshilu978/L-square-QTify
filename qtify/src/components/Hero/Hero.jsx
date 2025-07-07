import React from "react";
import styles from "../Hero/Hero.module.css";

function Hero () {
    return (
        <div className={styles.hero}>
            <div sx={{border: "1px solid black"}}>
                <h1>
                    100 Thousand Songs, ad-free
                </h1>
                <h1>
                    Over thousands podcast episodes
                 </h1>
            </div>
        <div>
        <img
     src={require("../../assets/Hero_headphone.png")}
        width={212}
        alt="headphones" 
        />
        </div>
        </div>
        
    );
}
export default Hero;
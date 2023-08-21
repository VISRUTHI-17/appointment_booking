import React from "react";
import '../css/Header.css';
import logo from '../assests/logo.png';
import { AiOutlineSearch } from 'react-icons/ai';


const Header = () => {
    return (
        <div className="header-main">
            <div className="img-div" style={{background:"green",width:"30%"}}>
                <img src={logo} height={"50%"} width={"20%"} />
            </div>
            <div className="search-div" style={{background:"pink",width:"70%",display:"flex",justifyContent:"flex-end"}}>
                <div className="search">
                    <div class="search-container">
                        <input type="text" class="search-input" placeholder="Select City..." />
                        <div class="search-icon">
                            <AiOutlineSearch />
                        </div>
                    </div>
                </div>
                <button className='contact-button'>Contact Us</button>
            </div>

            
        </div>
    );
}


export default Header;
import React from "react";
import '../css/Menu.css';
import sym from "../assests/logo1.png";
import pic from "../assests/logo2.png";
import { AiOutlineSearch } from "react-icons/ai";
const Menu = () => {
    return (
        <div className="menu-div">
            <div className="main-div">
                <div className="logo-div">
                    <img src={sym} height={"50%"} width={"25%"} />
                    <img src={pic} height={"60%"} width={"20%"} />
                </div>
                <div className="left-menu-div">
                    <div className="left-div">
                    <button className='menu-button'>Menu</button>
                    <div className='search'>
                        <div class='search-container'>
                            <input
                                type='text'
                                class='search-input'
                                placeholder='Search in menu'
                            />
                            <div class='search-icon'>
                                <AiOutlineSearch />
                            </div>
                        </div>
                    </div>

                    </div>
                    
                </div>
            </div>

        </div>

    );
}

export default Menu;
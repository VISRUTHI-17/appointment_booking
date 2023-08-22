import React from "react";
import "../css/Home.css";
import saloon from "../assests/saloon.jpeg";
import { IoNavigate } from "react-icons/io5";

const Home = () => {
  const arr = [1, 2, 3, 5, 6, 7, 8, 9, 10, 11, 12];
  return (
    <div className='home-main'>
      <div className='home-sidemenu'>
        <div className='border-box'>
          <h2>Preferences</h2>
          <p className='sub-head'>Gender</p>
          <div className='gender-sec'>
            <div className='gender-sub'>
              <p>Male</p>
              <input type='radio' name='gender' />
            </div>
            <div className='gender-sub'>
              <p>Female</p>
              <input type='radio' name='gender' />
            </div>
            <div className='gender-sub'>
              <p>Unisex</p>
              <input type='radio' name='gender' />
            </div>
          </div>
          <p className='sub-head'>Price Range</p>
          <input type='range' list='markers' style={{ width: "inherit" }} />
          <datalist id='markers'>
            <option value='0' label='200'></option>
            <option value='25' label='500'></option>
            <option value='50' label='1000'></option>
            <option value='75' label='5000'></option>
            <option value='100' label='10000'></option>
          </datalist>
          <p className='sub-head'>Sort Price</p>
          <div className='gender-sec'>
            <div className='gender-sub'>
              <p>Low to High</p>
              <input type='radio' name='price' />
            </div>
            <div className='gender-sub'>
              <p>High to Low</p>
              <input type='radio' name='price' />
            </div>
          </div>
          <p className='sub-head'>Ratings</p>
        </div>
      </div>
      <div className='home-mainside'>
        {arr.map((ele, index) => {
          return (
            <div className='home-card'>
              <img
                src={saloon}
                height={"50%"}
                style={{ borderRadius: "15px" }}
              />
              <div
                style={{
                  height: "20%",
                  padding: "2%",
                  boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
                  borderRadius: "6px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}>
                Shop Name
                <div
                  style={{
                    alignItems: "center",
                    display: "flex",
                    justifyContent: "space-between",
                  }}>
                  <IoNavigate size={30} />
                  2.23
                </div>
              </div>
              <div
                style={{
                  fontSize: "small",
                  padding: "2%",
                }}>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;

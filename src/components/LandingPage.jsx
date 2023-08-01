import React from "react";
import { BiSearch, BiCart } from "react-icons/bi";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { GoTriangleDown } from "react-icons/go";
import { RiTwitterFill } from "react-icons/ri";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import {IoUnlinkSharp} from "react-icons/io"
import {AiOutlineHeart} from "react-icons/ai"
import "../styles/landingPage.css";

export const LandingPage = () => {
    
  return (
    <>
      <div className="navbar">
        <div className="logo-image">
          <img
            src="https://shopkiddieboo.com/wp-content/uploads/2021/08/kboe2.png"
            alt="logo image here "
          />
        </div>
        <div className="search-bar">
          <div className="all">
            <h3>All</h3>
            <button>
              <GoTriangleDown />
            </button>
          </div>
          <input type="text" placeholder="Search here..." />
          <button className="search-btn">
            <BiSearch className="search-icon" />
          </button>
        </div>
        <div className="links">
          <ul>
            <li>
              <BiCart />
            </li>
            <li>
              <FaFacebookF />
            </li>
            <li>
              <FaInstagram />
            </li>
            <li>
              <RiTwitterFill />
            </li>
          </ul>
        </div>
        <div className="bars">
          <button>
            <HiOutlineMenuAlt2 />
          </button>
        </div>
      </div>
      <div className="categories">
        <ul class="menu">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">KDB GIRL-KID</a>
          </li>
          <li>
            <a href="#">KDB BOY-KID</a>
          </li>
          <li>
            <a href="#">KDB NEWBIES</a>
          </li>
          <li>
            <a href="#">AWIBI BABY PREMIUM DIAPERS</a>
          </li>
          <li>
            <a href="#">AWIBI BABY WIPES</a>
          </li>
          <li>
            <a href="#">MORE</a>
          </li>
          <li>
            <a href="#">KDB FOOTWEAR</a>
          </li>
        </ul>
      </div>

      <div className="hero">
        <div className="hero-overlay">
            <h2>e2woo & aiwibi Collections</h2>
            <p>Here you will find baby and children's clothes, shoes ,toys,strollers,car seats,maternity clothes,acessories and more.</p>
            <button className="btn">Shop Now</button>
        </div>
      </div>
      <div className="newest-products">
        <h4>Newest Products</h4>
      </div>
      <div className="grid-images">
        <div className="grid-container">
          <div className="card-images">
            <img src="https://shopkiddieboo.com/wp-content/uploads/2021/09/1-1821-300x300.jpg" alt="" />
            <div className="text">
              <h5>this is one image</h5>
            </div>
            <div className="hover">
              <BiCart/>
              {/* <HiOutlineMagnifyingGlassPlus/> */}
              <AiOutlineHeart/>
              <IoUnlinkSharp/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

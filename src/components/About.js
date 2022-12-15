import React from "react";
import img from "./img.jpg";
function ABout() {
  return (
    <div className="card-container">
      <div className="cart-top-navigation">
        <li>
          <i className="fa-solid fa-arrow-left"></i>
        </li>
        <ul>
          <i id="heart" className="fa-regular fa-heart"></i>
          <i className="fa-solid fa-bars"></i>
        </ul>
      </div>
      <div className="user-image">
        <img src={img} alt="thala" />
      </div>
      <h2 className="user-name">THALA SWAIN</h2>
      <p className="about-user">
        HEY, I AM A WEB DEVELOPER IF WANT TO KNOW MORE VIST MY WEB SITE.
      </p>
      <button className="hire-me">
        <a
          target="_blank"
          href="https://www.linkedin.com/in/thala-swain-8935b8243/"
          rel="noreferrer"
        >
          TAP ME
        </a>
      </button>
      {/* <!-- <button className="hire-me" href="https://www.linkedin.com/messaging/thread/2-N2MwZWI0MTUtNzE2NC00NDE1LWI0MmQtNjk2NjYwM2JmMmZlXzAxMw==/">Hire Me</button> --> */}

      <div className="social-container">
        <div className="social-item">
          <li className="instagram">
            <i className="fa-brands fa-instagram"></i>
          </li>
          <span className="followers">8k</span>
          <span className="followers">Followers</span>
        </div>

        <div className="social-item">
          <li className="linkedin">
            <i className="fa-brands fa-linkedin"></i>
          </li>
          <span className="subscribers"></span>
          <span className="subscribers"></span>
        </div>
        <div className="social-item">
          <li className="twitter">
            <i className="fa-brands fa-twitter"></i>
          </li>
          <span className="followers">00</span>
          <span className="followers">Followers</span>
        </div>
      </div>
    </div>
  );
}

export default ABout;

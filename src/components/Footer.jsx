import React, { useState } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const [Links, setLinks] = useState(false);
  const [Gallery, setGallery] = useState(false);
  const [Contact, setContact] = useState(false);
  return (
    <footer>
      <section class="contact w-[50%]">
        <div class="contact-1">
          <i class="fa fa-phone" id="call" aria-hidden="true"></i>
          <p class="question">DO YOU HAVE A QUESTION?</p>
        </div>
        <div class="contact-2">
          <Link to="/contact">
            <button className="contact-button">
              Contact Us
            </button>
          </Link>
        </div>
      </section>

      <section class="footer">
        <div class="footer-content">
          <div class="footer-about">
            <h1>OUR MISSION</h1>
            <p>
              At Rise and Learn, we are dedicated to transforming lives through education and empowerment. 
              We believe every child deserves access to quality education and the opportunity to reach their full potential.
            </p>
            <br />
            <p>
              Through our flagship programs, we provide scholarships, educational resources, and vocational training,
              creating sustainable pathways out of poverty and building stronger communities for future generations.
            </p>
          </div>

          <div class="footer-links">
            <h2
              class="links"
              onClick={() => {
                setLinks(!Links);
              }}
            >
              QUICK LINKS
            </h2>
            <br />
            <ul class={"footer-links-ul " + (Links && "active-links")}>
              <li>
                <i class="fa fa-arrow-circle-right" aria-hidden="true"></i>
                <Link to="/">Home</Link>
              </li>
              <li>
                <i class="fa fa-arrow-circle-right" aria-hidden="true"></i>
                <Link to="about">About</Link>
              </li>
              {/* <li>
                <i class="fa fa-arrow-circle-right" aria-hidden="true"></i>
                <Link to="causes">Causes</Link>
              </li> */}
              <li>
                <i class="fa fa-arrow-circle-right" aria-hidden="true"></i>
                <Link to="event">Events</Link>
              </li>
              {/* <li>
                <i class="fa fa-arrow-circle-right" aria-hidden="true"></i>
                <Link to="news">News</Link>
              </li> */}
              <li>
                <i class="fa fa-arrow-circle-right" aria-hidden="true"></i>
                <Link to="contact">Contact</Link>
              </li>
            </ul>
          </div>

          <div class="gallery">
            <h2
              class="gal-btn"
              onClick={() => {
                setGallery(!Gallery);
              }}
            >
              GALLERY
            </h2>
            <div class={"gal-container " + (Gallery && "gal-container-active")}>
              <div>
                <img src="assets/ga1.png" />
                <img src="assets/ga2.png" />
              </div>
              <div>
                <img src="assets/gap3.png" />
                <img src="assets/gal4.png" />
              </div>
              <div>
                <img src="assets/gal5.png" />
                <img src="assets/gal6.png" />
              </div>
            </div>
          </div>

          <div class="contact-footer">
            <h2
              class="contact-btn"
              onClick={() => {
                setContact(!Contact);
              }}
            >
              CONTACT US
            </h2>

            <div
              class={
                "contact-container " + (Contact && "contact-container-active")
              }
            >
              <div class="contact-card">
                <div class="contact-heading">
                  <div class="location">
                    <i class="fa fa-map-marker one" aria-hidden="true"></i>
                  </div>
                  <h3>Head Office</h3>
                </div>
                <div class="contact-ad">
                  <p>Majengo street, MWANHUZI ward, Meatu District, Simiyu Region</p>
                  <p>TANZANIA 39412</p>
                </div>
              </div>
              <div class="contact-card">
                <div class="contact-heading">
                  <div class="location">
                    <i class="fa fa-phone two" aria-hidden="true"></i>
                  </div>
                  <h3>Phone Number</h3>
                </div>
                <div class="contact-ad">
                  <p>+255 767 088 288</p>
                  <p>+255 757 441 919 </p>
                </div>
              </div>
              <div class="contact-card">
                <div class="contact-heading">
                  <div class="location">
                    <i class="fa fa-envelope three" aria-hidden="true"></i>
                  </div>
                  <h3>Email</h3>
                </div>
                <div class="contact-ad">
                  <p>riseandlearn01@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
          <p class="copyright">
            Copyright @ 2025. All Rights Reserved.
          </p>
        </div>
      </section>
    </footer>
  );
};

export default Footer;

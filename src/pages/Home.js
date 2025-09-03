// src/pages/Home.jsx
import React, { useState } from "react";
import DonationCard from "../components/DonationCard";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FeaturedCard from "../components/FeaturedCard";


const Home = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  // Removed: team state & axios fetching
  const [data, setdata] = useState([]);
  const [help, sethelp] = useState([
    {
      photourl: "assets/newrise/donate.png",
      title: "Make a Donation",
      descr:
        "Your financial contribution helps us provide scholarships, educational materials, and learning resources to students in need. Every donation makes a difference in a child's educational journey.",
    },
    {
      photourl: "assets/newrise/volunteer.png",
      title: "Volunteer Your Time",
      descr:
        "Join our community of dedicated volunteers. Help with tutoring, mentoring, organizing events, or supporting our administrative activities. Your time and skills can transform lives.",
    },
    {
      photourl: "assets/newrise/sponsor.png",
      title: "Sponsor a Student",
      descr:
        "Directly impact a student's future by sponsoring their education. Cover tuition fees, books, supplies, or technology needs to help them succeed in their academic pursuits.",
    },
  ]);

  const navigate = useNavigate();

  return (
    <div>
      <section className="banner-1">
        <div className="diagonal-div"></div>
        <div className="diagonal-div-2"></div>

        <div className="banner-text">
          <p className="banner-heading-1">TRANSFORMING LIVES THROUGH</p>
          <p className="banner-heading-2">HOLISTIC EMPOWERMENT</p>
          <p className="banner-heading-3">
            The Rise and Learn Foundation is dedicated to empowering vulnerable
            children and youth in Tanzania. Through education, healthcare, child
            rights advocacy, youth empowerment, and sustainable development, we
            break down barriers and create opportunities for every child to
            learn, grow, and succeed regardless of their circumstances.
          </p>
          <button
            onClick={() => {
              navigate("causes");
            }}
          >
            Support Our Mission
          </button>
        </div>
      </section>

      <section className="help-section">
        <p>
          HOW COULD{" "}
          <span style={{ color: "var(--orange-dark)" }}>YOU HELP ?</span>
        </p>
        <div className="help-container">
          {help.map((e, i) => {
            return (
              <div className="cards" key={i}>
                <div className="help-img">
                  <img src={e.photourl} alt={e.title} />
                </div>
                <h1 className="text-[var(--orange-dark)]">{e.title}</h1>
                <p>{e.descr}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="about-us">
        <div className="about-us-1">
          <img src="assets/newrise/about.jpeg" alt="About Rise and Learn" />
        </div>
        <div className="about-us-2">
          <div className="about-text">
            <p className="about-heading-2">WE ARE</p>
            <p className="about-heading-2">RISE AND LEARN FOUNDATION</p>
            <p className="about-heading-3">
              At the heart of our work is the belief that every child has the
              right to learn, grow, and succeed, regardless of the circumstances
              they were born into. We recognize that poverty, lack of access to
              education, poor health services, and social exclusion are
              interconnected barriers that limit the potential of children and
              young people in underserved communities.
            </p>
            <button
              onClick={() => {
                navigate("causes");
              }}
            >
              Join Our Mission
            </button>
          </div>
        </div>
      </section>

      {/* Keep slider as-is if you plan to use it */}
      <Slider className="w-full flex overflow-hidden" {...settings}></Slider>

      <section className="volunteer">
        <p className="title">
          OUR <span style={{ color: "var(--red)" }}>TEAM</span>
        </p>

        
        
      </section>
    </div>
  );
};

export default Home;

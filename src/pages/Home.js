// src/pages/Home.jsx
import React, { useState } from "react";
import DonationCard from "../components/DonationCard";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FeaturedCard from "../components/FeaturedCard";
import TeamGrid from "../components/TeamGrid";
import { teamMembers } from "../data/team";

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

  const [data, setdata] = useState([]);
  const [help, sethelp] = useState([
    {
      photourl: "assets/newrise/donate.jpeg", // Updated to real image
      title: "Make a Donation",
      descr: "Your financial contribution helps us provide scholarships, educational materials, and learning resources to students in need. Every donation makes a difference in a child's educational journey.",
    },
    {
      photourl: "assets/newrise/volunteer.jpeg", // Updated to real image
      title: "Volunteer Your Time",
      descr: "Join our community of dedicated volunteers. Help with tutoring, mentoring, organizing events, or supporting our administrative activities. Your time and skills can transform lives.",
    },
    {
      photourl: "assets/newrise/sponsor.jpg", // Updated to real image
      title: "Sponsor a Student",
      descr: "Directly impact a student's future by sponsoring their education. Cover tuition fees, books, supplies, or technology needs to help them succeed in their academic pursuits.",
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
              <div className="help-card" key={i}>
                <div className="help-img-container">
                  <img src={e.photourl} alt={e.title} className="help-real-img" />
                  <div className="help-overlay">
                    <h3>{e.title}</h3>
                  </div>
                </div>
                <div className="help-content">
                  <p>{e.descr}</p>
                  <button 
                    className="help-button"
                    onClick={() => {
                      navigate("about");
                    }}
                  >
                    Learn More
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Rest of the component remains the same */}
      <section className="about-us ">
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
      
      <Slider className="w-full flex overflow-hidden" {...settings}></Slider>

      {/* Donors / Partners */}
<section
  aria-labelledby="donors-heading"
  className="py-16 bg-gray-50"
>
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <h2
      id="donors-heading"
      className="text-center text-3xl font-bold tracking-tight text-gray-900"
    >
      OUR <span className="text-red-600">DONORS</span>
    </h2>
    <p className="mt-3 text-center text-gray-600">
      We gratefully acknowledge the generous support of our donors.
    </p>

    {/* if/when you have multiple donors, just add them to this array */}
    {(() => {
      const donors = [
        {
          name: "Polish Humanitarian Action (PAH)",
          url: "https://www.pah.org.pl/en/",
          // try a local asset first; it will gracefully fall back to a placeholder if missing
          logo: "assets/newrise/pha-svg.png",
          placeholder: "https://via.placeholder.com/240x80?text=PAH+Logo",
        },
      ];

      return (
        <ul
          className="mt-10 flex gap-6 items-center justify-center mx-auto"
          role="list"
        >
          {donors.map((d) => (
            <li key={d.name} className="flex mx-auto">
              
                <img
                  src={d.logo}
                  alt={`${d.name} logo`}
                  loading="lazy"
                  className="mx-auto h-20 w-auto object-contain transition mx-auto"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = d.placeholder;
                  }}
                />
                <span className="sr-only">{d.name}</span>
            </li>
          ))}
        </ul>
      );
    })()}
  </div>
</section>
    </div>
  );
};

export default Home;
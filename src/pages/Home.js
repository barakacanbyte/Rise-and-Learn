import React, { useEffect, useLayoutEffect, useState } from "react";
import DonationCard from "../components/DonationCard";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FeaturedCard from "../components/FeaturedCard";

const Home = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
    console.log("fdfddf");
  }, []);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  const [data, setdata] = useState([]);
  const [team, setteam] = useState([]);
  const [help, sethelp] = useState([
    {
      photourl: "assets/newrise/donate.png",
      title: "Make a Donation",
      descr: "Your financial contribution helps us provide scholarships, educational materials, and learning resources to students in need. Every donation makes a difference in a child's educational journey."
    },
    {
      photourl: "assets/newrise/volunteer.png", 
      title: "Volunteer Your Time",
      descr: "Join our community of dedicated volunteers. Help with tutoring, mentoring, organizing events, or supporting our administrative activities. Your time and skills can transform lives."
    },
    {
      photourl: "assets/newrise/sponsor.png",
      title: "Sponsor a Student",
      descr: "Directly impact a student's future by sponsoring their education. Cover tuition fees, books, supplies, or technology needs to help them succeed in their academic pursuits."
    }
  ]);
  const [reviews, setreviews] = useState([]);
  // useEffect(() => {
  //   const getCauses = async () => {
  //     const res = await axios.get("http://localhost:8000/causes");
  //     console.log(res.data);
  //     setdata(res.data);
  //   };
  //   const getMembers = async () => {
  //     const res = await axios.get("http://localhost:8000/team_members");
  //     console.log(res.data);
  //     setteam(res.data);
  //   };
    // const getHelp = async () => {
    //   const res = await axios.get("http://localhost:8000/help");
    //   console.log(res.data);
    //   sethelp(res.data);
    // };
  //   const getReviews = async () => {
  //     const res = await axios.get("http://localhost:8000/reviews/joined");
  //     console.log(res.data, "reviews");
  //     setreviews(res.data);
  //   };
  //   console.log(team);
  //   getCauses();
  //   getReviews();
  //   getMembers();
  // }, []);

  const navigate = useNavigate();
  return (
    <div>
      <section class="banner-1">
        <div class="diagonal-div"></div>
        <div class="diagonal-div-2"></div>

        <div class="banner-text">
          <p class="banner-heading-1">EMPOWERING MINDS THROUGH</p>
          <p class="banner-heading-2">QUALITY EDUCATION</p>
          <p class="banner-heading-3">
            Education is the foundation of progress and hope. Rise and Learn Foundation 
            is dedicated to breaking barriers to learning, providing educational resources, 
            and creating opportunities for students to reach their full potential regardless 
            of their background or circumstances.
          </p>
          <button
            onClick={() => {
              navigate("causes");
            }}
          >
            Support Education
          </button>
        </div>
      </section>
      <section class="help-section">
        <p>
          HOW COULD <span style={{ color: "var(--orange-dark)" }}>YOU HELP ?</span>
        </p>
        <div class="help-container">
          {help.map((e) => {
            return (
              <div class="cards">
                <div class="help-img">
                  <img src={e.photourl} />
                </div>
                <h1 className="text-[var(--orange-dark)]">{e.title}</h1>
                <p>{e.descr}</p>
              </div>
            );
          })}
        </div>
      </section>
      <section class="about-us">
        <div class="about-us-1">
          <img src="assets/newrise/about.jpeg" />
        </div>
        <div class="about-us-2">
          <div class="about-text">
            <p class="about-heading-2">WE ARE</p>
            <p class="about-heading-2">RISE AND LEARN FOUNDATION</p>
            <p class="about-heading-3">
              We are a passionate team of educators, volunteers, and advocates 
              committed to transforming lives through education. Our mission is 
              to ensure that every child has access to quality learning opportunities, 
              regardless of economic barriers. Through scholarships, educational programs, 
              and community initiatives, we help students rise above challenges and 
              learn without limits.
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
      {/* <section class="feature-section">
        <p>
          FEATURED <span style={{ color: "var(--red)" }}>PROGRAMS</span>
        </p>

        <div class="featured-container">
          {data.map((cause) => {
            return (
              <FeaturedCard
                raised={cause.raised_money}
                goal={cause.goal}
                title={cause.title}
                img={cause.photourl}
              />
            );
          })}
        </div>
      </section> */}

      <Slider className="w-full flex overflow-hidden">
        {/* <section class="testimonials">
          <h1>WHAT PEOPLE SAY</h1>

          <div class="dialog">
            <img src="assets/quotes.png" />
            <p style={{ marginBottom: "30px" }}>
              Rise and Learn Foundation has been instrumental in changing my life. 
              Through their scholarship program, I was able to pursue my education 
              and now I'm giving back to my community. Education truly is the key 
              to breaking the cycle of poverty and creating lasting change.
            </p>

            <div class="triangle"></div>
            <span>
              <span style={{ color: "var(--red)" }}>SARAH JOHNSON</span> | SCHOLARSHIP RECIPIENT
            </span>
          </div>

          <div class="test-photos">
            <img src="assets/test1.png" />
            <img src="assets/test2.png" />
            <img src="assets/test3.png" />
            <img src="assets/test4.png" class="display" />
            <img src="assets/test5.png" class="display" />
          </div>
        </section> */}
      </Slider>
      <section class="volunteer">
        <p class="title">
          OUR <span style={{ color: "var(--red)" }}>TEAM</span>
        </p>

        <div class="help-container">
          {team.map((data) => {
            return (
              <div class="cards">
                <div class="help-img">
                  <img src={data.photoUrl} />
                </div>
                <h1>
                  {data.first_name} {data.last_name}
                </h1>
                <p>{data.role}</p>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Home;
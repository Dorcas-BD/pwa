import React from "react";
import "../../styles/styles.css";
import Link from "next/link";
import "@fortawesome/fontawesome-free/css/all.css";

const Hero = () => {
  return (
    <section className="home">
      <div className="home-data">
        <div className="hero-text">
          <h1 className="home-heading">
            Hello, I'm <span className="title-color">Dorcas Bamisile</span>
            <br />I am a Software Engineer
          </h1>

          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Perferendis nulla, ipsa id at illum exercitationem voluptatibus
            recusandae molestias expedita quod! Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Voluptatem, veritatis! Lorem, ipsum
            dolor sit amet consectetur adipisicing elit. Quod eveniet est
            deleniti sed! Soluta, eveniet dolorem officiis ratione vero
            incidunt. <span className="circle-animation"></span>
          </p>

          <div className="hie-btn">
            <Link href="#contacts" className="hire-btn">
              Hire Me
            </Link>
          </div>
        </div>
        <div class="home-img">
          <div className="computer-animation"></div>
          <img className="hero-img" x="50" y="60" src="/perfil.png" />
        </div>
      </div>
      <div className="home-social">
        <a
          href="https://www.linkedin.com/in/dorcasbamisile"
          target="_blank"
          className="home-social-icon"
        >
          <i className="fab fa-linkedin"></i>
        </a>
        <a
          href="https://www.twitter.com/Dorcas_BD"
          target="_blank"
          className="home-social-icon"
        >
          <i className="fab fa-twitter"></i>
        </a>
        <a
          href="https://www.github.com/Dorcas-BD"
          target="_blank"
          className="home-social-icon"
        >
          <i className="fab fa-github"></i>
        </a>
      </div>
    </section>
  );
};

export default Hero;

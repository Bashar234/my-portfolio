import React from "react";

import IMG from "../../assets/images/image-1.png";
import img1 from "../../assets/images/image-2.png";
import img2 from "../../assets/images/image-3.png";
import img3 from "../../assets/images/image-4.png";
import img4 from "../../assets/images/image-5.png";
import img5 from "../../assets/images/image-6.png";
import "./Portfolio.css";

function Portfolio() {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG} alt="" />
          </div>
          <h3>This site is about digital learning.</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/Bashar234/digital-learning-assignment"
              className="btn"
            >
              GitHub
            </a>
            <a
              href="https://bashar234.github.io/digital-learning-assignment/"
              className="btn btn-primary"
            >
              Live Site
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={img1} alt="" />
          </div>
          <h3>This site said about top player budget.</h3>
          <div className="portfolio__item-cta">
            <a
              href=" https://github.com/Bashar234/top-player-ass-5"
              className="btn"
            >
              GitHub
            </a>
            <a
              href="  https://singular-creponne-8d2b43.netlify.app"
              className="btn btn-primary"
            >
              Live Site
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={img2} alt="" />
          </div>
          <h3>This is about reporting news.</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/Bashar234/news-portal-assignment-6"
              className="btn"
            >
              GitHub
            </a>
            <a
              href="https://silver-lily-efe8f1.netlify.app/"
              className="btn btn-primary"
            >
              Live Site
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={img3} alt="" />
          </div>
          <h3>This page say about Physical exercise club.</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/Bashar234/assignment-eight"
              className="btn"
            >
              GitHub
            </a>
            <a
              href="https://euphonious-gnome-228c12.netlify.app"
              className="btn btn-primary"
            >
              Live Site
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={img4} alt="" />
          </div>
          <h3>You can grow your Programming skill here.</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/Bashar234/assignment-nine"
              className="btn"
            >
              GitHub
            </a>
            <a
              href="https://resplendent-bublanina-5d42b7.netlify.app/"
              className="btn btn-primary"
            >
              Live Site
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={img5} alt="" />
          </div>
          <h3>This page is about Online tech</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/Bashar234/Online-tech" className="btn">
              GitHub
            </a>
            <a
              href="https://online-tech-course.web.app"
              className="btn btn-primary"
            >
              Live Site
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Portfolio;

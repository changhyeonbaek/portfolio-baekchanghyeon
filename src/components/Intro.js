import React from 'react'

import ProfileImg01 from '../assets/img/profile-img-01.png'
import ProfileImg02 from '../assets/img/profile-img-02.png'
import { NavLink } from 'react-router-dom'

const Intro = () => {
  return (
    <section className="intro">
      <div className="intro-section">
        <NavLink to="/projects" className="intro-section-projects">
          <img className="main-img" src={ProfileImg01} alt="" />
          <svg
            className="circle-text-svg"
            width="300"
            height="300"
            viewBox="0 0 300 300"
          >
            <path
              id="circlePathProjects"
              d="M 150, 150 m -120, 0 a 120,120 0 1,0 240,0 a 120,120 0 1,0 -240,0"
              fill="none"
            />
            <text>
              <textPath
                href="#circlePathProjects"
                startOffset="50%"
                textAnchor="middle"
              >
                PROJECTS • PROJECTS • PROJECTS •
              </textPath>
            </text>
          </svg>
        </NavLink>
      </div>
      <div className="intro-section">
        <NavLink to="/about" className="intro-section-about">
            <img className="main-img" src={ProfileImg02} alt="" />
            <svg
              className="circle-text-svg"
              width="300"
              height="300"
              viewBox="0 0 300 300"
            >
              <path
                id="circlePathProjects"
                d="M 150, 150 m -120, 0 a 120,120 0 1,0 240,0 a 120,120 0 1,0 -240,0"
                fill="none"
              />
              <text>
                <textPath
                  href="#circlePathProjects"
                  startOffset="50%"
                  textAnchor="middle"
                >
                  ABOUT ME • ABOUT ME • ABOUT ME •
                </textPath>
              </text>
            </svg>
        </NavLink>
      </div>
    </section>
  )
}

export default Intro

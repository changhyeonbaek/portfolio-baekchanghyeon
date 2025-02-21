import React from 'react'

import about from '../assets/img/img-user-05.jpg'
import introContent from '../assets/data/intro-content.json'

const Intro = () => {
  return (
    <section className="intro">
      <div className="intro-inner">
        <h1 className="intro-title">{introContent.title}</h1>
        <div class="intro-lines" aria-hidden="true">
          <span class="line"></span>
          <span class="line"></span>
          <span class="line"></span>
          <span class="line"></span>
          <span class="line"></span>
          <span class="line"></span>
          <span class="line"></span>
        </div>
      </div>
      <div class="intro-text">
        <div class="text">
          <div>{introContent.desc[0]}</div>
          <div>{introContent.desc[1]}</div>
          <div>{introContent.desc[2]}</div>
        </div>
        <div class="img">
          <img src={about} alt="어바웃" />
        </div>
      </div>
      <div class="intro-lines bottom" aria-hidden="true">
        <span class="line"></span>
        <span class="line"></span>
        <span class="line"></span>
        <span class="line"></span>
        <span class="line"></span>
        <span class="line"></span>
        <span class="line"></span>
      </div>
    </section>
  )
}

export default Intro

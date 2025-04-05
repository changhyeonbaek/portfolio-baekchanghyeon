import React, { useState, useEffect, useRef } from 'react'
import ProfileImg01 from '../assets/img/IMG_0085.jpg'
import { NavLink } from 'react-router-dom'

const Profile = () => {
  const keywords = ['Curious', 'Diligent', 'Creative', 'Adaptable']
  const [index, setIndex] = useState(0)
  const [hasScrolledToDesc, setHasScrolledToDesc] = useState(false)
  const profileRef = useRef(null)
  const lineRef = useRef(null)
  const descRef = useRef(null)
  const imageRef = useRef(null)

  const throttle = (func, delay) => {
    let lastCall = 0
    return (...args) => {
      const now = new Date().getTime()
      if (now - lastCall < delay) return
      lastCall = now
      return func(...args)
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % keywords.length)
    }, 4000)

    const handleScroll = () => {
      if (
        lineRef.current &&
        profileRef.current &&
        descRef.current &&
        imageRef.current
      ) {
        const lineTop =
          lineRef.current.getBoundingClientRect().top + window.scrollY
        const descTop =
          descRef.current.getBoundingClientRect().top + window.scrollY
        const scrollPosition = window.scrollY

        if (scrollPosition >= lineTop && !hasScrolledToDesc) {
          profileRef.current.classList.add('is-transitioned')
          window.scrollTo({
            top: descTop,
            behavior: 'smooth',
          })
          setHasScrolledToDesc(true)
        } else if (scrollPosition < lineTop && hasScrolledToDesc) {
          profileRef.current.classList.remove('is-transitioned')
          window.scrollTo({
            top: 0, // 페이지 상단으로 돌아감
            behavior: 'smooth',
          })
          setHasScrolledToDesc(false)
        }

        const scaleStart = lineTop
        const scaleEnd = lineTop + (descTop - lineTop) * 0.4
        let scaleValue = 1
        if (scrollPosition >= scaleStart && scrollPosition <= scaleEnd) {
          scaleValue =
            1 + ((scrollPosition - scaleStart) / (scaleEnd - scaleStart)) * 0.5
        } else if (scrollPosition > scaleEnd) {
          scaleValue = 1.5
        }
        imageRef.current.style.transform = `scale(${scaleValue})`
      }
    }

    const throttledHandleScroll = throttle(handleScroll, 16)

    window.addEventListener('scroll', throttledHandleScroll)

    return () => {
      clearInterval(interval)
      window.removeEventListener('scroll', throttledHandleScroll)
    }
  }, [keywords.length, hasScrolledToDesc])

  return (
    <>
      <div className="profile" ref={profileRef}>
        <div className="profile-header">
          <h1 className="profile-greeting">안녕하세요.</h1>
          <h1 className="profile-greeting">프론트엔드 개발자</h1>
          <div className="profile-info">
            <h1 className="profile-info-name">백창현</h1>
            <p className="profile-info-suffix">입니다.</p>
          </div>
          <span className="line" ref={lineRef}></span>
          <div className="profile-roulette">
            {keywords.map((keyword, idx) => (
              <div
                key={idx}
                className={`profile-word ${index === idx ? 'is-active' : ''}`}
              >
                {keyword}
              </div>
            ))}
          </div>

          <div className="fixed-word">
            <p className="word">Developer</p>
          </div>

          <div className="profile-scroll">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
            >
              <path
                d="M15.0009 13.3329C15.0009 13.8851 15.4486 14.3329 16.0009 14.3329C16.5531 14.3329 17.0009 13.8851 17.0009 13.3329V9.33285C17.0009 8.78057 16.5531 8.33285 16.0009 8.33285C15.4486 8.33285 15.0009 8.78057 15.0009 9.33285V13.3329Z"
                fill="#424242"
              ></path>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M25.0009 12.0986C25.0009 7.66997 21.779 3.89947 17.4045 3.20877C16.4745 3.06192 15.5272 3.06192 14.5972 3.20877C10.2227 3.89947 7.00085 7.66997 7.00085 12.0986V19.9004C7.00085 24.3291 10.2227 28.0996 14.5972 28.7903C15.5272 28.9371 16.4745 28.9371 17.4045 28.7903C21.779 28.0996 25.0009 24.3291 25.0009 19.9004V12.0986ZM17.0926 5.18429C20.495 5.72151 23.0009 8.65412 23.0009 12.0986L23.0009 19.9004C23.0009 23.3449 20.495 26.2775 17.0926 26.8148C16.3692 26.929 15.6325 26.929 14.9091 26.8148C11.5068 26.2775 9.00085 23.3449 9.00085 19.9004L9.00086 12.0986C9.00086 8.65412 11.5068 5.72151 14.9091 5.18429C15.6325 5.07008 16.3692 5.07008 17.0926 5.18429Z"
                fill="#424242"
              ></path>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M7.00085 13L12.0009 18L17.0009 13"
                stroke="#424242"
                strokeLinecap="round"
              ></path>
              <path
                d="M7.00085 7L12.0009 12L17.0009 7"
                stroke="#424242"
                strokeLinecap="round"
              ></path>
            </svg>
          </div>
        </div>

        <div className="profile-desc" ref={descRef}>
          <h2 className="title">About Me</h2>

          <div className="profile-details">
            <div className="profile-image">
              <img
                src={ProfileImg01}
                alt="Profile"
                className="profile-avatar"
                ref={imageRef}
              />
            </div>

            <div className="personal-info">
              <p>🙋🏻‍♂️ : 백 창 현</p>
              <p>📍 : 서울</p>
              <p>🎂 : 1997년 8월 2일</p>
              <p>📞 : 010-2880-4502</p>
              <p>🏫 : 인하공업전문대학</p>
              <p>📨 : sabondev@gmail.com</p>
            </div>
          </div>

          <div className="content">
            <h3>
              서로 존중하며 결과물을 만들어가는 공동체의 일원으로서, 책임감과
              열린 마음으로 최선을 다합니다. <br />
              꼼꼼한 소통과 헌신으로 신뢰받는 개발자가 되겠습니다.
            </h3>
          </div>

          <span className="line is-bottom"></span>

          <div className="button-container">
            <div className="button-wrapper">
              <NavLink to="/" className="button-link">
                HOME
              </NavLink>
            </div>
            <div className="button-wrapper">
              <NavLink to="/projects" className="button-link">
                PROJECTS
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Profile

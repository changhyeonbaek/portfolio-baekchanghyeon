import React, { useState, useRef, useEffect } from 'react'
import axios from 'axios'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const Projects = () => {
  const [projectsData, setProjectsData] = useState([])
  const [selectedProjectId, setSelectedProjectId] = useState(null)
  const [loading, setLoading] = useState(true)
  const sliderRef = useRef(null)

  const handleButtonClick = (id) => {
    setSelectedProjectId(id)
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(0)
    }
  }

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get(
          'https://raw.githubusercontent.com/changhyeonbaek/portfolio-images/main/projects.json?cache_bust=' +
            new Date().getTime()
        )
        setProjectsData(response.data)
        setSelectedProjectId(response.data[0]?.id || null)
        setLoading(false)
      } catch (error) {
        console.error('Error fetching projects :', error)
        setLoading(false)
      }
    }

    fetchProjects()
  }, [])

  const currentProject = projectsData.find(
    (project) => project.id === selectedProjectId
  )

  const imageSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  }

  if (loading) {
    return (
      <div className="loading-container">
        <div className="spinner"></div>
        <p>프로젝트를 불러오는 중...</p>
      </div>
    )
  }

  if (!projectsData.length) {
    return <div>프로젝트 데이터를 불러올 수 없습니다. 네트워크를 확인해주세요.</div>
  }

  return (
    <div className="outer-container">
      <div className="content-wrapper">
        <div className="left-section">
          <h1 className="fixed-title">Projects</h1>
          <div className="buttons-container">
            {projectsData.map((project) => (
              <button
                key={project.id}
                className={`project-button ${
                  project.id === selectedProjectId ? 'is-active' : ''
                }`}
                onClick={() => handleButtonClick(project.id)}
              >
                {project.title}
                <br />
                {project.details.type}
              </button>
            ))}
          </div>
        </div>
        <div className="right-section">
          <div className="project-content">
            {currentProject ? (
              <div className="project-card">
                <Slider
                  ref={sliderRef}
                  {...imageSettings}
                  className="image-slider"
                >
                  {(currentProject.images || [currentProject.image]).map(
                    (image, index) => (
                      <div key={index}>
                        <img
                          src={image}
                          alt={`${currentProject.title} ${index + 1}`}
                          onError={() =>
                            console.error(`Failed to load image: ${image}`)
                          }
                        />
                      </div>
                    )
                  )}
                </Slider>
                <div className="project-details">
                  <h2 className="project-details-title">
                    {currentProject.title}
                  </h2>
                  <p className="type">
                    <strong>Type : </strong> {currentProject.details.type}
                  </p>
                  <div className="tech">
                    <strong>Tech : </strong>
                    <div className="tech-tags-container">
                      {currentProject.details.tech
                        .split(', ')
                        .map((tech, index) => (
                          <span key={index} className="tech-tag">
                            {tech}
                          </span>
                        ))}
                    </div>
                  </div>
                  <p className="desc">{currentProject.details.description}</p>
                  <div className="button-group">
                    <a
                      className="button"
                      href={currentProject.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="button-text">Github</span>
                    </a>
                    <a
                      className="button"
                      href={currentProject.links.deploy}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="button-text">DeployPage</span>
                    </a>
                  </div>
                </div>
              </div>
            ) : (
              <p>프로젝트가 없습니다.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects

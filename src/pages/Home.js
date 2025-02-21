import React from 'react'
import Skip from '../components/Skip'
import Header from '../components/Header'
import Main from '../components/Main'
import Intro from '../components/Intro'
import Skill from '../components/Skill'
import Port from '../components/Port'
import Site from '../components/Site'
import Contact from '../components/Contact'

const Home = () => {
  return (
    <>
      <Skip/>
      <Header/>
      <Main>
            <Intro />
            <Skill />
            <Site />
            <Port />
            <Contact />
        </Main>
    </>
  )
}

export default Home

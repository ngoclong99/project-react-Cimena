import React, { Fragment } from 'react'
import ScrollToTop from './../../components/ScrollToTop'
import HomeCarousel from './../../templates/HomeTemplate/Layout/HomeCarousel/HomeCarousel'
import HomeMenu from './HomeMenu/HomeMenu'
import ListFilm from './ListFilm/ListFilm'

Home.propTypes = {}

function Home(props) {
  return (
    <Fragment>
      <HomeCarousel />
      <ListFilm />
      <HomeMenu />
      <ScrollToTop />
    </Fragment>
  )
}

export default Home

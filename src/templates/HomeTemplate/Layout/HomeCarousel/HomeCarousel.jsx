import React, { Fragment, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Carousel } from 'antd'
import { phimAPI } from './../../../../api/phimAPI'

HomeCarousel.propTypes = {}

function HomeCarousel(props) {
  const [carousel, Setcarousel] = useState([])

  const contentStyle = {
    maxHeight: '450px',
    backgroundColor: 'rgba(181, 183, 184,0.7)'
    // 'background-size': 'cover',
    // 'background-repeat': 'no-repeat',
    // 'background-position': 'center'
  }

  useEffect(() => {
    ;(async () => {
      try {
        const { content } = await phimAPI.getListBanner()
        Setcarousel(content)
      } catch (error) {
        console.log(error)
      }
    })()
    return () => {}
  }, [])

  return (
    <Carousel effect="fade" className="">
      {carousel.map((el) => (
        <div key={el.maBanner}>
          <img src={el.hinhAnh} alt={el.maBanner} className="w-full h-full" style={contentStyle} />
        </div>
      ))}
    </Carousel>
  )
}

export default HomeCarousel

import React from 'react'
import PropTypes from 'prop-types'

RapCluster.propTypes = {
  rap: PropTypes.object
}

function RapCluster({ rap = {} }) {
  return (
    <div className="flex text-left text-sm md:w-[250px] lg:w-[300px]  truncate -ml-[24px]">
      <img className="rounded-sm mr-2" src={rap.hinhAnh} width={40} alt={rap.tenCumRap} />
      {rap.tenCumRap}
      <br />
      {rap.diaChi}
    </div>
  )
}

export default RapCluster

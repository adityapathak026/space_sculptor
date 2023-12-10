import React from 'react'
import { servicesData } from '../constants'

const Services = () => {
  return (
    <div className='services container'>
      {servicesData.map((service) => (
        <div key={service.id} className='services_content'>
        <img src={service.img} alt="" />
        <h2>{service.text}</h2>
      </div>
      ))}
      <button className='services btn'>Contact Us</button>
    </div>
  )
}

export default Services
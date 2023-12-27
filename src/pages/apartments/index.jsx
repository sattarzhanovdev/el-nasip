import React from 'react'
import c from './apartments.module.scss'
import { APARTMENTS } from '../../utils/floors'
import image from '../../images/image.png'
import { useNavigate } from 'react-router-dom'
import { IoIosArrowBack } from "react-icons/io";
import { API } from '../../api'

const Apartments = () => {
  const Navigate = useNavigate()

  const floor = localStorage.getItem('floor')

  return (
    <div className={c.floors}>
      <div className={c.back} onClick={() => Navigate('/floors/')}>
        <span>
          <IoIosArrowBack />
        </span>
      </div>
      <div className={c.left__content}>
        <h2>Выберите квартиру</h2>
        <div className={c.btns}>
          {
            APARTMENTS.map(item => (
              <button 
                onClick={() => {
                  Navigate(`/apartments/${item}/`)
                  API.putValue(String(item))
                }}
              >
                {floor === '13' ? item : item+4*floor-4}
              </button>
            ))
          }
        </div>
      </div>
      <div className={c.right__content}>
        <img src={image} alt="" />
      </div>
    </div>
  )
}

export default Apartments
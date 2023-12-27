import React from 'react'
import c from './floors.module.scss'
import { FLOORS } from '../../utils/floors'
import image from '../../images/image.png'
import { useNavigate } from 'react-router-dom'
import { IoIosArrowBack } from "react-icons/io";
import { API } from '../../api'


const Floors = () => {
  const Navigate = useNavigate()

  return (
    <div className={c.floors}>
      <div className={c.back} onClick={() => Navigate('/')}>
        <span>
          <IoIosArrowBack />
        </span>
      </div>
      <div className={c.left__content}>
        <h2>Выберите этаж</h2>
        <div className={c.btns}>
          {
            FLOORS.map(item => (
              <button   
                onClick={() => {
                  localStorage.setItem('floor', item)
                  API.putValue(
                    item === 1 ? 
                    'a':
                    item === 2 ?
                    'b' :
                    item === 3 ?
                    'c' :
                    item === 4 ? 
                    'd' :
                    item === 5 ?
                    'e' :
                    item === 6 ?
                    'f' :
                    item === 7 ?
                    'g' :
                    item === 8 ?
                    'h' :
                    item === 9 ?
                    'i' :
                    item === 10 ?
                    'j' :
                    item === 11 ?
                    'k' :
                    item === 12 ?
                    'l' :
                    'v  '
                  )
                  Navigate('/apartments/')
                }}
              >
                {item}
              </button>
            ))
          }
          <button
            onClick={() => {
              localStorage.setItem('floor', 13)
              API.putValue('m')
              Navigate('/apartments/')
            }}
          >
            Пентхаус
          </button>
        </div>
      </div>
      <div className={c.right__content}>
        <img src={image} alt="" />
      </div>
    </div>
  )
}

export default Floors
import React from 'react'
import c from './photo.module.scss'
import { useNavigate, useParams } from 'react-router-dom'
import { IoIosArrowBack } from 'react-icons/io'
import { ApartmentsPhotos } from '../../images/apartments'

const Photo = () => {
  const id = Number(useParams().id)
  const floor = Number(localStorage.getItem('floor'))
  console.log(id);

  const Navigate = useNavigate()
  return (
    <div className={c.photo}>
      <div className={c.back} onClick={() => Navigate('/apartments/')}>
        <span>
          <IoIosArrowBack />
        </span>
      </div>

      <div className={c.image}>
        <img 
          src={
            floor <= 11 ? 
          
              id === 1 ?
              ApartmentsPhotos.third :
              id === 2 ?
              ApartmentsPhotos.second :
              id === 3 ?
              ApartmentsPhotos.fourth :
              id === 4 ?
              ApartmentsPhotos.first :
              ''

            :

            floor === 12 ? 

              id === 1 ?
              ApartmentsPhotos.third12 :
              id === 2 ?
              ApartmentsPhotos.second12 :
              id === 3 ?
              ApartmentsPhotos.fourth12 :
              id === 4 ?
              ApartmentsPhotos.first12 :
              ''

            :
            
              id === 1 ?
              ApartmentsPhotos.thirdPent :
              id === 2 ?
              ApartmentsPhotos.secondPent :
              id === 3 ?
              ApartmentsPhotos.fourthPent :
              id === 4 ?
              ApartmentsPhotos.firstPent :
              ''
          }
          alt=""
        />
      </div>
    </div>
  )
}

export default Photo
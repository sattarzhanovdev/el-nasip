import React from 'react'
import c from './main.module.scss'
import logo from '../../images/logo.png'
import house from '../../images/image.png'
import { API } from '../../api'
import { useNavigate } from 'react-router-dom'

const Main = () => {
  const [ on, setOn ] = React.useState(false)
  const [ on2, setOn2 ] = React.useState(false)

  const Navigate = useNavigate()
  
  React.useEffect(() => {
    setOn2(localStorage.getItem('statusPod'))
  }, [setOn2])

  return (
    <div className={c.container}>
      <div className={c.main}>
        <div className={c.left__content}>
          <div className={c.logo}>
            <img 
              src={logo} 
              alt="logo"
            />
          </div>
          <div className={c.btns}>
            <button
              onClick={() => {
                API.putValue('v')
                localStorage.setItem('status', true)
                setOn(true)
                Navigate('/floors/')
              }}
            >
              Включить все дома
            </button>
            {
              on2 ?
              <button
                className={c.off}
                onClick={() => {
                  API.putValue('p')
                  setOn2(!on2)
                  localStorage.setItem('statusPod', on2)
                }}
              >
                Выключить подъезд
              </button> :
              <button
                className={c.pod}
                onClick={() => {
                  API.putValue('P')
                  setOn2(!on2)
                  localStorage.setItem('statusPod', on2)
                }}
              >
                Включить подъезд
              </button>
            }
            <button
              className={c.off}
              onClick={() => {
                API.putValue('_')
              }}
            >
              Выключить все дома
            </button>
            {
              on ?
              <button
                className={on ? c.off : ''}
                onClick={() => {
                  API.putValue('_')
                  setOn(false)
                }}
              >
                Выключить демо режим
              </button>
              :
              <button
                onClick={() => {
                  API.putValue('D')
                  setOn(true)
                }}
              >
                Включить демо режим
              </button>
            }
          </div>
        </div>
        <div className={c.right__content}>
          <img 
            src={house} 
            alt="house"
          />
        </div>
      </div>
    </div>
  )
}

export default Main